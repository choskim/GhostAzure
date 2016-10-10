# GhostAzure
GhostAzure is a forked-version of [Ghost](https://github.com/TryGhost/Ghost). 

This repository, moreover, is configured to work with Microsoft Azure (Azure). To host Ghost on Azure, follow the instructions on my blog post titled [How to Install Ghost on Microsoft Azure](http://www.choskim.com/how-to-install-ghost-on-microsoft-azure/)

## FAQs
How often is GhostAzure updated?

- I'll try to update this repository during the first weekend of every month. This decision will provide users some idea of when they could pull any changes. 

- If Azure or Ghost change their configuration and those changes break any of the installation steps of GhostAzure, then I'll try to resolve this problem as-soon-as-possible.   

How do I back-up my blog posts? 

- In a brower's address bar, type the URL of your blog and add the path `ghost/debug`. Here's an example: 

	![My Blog](./readme/images/my-website-home-page.png?raw=true)

	![My Blog's Ghost Debug Page](./readme/images/my-website-ghost-debug-page.png?raw=true)

- Click the button labeled "EXPORT" and wait for your blog and its posts to be downloaded as a json file. 

 	![Export My Blog Posts](./readme/images/export-my-blog-posts.png?raw=true)

- To import any backups of your blog posts, repeat the steps outlined in the first bullet point. Then click the button labeled "IMPORT" and provide the location of your desired backup. 

## Outstanding Issues 
When Microsoft Azure or Ghost update their configuration or codebase, an error may occur during deploying. If you notice any outstanding issues in this repository, do not pull from it. Wait until all issues have been resolved.  
