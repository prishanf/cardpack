##How to Write an Open Scource JavaScrtip Libaray
###cardpack

1.Setup Setting up GitHub Repository
	Create GitHub User
	Create a GitHub repository
	Clone the Git Repository to Local dircotory
	Push Code to Git repository 

2. Create npm and Creating a package.json
	install nodejs ( nodejs.org)
	check node version `node -v
	check npm version `npm -v
	npm doc : http://docs.npmjs.com
	set below proporties
		init-author-name     `npm set init-author "prishan"
		init-author-email    `npm set init-email "email@test.com"
		init-author-license	 `npm set init-license "MIT"
		save-exact=true
	check the settings by `cat ~/.npmrc
    Sign up for npm account	https://www.npmjs.com/
    setup npm login by executing command `npm adduser
    create the pcakage.json `npm init
    create the src/index.js file as the entry point to your module code
    install unique-random-array as dependance for random functinality
    test the code in node by going into node ` node
    `> var lib require('/src/index.js');
       lib.all
       lib.random

3.Pushing to GitHub
	create git ignore file .gitignore to add the node_modules as ignore folder
	git add -A
	git commit -m "Inital Code"
	git push -u origin master


4 Pushing to NPM
	npm publish
		



