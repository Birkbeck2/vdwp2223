# Installing

You can clone this repository to your computer and run demo files, editing them to test how changes will affect the result.

## Steps

1. Download and install [Node.js](https://nodejs.org/en/download/). You can check if it's installed in Terminal or Git Bash with the shell command `which node` and `node --version`.
2. Download and install [git](https://git-scm.com/downloads) if necessary. Shell commands `which git` and `git --version` may help.
3. Clone this repository with VS Code or with the shell command `git clone https://github.com/Birkbeck2/vdwp2223`.
4. Run the file that interests you. This can be done with VS Code's **Run** button (choose Node.js if prompted), or with the shell command `node file-that-interests-you.js`.
5. If you get an error about a node package not installed, install it with these steps:
* Open Terminal or Git Bash to your copy of this repository. Run `ls` and check that `package.json` appears in the list of files you see.
* Run `npm install` and the packages should be installed. Try running the file again.
