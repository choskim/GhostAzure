<style>
  .error {
    color:red;
    font-weight:bold;
  } 
  
  span {
    color:grey;
  }
</style>

1. <div class="error">
ⓧ<span> ▶</span> Do not merge new updates from this repository if there are outstanding issues, which occurs when Azure updates its codebase.  
</div>

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