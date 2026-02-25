export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export const quizData: Question[] = [
  // Branches (1-10)
  { question: "1. What is the difference between `git branch -d` and `git branch -D`?", options: ["-d checks if merged, -D forces deletion", "-D checks if merged, -d forces", "Both are the same", "-d deletes remote, -D local"], answer: "-d checks if merged, -D forces deletion" },
  { question: "2. Which command shows the last commit on each branch?", options: ["git branch -v", "git branch --verbose", "git branch -l", "git log --branches"], answer: "git branch -v" },
  { question: "3. How do you rename the current branch?", options: ["git branch -m new-name", "git branch --rename new-name", "git switch -m new-name", "git checkout -b new-name"], answer: "git branch -m new-name" },
  { question: "4. What does `git branch --show-current` return?", options: ["Current branch name", "All tracking branches", "HEAD commit hash", "Upstream branch name"], answer: "Current branch name" },
  { question: "5. Which flag makes `git branch` list branches in color even when output is piped?", options: ["--color=always", "--show-color", "-c always", "--list --color"], answer: "--color=always" },
  { question: "6. How do you create an orphan branch (no history)?", options: ["git checkout --orphan new-branch", "git branch --orphan new-branch", "git switch --orphan new-branch", "git init --orphan new-branch"], answer: "git checkout --orphan new-branch" },
  { question: "7. What command sets upstream tracking while pushing for the first time?", options: ["git push -u origin branch", "git push --set-upstream origin branch", "git branch -u origin/branch", "Both A and B"], answer: "Both A and B" },
  { question: "8. How do you list branches that contain a specific commit?", options: ["git branch --contains <commit>", "git branch -c <commit>", "git branch --has <commit>", "git log --branches --grep=<commit>"], answer: "git branch --contains <commit>" },
  { question: "9. What does `git branch -m old new` do if `new` already exists?", options: ["Fails", "Overwrites new branch", "Renames old to new-backup", "Creates new2"], answer: "Fails" },
  { question: "10. Which command deletes a remote branch?", options: ["git push origin --delete branch", "git branch -d origin/branch", "git push origin :branch", "Both A and C"], answer: "Both A and C" },

  // Pull Requests (11-20)
  { question: "11. What GitHub permission level is required to merge a PR?", options: ["Write", "Maintain", "Triage", "Read"], answer: "Write" },
  { question: "12. Which merge method keeps individual commits but adds a merge commit?", options: ["Create a merge commit", "Squash and merge", "Rebase and merge", "Fast-forward"], answer: "Create a merge commit" },
  { question: "13. What does 'Update with rebase' button do in a PR?", options: ["Rebases source branch onto target", "Merges target into source", "Squashes source commits", "Cherry-picks target"], answer: "Rebases source branch onto target" },
  { question: "14. How can you close a PR without merging?", options: ["Comment with /close", "Click Close pull request", "Delete the branch", "Merge then revert"], answer: "Click Close pull request" },
  { question: "15. What automatically happens when you merge a PR with 'fix #123' in title/description?", options: ["Issue #123 is closed", "Issue is assigned to merger", "PR is labeled bugfix", "Nothing"], answer: "Issue #123 is closed" },
  { question: "16. Which PR setting requires linear history (no merge commits)?", options: ["Require linear history", "Require rebase merging", "Disallow merge commits", "Protect branch — Require linear history"], answer: "Protect branch — Require linear history" },
  { question: "17. What is the difference between Draft PR and normal PR?", options: ["Draft cannot be merged until marked ready", "Draft is hidden from reviewers", "Draft auto-deletes branch", "No difference"], answer: "Draft cannot be merged until marked ready" },
  { question: "18. How do you compare changes across forks in a PR?", options: ["base: upstream:main ← compare: your-username:patch-1", "Use compare view", "Both A and B", "Only via CLI"], answer: "Both A and B" },
  { question: "19. What does checking 'Delete branch' after merge do?", options: ["Deletes remote branch", "Deletes local branch", "Archives branch", "Nothing"], answer: "Deletes remote branch" },
  { question: "20. Which action dismisses stale approvals when new commits are pushed?", options: ["Dismiss stale pull request approvals when new commits are pushed", "Require fresh approvals", "Auto-re-request review", "Stale review protection"], answer: "Dismiss stale pull request approvals when new commits are pushed" },

  // PR Review (21-30)
  { question: "21. What status does a PR need to be mergeable with required reviews?", options: ["Approved by at least X reviewers", "No 'Changes requested' reviews", "Both A and B", "Only conversation resolved"], answer: "Both A and B" },
  { question: "22. How do you request a review from a CODEOWNERS file automatically?", options: ["It happens automatically if set", "Manually add reviewer", "Add /reviewers @team", "No such feature"], answer: "It happens automatically if set" },
  { question: "23. What does 'Resolve conversation' do?", options: ["Hides the thread", "Marks thread as resolved", "Deletes comments", "Approves PR"], answer: "Marks thread as resolved" },
  { question: "24. Which review type does NOT block merging?", options: ["Comment", "Approve", "Request changes", "All block"], answer: "Comment" },
  { question: "25. How can you suggest a code change in review?", options: ["Inline suggestion block", "Comment with ```suggestion", "Both A and B", "Only via commit"], answer: "Both A and B" },
  { question: "26. What is the purpose of a PR template?", options: ["To standardize PR descriptions", "To auto-assign reviewers", "To run tests", "To deploy code"], answer: "To standardize PR descriptions" },
  { question: "27. How many reviewers are typically required for production code?", options: ["At least 1", "At least 2", "No requirement", "Depends on team policy"], answer: "Depends on team policy" },
  { question: "28. What does CODEOWNERS file do?", options: ["Auto-assigns reviewers based on files", "Defines code owners", "Both A and B", "Nothing"], answer: "Both A and B" },
  { question: "29. Can you approve your own PR?", options: ["No, not if self-approval is disabled", "Yes, always", "Only for minor changes", "Only on weekends"], answer: "No, not if self-approval is disabled" },
  { question: "30. What is a 'Changes Requested' review?", options: ["Blocks merge until addressed", "Just a suggestion", "Optional feedback", "Auto-approval"], answer: "Blocks merge until addressed" },

  // Merge (31-40)
  { question: "31. What merge strategy avoids creating a merge commit when possible?", options: ["--ff (fast-forward)", "--no-ff", "--ff-only", "--squash"], answer: "--ff (fast-forward)" },
  { question: "32. Which command performs a squash merge locally?", options: ["git merge --squash feature", "git merge -s ours feature", "git rebase --squash", "git commit --squash"], answer: "git merge --squash feature" },
  { question: "33. What happens if you `git merge --abort` during conflict resolution?", options: ["Returns to pre-merge state", "Keeps conflicted files", "Deletes branch", "Force pushes"], answer: "Returns to pre-merge state" },
  { question: "34. Which merge option creates commit even if fast-forward possible?", options: ["--no-ff", "--ff", "--squash", "--no-commit"], answer: "--no-ff" },
  { question: "35. What is an octopus merge?", options: ["Merge of 3+ branches at once", "Merge with 8 conflicts", "Fast-forward merge", "Squash of 8 commits"], answer: "Merge of 3+ branches at once" },
  { question: "36. What is a merge conflict?", options: ["When Git cannot auto-merge changes", "Disagreement between developers", "Branch deletion error", "Commit error"], answer: "When Git cannot auto-merge changes" },
  { question: "37. How do you resolve a merge conflict?", options: ["Manually edit and commit", "Delete files", "Run git merge --abort", "Create new branch"], answer: "Manually edit and commit" },
  { question: "38. What does `git merge --no-commit` do?", options: ["Prepares merge without committing", "Cancels merge", "Creates empty commit", "Squashes commits"], answer: "Prepares merge without committing" },
  { question: "39. What is a three-way merge?", options: ["Uses common ancestor commit", "Merges 3 branches", "3 people merge", "3 conflicts"], answer: "Uses common ancestor commit" },
  { question: "40. Which merge strategy takes only current branch changes?", options: ["-s ours", "-s theirs", "--squash", "--ff-only"], answer: "-s ours" },

  // Rebase (41-50)
  { question: "41. What is the main risk of `git rebase` on a shared branch?", options: ["Rewrites public history", "Creates duplicate commits", "Deletes remote branch", "No risk"], answer: "Rewrites public history" },
  { question: "42. Which command is safest to force-push after rebase?", options: ["git push --force-with-lease", "git push -f", "git push --force-if-includes", "git push --no-force"], answer: "git push --force-with-lease" },
  { question: "43. In `git rebase -i`, what does 'reword' do?", options: ["Changes commit message", "Edits commit content", "Squashes into previous", "Drops commit"], answer: "Changes commit message" },
  { question: "44. How do you abort an interactive rebase in progress?", options: ["git rebase --abort", "git rebase --quit", "git reset --hard ORIG_HEAD", "Both A and C"], answer: "git rebase --abort" },
  { question: "45. What does `git rebase --onto new-base old-base` do?", options: ["Replays commits after old-base onto new-base", "Merges old-base into new-base", "Squashes old-base", "Resets to new-base"], answer: "Replays commits after old-base onto new-base" },
  { question: "46. What is 'fixup' in interactive rebase?", options: ["Squashes commit without keeping message", "Fixes conflicts", "Edits commit", "Drops commit"], answer: "Squashes commit without keeping message" },
  { question: "47. Can you rebase a merge commit?", options: ["Yes, with --rebase-merges", "No, never", "Only with --ff", "Only locally"], answer: "Yes, with --rebase-merges" },
  { question: "48. What does `git rebase --skip` do?", options: ["Skips current commit", "Aborts rebase", "Continues rebase", "Restarts rebase"], answer: "Skips current commit" },
  { question: "49. When should you NOT rebase?", options: ["On shared/public branches", "On feature branches", "Before pushing", "After pulling"], answer: "On shared/public branches" },
  { question: "50. What is the benefit of rebase over merge?", options: ["Linear history", "Preserves exact history", "Faster", "Safer"], answer: "Linear history" },

  // Cherry-pick (51-60)
  { question: "51. What does `git cherry-pick -e <commit>` do?", options: ["Opens editor to change message", "Edits commit changes", "Excludes commit", "Cherry-picks empty commit"], answer: "Opens editor to change message" },
  { question: "52. How do you cherry-pick a range of commits?", options: ["git cherry-pick commitA^..commitB", "git cherry-pick commitA..commitB", "git rebase --onto", "git merge --cherry-pick"], answer: "git cherry-pick commitA^..commitB" },
  { question: "53. What flag continues cherry-pick after resolving conflicts?", options: ["git cherry-pick --continue", "git add . && git cherry-pick --continue", "git commit", "git rebase --continue"], answer: "git cherry-pick --continue" },
  { question: "54. Which option adds original commit reference in message?", options: ["-x", "--reference", "-r", "--signoff"], answer: "-x" },
  { question: "55. What happens if cherry-pick hits a conflict?", options: ["Stops and lets you resolve", "Skips commit", "Aborts automatically", "Creates conflict commit"], answer: "Stops and lets you resolve" },
  { question: "56. How do you cherry-pick without committing?", options: ["git cherry-pick -n", "git cherry-pick --no-commit", "git cherry-pick --stage", "Both A and B"], answer: "Both A and B" },
  { question: "57. Which command cherry-picks last 3 commits from another branch?", options: ["git cherry-pick branch~3..branch", "git cherry-pick branch~~~..branch", "git cherry-pick branch^3..branch", "All similar"], answer: "git cherry-pick branch~3..branch" },
  { question: "58. What is a common use-case for cherry-pick?", options: ["Backporting hotfix to release branch", "Rewriting entire history", "Squashing PR", "Creating new repo"], answer: "Backporting hotfix to release branch" },
  { question: "59. After cherry-pick conflict → resolve → what next?", options: ["git cherry-pick --continue", "git commit -c ORIG_COMMIT", "git add . && git cherry-pick --continue", "Both A and C"], answer: "Both A and C" },
  { question: "60. What does `git cherry` command show (without -pick)?", options: ["Commits not yet applied from upstream", "All cherry-picked commits", "Conflicting commits", "Commit graph"], answer: "Commits not yet applied from upstream" },

  // Git Basics (61-70)
  { question: "61. What command initializes a new Git repository?", options: ["git init", "git start", "git create", "git new"], answer: "git init" },
  { question: "62. How do you clone a remote repository?", options: ["git clone <url>", "git copy <url>", "git download <url>", "git fetch <url>"], answer: "git clone <url>" },
  { question: "63. What does `git status` show?", options: ["Working directory state", "Commit history", "Remote branches", "Config settings"], answer: "Working directory state" },
  { question: "64. How do you stage all changes?", options: ["git add .", "git stage all", "git add --all", "Both A and C"], answer: "Both A and C" },
  { question: "65. What does `git commit -m` do?", options: ["Commits with message", "Commits all files", "Modifies last commit", "Merges changes"], answer: "Commits with message" },
  { question: "66. How do you view commit history?", options: ["git log", "git history", "git show", "git view"], answer: "git log" },
  { question: "67. What does `git push` do?", options: ["Uploads commits to remote", "Downloads commits", "Creates branch", "Merges branches"], answer: "Uploads commits to remote" },
  { question: "68. How do you fetch remote changes without merging?", options: ["git fetch", "git pull", "git download", "git get"], answer: "git fetch" },
  { question: "69. What does `git pull` do?", options: ["Fetch + Merge", "Only fetch", "Only merge", "Creates branch"], answer: "Fetch + Merge" },
  { question: "70. How do you undo the last commit (keep changes)?", options: ["git reset --soft HEAD~1", "git reset --hard HEAD~1", "git revert HEAD", "git commit --undo"], answer: "git reset --soft HEAD~1" },

  // Advanced Git (71-80)
  { question: "71. What is a Git hook?", options: ["Script that runs on Git events", "A type of branch", "A merge strategy", "A remote repository"], answer: "Script that runs on Git events" },
  { question: "72. Where are Git hooks stored?", options: [".git/hooks/", ".hooks/", "hooks/", ".git/hooks-custom/"], answer: ".git/hooks/" },
  { question: "73. What does `git stash` do?", options: ["Temporarily saves changes", "Deletes changes", "Commits changes", "Pushes changes"], answer: "Temporarily saves changes" },
  { question: "74. How do you apply stashed changes?", options: ["git stash pop", "git stash apply", "git stash get", "Both A and B"], answer: "Both A and B" },
  { question: "75. What is `git bisect` used for?", options: ["Finding buggy commit", "Merging branches", "Stashing changes", "Creating tags"], answer: "Finding buggy commit" },
  { question: "76. What does `git reflog` show?", options: ["All reference updates", "Commit history", "Branch list", "Remote URLs"], answer: "All reference updates" },
  { question: "77. How do you create a lightweight tag?", options: ["git tag v1.0", "git tag -a v1.0", "git tag -m v1.0", "git create-tag v1.0"], answer: "git tag v1.0" },
  { question: "78. What is a submodule?", options: ["Repository inside repository", "A type of branch", "A merge strategy", "A hook type"], answer: "Repository inside repository" },
  { question: "79. What does `git worktree` do?", options: ["Creates additional working directories", "Shows file tree", "Lists branches", "Shows commit graph"], answer: "Creates additional working directories" },
  { question: "80. How do you configure Git user email?", options: ["git config user.email", "git set email", "git user --email", "git config --email"], answer: "git config user.email" },

  // Git Workflow (81-90)
  { question: "81. What is Git Flow?", options: ["Branching workflow", "A Git command", "A Git tool", "A merge strategy"], answer: "Branching workflow" },
  { question: "82. What branch is for production-ready code in Git Flow?", options: ["main/master", "develop", "feature", "hotfix"], answer: "main/master" },
  { question: "83. What is trunk-based development?", options: ["Everyone commits to main frequently", "Long-running feature branches", "Release branches only", "No branching"], answer: "Everyone commits to main frequently" },
  { question: "84. What is a feature branch?", options: ["Branch for developing features", "Main branch", "Release branch", "Hotfix branch"], answer: "Branch for developing features" },
  { question: "85. How long should feature branches live?", options: ["As short as possible", "Indefinitely", "At least a month", "Until release"], answer: "As short as possible" },
  { question: "86. What is a release branch?", options: ["Branch for preparing releases", "Main branch", "Feature branch", "Hotfix branch"], answer: "Branch for preparing releases" },
  { question: "87. What is a hotfix branch?", options: ["Branch for urgent production fixes", "Feature branch", "Release branch", "Test branch"], answer: "Branch for urgent production fixes" },
  { question: "88. What is CI/CD?", options: ["Continuous Integration/Delivery", "Code Integration/Deployment", "Continuous Development", "Code Deployment"], answer: "Continuous Integration/Delivery" },
  { question: "89. What is a pull-based workflow?", options: ["Contributors push to forks, maintainers pull", "Everyone pushes to main", "No pulling allowed", "Centralized workflow"], answer: "Contributors push to forks, maintainers pull" },
  { question: "90. What is code review?", options: ["Examining code before merge", "Running tests", "Deploying code", "Writing documentation"], answer: "Examining code before merge" },

  // Git Remote (91-100)
  { question: "91. How do you add a remote repository?", options: ["git remote add origin <url>", "git add remote origin", "git remote add <url>", "git origin add <url>"], answer: "git remote add origin <url>" },
  { question: "92. What does `git remote -v` show?", options: ["Remote URLs", "All remotes", "Verbose output", "Both A and B"], answer: "Both A and B" },
  { question: "93. How do you rename a remote?", options: ["git remote rename old new", "git remote rename old-new", "git rename remote old new", "git remote mv old new"], answer: "git remote rename old new" },
  { question: "94. What is 'origin'?", options: ["Default name for cloned remote", "The main branch", "The original commit", "A Git command"], answer: "Default name for cloned remote" },
  { question: "95. How do you remove a remote?", options: ["git remote remove origin", "git remote delete origin", "git remove origin", "git delete remote origin"], answer: "git remote remove origin" },
  { question: "96. What does `git fetch --all` do?", options: ["Fetches from all remotes", "Fetches all branches", "Fetches everything", "Both A and B"], answer: "Both A and B" },
  { question: "97. How do you push to a different remote?", options: ["git push <remote> <branch>", "git push --remote <name>", "git remote-push <name>", "git send <remote>"], answer: "git push <remote> <branch>" },
  { question: "98. What is an upstream branch?", options: ["Tracking branch on remote", "Main branch", "Feature branch", "Local branch"], answer: "Tracking branch on remote" },
  { question: "99. How do you set upstream for current branch?", options: ["git push -u origin", "git push --set-upstream", "git branch -u origin", "Both A and B"], answer: "Both A and B" },
  { question: "100. What does `git remote show origin` display?", options: ["Info about origin remote", "All remotes", "Branch info", "Commit history"], answer: "Info about origin remote" },
];
