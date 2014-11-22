# [Ghost](https://github.com/TryGhost/Ghost) [![Build Status](https://travis-ci.org/TryGhost/Ghost.svg?branch=master)](https://travis-ci.org/TryGhost/Ghost)

Ghost is a free, open, simple blogging platform that's available to anyone who wants to use it. Lovingly created and maintained by [John O'Nolan](http://twitter.com/JohnONolan) + [Hannah Wolfe](http://twitter.com/ErisDS) + an amazing group of [contributors](https://github.com/TryGhost/Ghost/contributors).

Visit the project's website at <http://ghost.org> &bull; docs on <http://docs.ghost.org>.

# GhostAzure
This is a forked version of Ghost. To view Ghost's official README.md, visit this page: <https://github.com/TryGhost/Ghost>

This repository is configured to work with Microsoft Azure. To host Ghost on Azure, follow the instructions on my blog post titled [How to Install Ghost on Microsoft Azure](http://www.choskim.me/how-to-install-ghost-on-microsoft-azure/)

## FAQs
How do I back-up my blog posts? 

- In a brower's address bar, type the URL of your blog and add the path `ghost/debug`. Here's an example: 

	![My Blog](./readme/images/my-website-home-page.png?raw=true)

	![My Blog's Ghost Debug Page](./readme/images/my-website-ghost-debug-page.png?raw=true)

- Click the button labeled "EXPORT" and wait for your blog and its posts to be downloaded as a json file. 

 	![Export My Blog Posts](./readme/images/export-my-blog-posts.png?raw=true)

- To import any backups of your blog posts, repeat the steps outlined in the first bullet point. Then click the button labeled "IMPORT" and provide the location of your desired backup. 

## Outstanding Issues 
When Microsoft Azure or Ghost update their configuration or codebase, an error may occur during deploying. If you notice any outstanding issues in this repository, do not pull from it. Wait until all issues have been resolved.  