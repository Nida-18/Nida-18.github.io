---
title: "Working with GIT"
date: "2026-05-29"
description: "Git. A Computer Engineer's rachet."
isNew: true
---

# Git?

Git is a version control tool. It is used to efficiently track progress and changes in a project, hence it proves to be handy to any who builds anything digital.

## Version Control?

So, imagine you have a working deployed project and you decide to add new features to it. A common occurrence isn't it?

Now, imagine you were nearing your deadline and pushed the update without proper checks or on the wrong branch. Panic Mode! Or not?

Here comes the concept of version control.

 Version control keep track of each update, which files got updated, which lines changed, what got deleted, and so on in a very clean manner.

 A tool that tracks all this, apart from providing an extensive document for production, also helps to undo changes and return the project to last known working condition.

---

# Let's get started.

Now that we have an idea what exactly git does. Let's start using it.

## Installation

The very first step of usage to get your hands on the product. Now this part can differ based on the type of system you are on.

Let's begin with our windows users (the majority rule 🤷🏻‍♀️ )

### Windows

1. Download from the official website

[Git Website](https://git-scm.com/install/windows)

Once downloaded, follow through the steps and complete the installation.

2. Verify the download

On completion of the installation, open the command prompt and ensure it recognises git.

```bash
git --version
```

> It can also be installed using chocolatey package manager through PowerShell.

Now for our Linux users (The Superiors? Maybe!)

### Linux

Simple terminal command, based on the distro.

1. Debian/Ubuntu

```bash
sudo apt install git
```

2. Fedora

```bash
yum install git
```

3. Arch

```bash
pacman -S git
```

---

## Authenticate GitHub account

Once, we are done with installation and verification of git on our system. We authenticate Github account or you can say, we connect our GitHub account to git.

1. Generate ssh keys

```bash
ssh-keygen -t ed25519 -C "userEmail@example.com"
```

Saves the generated key at default location.

- Linux: `/home/username/.ssh/id_ed25519`
- Windows: `C:\Users\username\.ssh\`

2. Start ssh agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

3. Add key in Github

Add the generated key in your [Github Settings](https://github.com/settings/keys)

4. Test

```bash
ssh -T git@github.com
```

---

## Connect a Repository

### Local project to a NEW Repository

1. Create a new Repository on Github

2. Connect local directory to Repository

```bash
git remote add origin git@github.com:user/Repository.git
```

3. Initialize git

```bash
git init
```

4. Prepare files for commit

```bash
git add .
```

```bash
git add filename
```

If only a specific file is to be included.

5. Commit changes locally

```bash
git commit -m "relevant message"
```

6. Push changes

```bash
git push -u origin main
```

> If you are not on main branch run:
>
> ```bash
> git branch -M main
> ```

---

### Existing GitHub Repository

1. Clone the Repository in your folder

```bash
git clone git@github.com:user/Repository.git
```

This downloads the Repository in a folder named `Repository`

2. Prepare files for commit and commit locally

```bash
git add .
```

```bash
git commit -m "relevant message"
```

3. Push changes

```bash
git push -u origin main
```
