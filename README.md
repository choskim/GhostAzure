# [Ghost](https://github.com/TryGhost/Ghost) [![Build Status](https://travis-ci.org/TryGhost/Ghost.svg?branch=master)](https://travis-ci.org/TryGhost/Ghost)

Ghost is a free, open, simple blogging platform that's available to anyone who wants to use it. Lovingly created and maintained by [John O'Nolan](http://twitter.com/JohnONolan) + [Hannah Wolfe](http://twitter.com/ErisDS) + an amazing group of [contributors](https://github.com/TryGhost/Ghost/contributors).

Visit the project's website at <http://ghost.org> &bull; docs on <http://docs.ghost.org>.

View Ghost's official README.md here: <https://github.com/TryGhost/Ghost>

## This is a forked version of Ghost 

This repository is configured to work with Microsoft Azure. To host Ghost on Azure, follow the instructions on my blog post titled [How to Install Ghost on Microsoft Azure](http://www.choskim.me/how-to-install-ghost-on-microsoft-azure/)

## Additional Features

1. Syntax Highlighting via [Prism](http://prismjs.com/)

 * Prism is currently installed for Ghost's default theme: Casper.

 * Syntax highlighting is invisible when editing a blog post. A post must be published and viewed from the non-editing page to display syntax highligthing. 

 * Wrap the following syntax around code blocks for syntax highlighting: 
  
<pre>``` langauge-[your language]
  // code
```</pre>

## Planned Features 

1. TBA

## Outstanding Issues 
When Microsoft Azure or Ghost update their codebase, an error may occur. If you see any outstanding issues in this repository do one of the following: 

1. If you have deployed a working version of Ghost to Azure: 

* Do not pull from this repository until all issues have been resolved. 

2. If you haven't deployed a working version of Ghost to Azure:

* Clone this repository and reset the current commit to the last commit that led to a successful deployment. Here's the code you should use, which includes the last working commit:  

`$ git reset --hard 00cec6`

* If resetting leads to an unsuccessful deployment, wait for all issues to be resolved