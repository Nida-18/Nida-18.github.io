---
title: "Working with GIT"
date: "2026-06-29"
description: "Git. A Computer Engineer's rachet."
isNew: true
---

# Git? 
Git is a version control tool. It is used to efficiently track progress and changes in a project, hence it proves to be handy to any who builds anything digital.

## Version Control?
So, imagine you have a working deployed project and you decide to add new features to it. A common occurrence isn't it? Now, imagine you were nearing your deadline and pushed the update without proper checks or on the wrong branch. Panic Mode! Or not? Here comes the concept of version control. 
>
Version control keep track of each update, which files got updated, which lines changed, what got deleted, and so on in a very clean manner. A tool that tracks all this, apart from providing an extensive document for production, also helps to undo changes and return the project to last known working condition.

---

# Let's get started.
Now that we have an idea what exactly git does. Let's start using it.
>
## Installation
The very first step of usage to get your hands on the product. Now this part can differ based on the type of system you are on.
>
Let's begin with our windows users (the majority rule 🤷🏻‍♀️ )
### Windows
1. Download from the official website
[Git Website](https://git-scm.com/install/windows)  
Once downloaded, follow through the steps and complete the installation  
>
2. Verify the download  
On completion of the installation, open the command prompt and ensure it recognises git.
`git --version`
  
* It can also be installed using chocolatey package manager through PowerShell. *  

Now for our Linux users (The Superiors? Maybe!)
### Linux
Simple terminal command, based on the distro.
1. Debian/Ubuntu  
`sudo apt install git`  
2. Fedora  
`yum install git`  
3. Arch  
`pacman -S git`  

## Authenticate GitHub account
Once, we are done with installation and verification of git on our system. We authenticate Github account or you can say, we connect our GitHub account to git.   

1. Generate ssh keys  
`ssh-keygen -t ed25519 -C * <userEmail@example.com> *`  
Saves the generated key at default location (Linux: home/username/.ssh/id_ed25519, Windows: C:\username\ssh\)  
>
2. Start ssh agent 
`eval "$(ssh-agent -s)"`  
`ssh-add ~/.ssh/id_ed25519`  
>
3. Add key in Github  
Add the generated key in your [Github Settings] (https://github.com/settings/keys)  
>
4. Test  
`ssh -T git@github`  

## Connect a Repository

### Local project to a NEW Repository
1. Create a new Repository on Github  
2. Connect local directory to Repository  
`git remote add git@github.com:*user*/*Repository*.git`  
3. Initialize git  
`git init`  
4. Prepare files for commit  
`git add .` 
`git add *filename*` - if only a specific file is to be included  
5. Commit changes locally  
`git commit -m *relevant message*`  
6. Push changes  
`git push -u origin main`  

* If you are not on main branch run `git branch -M main` *  

### Existing GitHub Repository
1. Clone the Repository in your folder  
`git clone github.com/user/Repository.git`  
This downloads the Repository in a folder names *Repository*  
2. Prepare files for commit and commit locally  
`git add .`  
`git commit -m "*relevant message*"`  
3. Push changes  
`git push -u orgin main`  
