# Git and GitHub course

# Git Setup:

# Create a ssh key on your local machine
# ssh-keygen -t rsa -b 4096 -C "email@example.com"

# Add in ssh config file
# Host *
#  AddKeysToAgent yes
#  UseKeychain yes
#  IdentityFile ~/.ssh/id_rsa

# Add other keys to the daemon
# ssh-add -K ~/.ssh/id_rsa

# Configure your Git username and email
# git config --global user.name "GitHub username"
# git config --global user.email "GitHub email"

# Git commands:
# git branch - to shown branch
# git branch new_branch - to add new branch
# git checkout new_branch - to switch branch
# git checkout -b new_branch - to add and switch to new branch
# git branch -D branch_name - to delete branch
# git add . or git add file_name - to add new changes to git
# git commit -m "comment" - to commit version of project to git with comment -m
# git push - to add local project on github
# git push -u origin new_branch
# git pull - to add on out local machine all last changes from GitHub
# git clone git@github.com:GitUsername/git-course.git or Git URL: https://github.com/GitUser/git-course.git
# git merge branch_name - to combine branches
# git diff new_branch - to show the difference between new_branch and master branch