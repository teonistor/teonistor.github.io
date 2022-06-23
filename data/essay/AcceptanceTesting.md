On the impossibility of acceptance test data management
------------------------
Like many bog-standard well-tested programs of the mid-early 21st century, the program I'm working on is accompanied by a suite of Cucumber features which we are pleased to call the _Acceptance Tests_.

First, let me argue into the void of this page why this name is probably wrong:

But that would double the time acceptance testing takes, which is already the single biggest block of execution in the build pipeline of the program I am currently working on.
Oh, I know! Pull the branch name from the environment and run one way if it's the PR build, and the other way if it's the branch build. Since we need two green builds for a merge, we might as well use them



12 mar midnight thoughts
And we went to the BA and he said that's expected, you have to store it.
But... why?!
Just store it.
This brings me to the question of: when is storage a valid business requirement? And the corollary: when is storage a valid acceptance test?
There is audit,



Getting drunk on microservies / independent deployability

The nasty about these microservices is we're not doing backwards and forwards compatibility; in fact it would be super hard, especially in the early stages where everything is so volatile. What if it were a P1 any time users got a 500 error 3 times in a row? And if users were as many and permanent as they come? Like, we sent an email the other day: "Please don't use this for an hour; we're migrating." You couldn't send that if your user base was all Visa cardholders of the continent!

I invented the word _macroservice_ in irony, but now I see the balance.
Though I don't condemn _doing things because they're sexy_ when time permits, and appreciate workplaces that allow it.

