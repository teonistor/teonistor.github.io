This Should Never Happen
------------------------
You are a software engineer in a place of many requirements thrown around haphazardly. You work on a service which, like most bog-standard services, is written in Java, with Spring and JPA, uses an SQL database, and runs in the cloud.

One day you start working on this pesky ticket: a new requirement came in, giving a sequence which previously only happened once within a certain process the possibility to repeat until some conditions are met, conditions which incur human action which is always a great displeasure to deal with – and that's not even the main worry. This sequence incurs some back-and-forth communication with 2 other services and touches 5 tables in total, of which 3 will need to be changed to account for the repetition (you future-proofed the other 2 from the get-go because you overheard some conversation from the analysts' meeting).

So you add a column to each of the 3 tables and include it in the primary key, which will allow the previously unique key to repeat as many times as the sequence will need to. That'll do when running locally – you'll bother about the migration later. You update the relevant entity classes with the new field, and with a bit of power from the refactoring tool they propagate everywhere without any problem whatsoever.

Then you update your repositories, because `JpaRepository` takes two type arguments: the entity and its ID; you conveniently reuse a class with two strings for the ID because why the heck not.

You attempt to compile the whole project just to grasp the magnitude of the difficulty, and you notice something strange: some classes which have nothing to do with the sequence you're working on are failing to compile! This is when impact to other parts of the system – or to put it eloquently, to other business use cases – becomes visible; it was of course invisible to the business, invisible to the BAs, invisible even to the AD team analysing the ticket during the sprint plan. It is only made visible by code not compiling.

You sit for a minute and reflect upon this aspect of fatality of your trade.

Reading the code, you immediately understand the problem: data from your tables in question is being referenced from other flows, by its obsoleted primary key. You quickly create a new method to query by that old key alone and Hibernate happily obliges; but to stay true to the schema, this new method must return a set, not a single record. But those unaffected flows _require_ a single record...

You look at old Jira tickets dug out of commit messages dating back to the establishment of those flows and rationally work out that you cannot possibly end up with multiple records in those cases, even though the schema doesn't enforce it. The zero records case is already handled and would be due to invalid input. So you grit your teeth as you type out an old disgusting Java incantation:

`return set.iterator().next();`

That _should_ be fine. There _should_ be a single record. _But what if there isn't?_

You try your best to sensibly choose one record out of the set. That's hard; not the code – coding is easy – but the decision of how to choose it. On what basis? Lengths? Timestamps? You cannot ask the BAs because for this situation to happen the whole system would need to have long derailed from the normal course of the business. No, the business would have no answer to this. To get the point across, you add this line:

`log.warn("TSNH - expected a single record but found {}", set.size());`

In the subsequent code review, colleagues ask what TSNH means and you calmly explain that it stands for _This Should Never Happen_. In other words, there’s no room within the business rules for such a case to occur; if it does, it's either because of a bug in your or a partner system, or due to a misadventurous manual intervention which placed the system in a state it could not have reached on its own.

All in all, _This Should Never Happen_ is a complaint about the _postconditions_ of a previously executed process. It's not a complaint about bad users and their bad input – that would be _preconditions_ not being met and we deal with it all the time, quietly. When postconditions aren't met, the system violated itself; the system is acting mysteryously; the system has gone nuts. **This should never happen.**

Still, you have to code around it.
  _____________
_<small style="text-align:right;width:100%;display:inline-block">(December 2021)</small>_