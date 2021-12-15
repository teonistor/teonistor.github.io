On the impossibility of acceptance test data management
------------------------
Like many bog-standard well-tested programs of the mid-early 21st century, the program I'm working on is accompanied by a suite of Cucumber features which we are pleased to call the _Acceptance Tests_.

First, let me argue into the void of this page why this name is probably wrong:

But that would double the time acceptance testing takes, which is already the single biggest block of execution in the build pipeline of the program I am currently working on.
Oh, I know! Pull the branch name from the environment and run one way if it's the PR build, and the other way if it's the branch build. Since we need two green builds for a merge, we might as well use them


