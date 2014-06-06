define('ghost/templates/-floating-header', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Published");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Written");
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "author.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "author.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <span class=\"hidden\">Edit Post</span>\n        ");
  }

  data.buffer.push("<header class=\"floatingheader\">\n    <button class=\"button-back\" href=\"#\">Back</button>\n    \n    <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("featured:featured:unfeatured")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" href=\"#\" title=\"Feature this post\">\n        <span class=\"hidden\">Star</span>\n    </a>\n    <small>\n        \n        <span class=\"status\">");
  stack1 = helpers['if'].call(depth0, "published", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        <span class=\"normal\">by</span>\n        <span class=\"author\">");
  stack1 = helpers['if'].call(depth0, "author.name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n    </small>\n    <section class=\"post-controls\">\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("post-edit"),
    'title': ("Edit Post")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "editor", "", options) : helperMissing.call(depth0, "link-to", "editor", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <a class=\"post-settings\" title=\"Post Settings\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editSettings", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Post Settings</span></a>\n        <!-- @TODO use Ghost Popover (#2565) --->\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "post-settings-menu-view", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n    </section>\n</header>\n");
  return buffer;
  
}); });

define('ghost/templates/-navbar', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    <ul class=\"overlay\">\n                        <li class=\"usermenu-profile\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.user", options) : helperMissing.call(depth0, "link-to", "settings.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                        <li class=\"divider\"></li>\n                        <li class=\"usermenu-help\"><a href=\"http://ghost.org/forum/\">Help / Support</a></li>\n                        <li class=\"divider\"></li>\n                        <li class=\"usermenu-signout\"><a href=\"#\">Sign Out</a></li>\n                    </ul>\n                ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("Your Profile");
  }

  data.buffer.push("<header id=\"global-header\" class=\"navbar\">\n    <a class=\"ghost-logo\" href=\"/\" data-off-canvas=\"left\" title=\"/\">\n        <span class=\"hidden\">Ghost</span>\n    </a>\n    <nav id=\"global-nav\" role=\"navigation\">\n        <ul id=\"main-menu\" >\n            ");
  data.buffer.push(escapeExpression((helper = helpers['activating-list-item'] || (depth0 && depth0['activating-list-item']),options={hash:{
    'route': ("posts"),
    'title': ("Content"),
    'classNames': ("content")
  },hashTypes:{'route': "STRING",'title': "STRING",'classNames': "STRING"},hashContexts:{'route': depth0,'title': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "activating-list-item", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['activating-list-item'] || (depth0 && depth0['activating-list-item']),options={hash:{
    'route': ("new"),
    'title': ("New post"),
    'classNames': ("editor")
  },hashTypes:{'route': "STRING",'title': "STRING",'classNames': "STRING"},hashContexts:{'route': depth0,'title': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "activating-list-item", options))));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['activating-list-item'] || (depth0 && depth0['activating-list-item']),options={hash:{
    'route': ("settings"),
    'title': ("Settings"),
    'classNames': ("settings")
  },hashTypes:{'route': "STRING",'title': "STRING",'classNames': "STRING"},hashContexts:{'route': depth0,'title': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "activating-list-item", options))));
  data.buffer.push("\n\n            <li id=\"usermenu\" class=\"usermenu subnav\">\n                <a href=\"javascript:void(0);\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMenu", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"dropdown\">\n                    <img class=\"avatar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Avatar\" />\n                    <span class=\"name\">");
  stack1 = helpers._triageMustache.call(depth0, "user.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n                </a>\n                \n                ");
  stack1 = (helper = helpers['ghost-popover'] || (depth0 && depth0['ghost-popover']),options={hash:{
    'open': ("showMenu")
  },hashTypes:{'open': "ID"},hashContexts:{'open': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ghost-popover", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n        </ul>\n    </nav>\n</header>\n");
  return buffer;
  
}); });

define('ghost/templates/-publish-bar', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<footer id=\"publish-bar\">\n    <nav>\n        <section id=\"entry-tags\" href=\"#\" class=\"left\">\n            <label class=\"tag-label\" for=\"tags\" title=\"Tags\"><span class=\"hidden\">Tags</span></label>\n            <div class=\"tags\"></div>\n            <input type=\"hidden\" class=\"tags-holder\" id=\"tags-holder\">\n            <input class=\"tag-input\" id=\"tags\" type=\"text\" data-input-behaviour=\"tag\" />\n            <ul class=\"suggestions overlay\"></ul>\n        </section>\n        <div class=\"right\">\n\n            <section id=\"entry-controls\">\n                <a class=\"post-settings\" title=\"Post Settings\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editSettings", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Post Settings</span></a>\n                <!-- @TODO Use Ghost Popover (#2565) and style arrow down -->\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "post-settings-menu-view", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n            </section>\n\n            <section id=\"entry-actions\" class=\"js-publish-splitbutton splitbutton-save\">\n                <button type=\"button\" class=\"js-publish-button button-save\">Save Draft</button>\n                <a class=\"options up\" data-toggle=\"ul\" href=\"#\" title=\"Post Settings\"><span class=\"hidden\">Post Settings</span></a>\n                \n                <ul class=\"editor-options overlay\" style=\"display:none\">\n                    <li data-set-status=\"published\"><a href=\"#\"></a></li>\n                    <li data-set-status=\"draft\"><a href=\"#\"></a></li>\n                </ul>\n            </section>\n        </div>\n    </nav>\n</footer>\n");
  return buffer;
  
}); });

define('ghost/templates/application', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isSignedIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<main role=\"main\" id=\"main\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "ghost-notifications", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</main>\n");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  return buffer;
  
}); });

define('ghost/templates/components/-markdown', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"rendered-markdown\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "markdown", options) : helperMissing.call(depth0, "format-markdown", "markdown", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
}); });

define('ghost/templates/components/activating-list-item', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'alternateActive': ("active")
  },hashTypes:{'alternateActive': "ID"},hashContexts:{'alternateActive': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('ghost/templates/components/file-upload', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<input type=\"file\" class=\"button-add\" />\n<button type=\"submit\" class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("uploadButtonDisabled")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "uploadButtonText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n");
  return buffer;
  
}); });

define('ghost/templates/components/ghost-notification', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<section ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":js-notification message.typeClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "message.message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <a class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeNotification", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Close</span></a>\n</section>");
  return buffer;
  
}); });

define('ghost/templates/components/ghost-notifications', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['ghost-notification'] || (depth0 && depth0['ghost-notification']),options={hash:{
    'message': ("")
  },hashTypes:{'message': "ID"},hashContexts:{'message': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "ghost-notification", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
}); });

define('ghost/templates/components/modal-dialog', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<header class=\"modal-header\"><h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1></header>");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<a class=\"close\" href=\"\" title=\"Close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">Close</span></a>");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <footer class=\"modal-footer\">\n                <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("acceptButtonClass :js-button-accept")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", "accept", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "confirm.accept.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </button>\n                <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("rejectButtonClass :js-button-reject")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "confirm", "reject", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "confirm.reject.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </button>\n            </footer>\n            ");
  return buffer;
  }

  data.buffer.push("<div id=\"modal-container\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, {hash:{
    'bubbles': (false),
    'preventDefault': (false)
  },hashTypes:{'bubbles': "BOOLEAN",'preventDefault': "BOOLEAN"},hashContexts:{'bubbles': depth0,'preventDefault': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    <article ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("klass :js-modal")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <section class=\"modal-content\">\n            ");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "showClose", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <section class=\"modal-body\">\n                ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </section>\n            ");
  stack1 = helpers['if'].call(depth0, "confirm", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </section>\n    </article>\n</div>\n<div class=\"modal-background fade\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("></div>\n");
  return buffer;
  
}); });

define('ghost/templates/debug', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label>Import</label>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['file-upload'] || (depth0 && depth0['file-upload']),options={hash:{
    'onUpload': ("importData"),
    'uploadButtonText': ("uploadButtonText")
  },hashTypes:{'onUpload': "STRING",'uploadButtonText': "ID"},hashContexts:{'onUpload': depth0,'uploadButtonText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "file-upload", options))));
  data.buffer.push("\n                        <p>Import from another Ghost installation. If you import a user, this will replace the current user & log you out.</p>\n                    </div>\n                </fieldset>\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"wrapper\">\n    <aside class=\"settings-sidebar\" role=\"complementary\">\n        <header>\n            <h1 class=\"title\">Ugly Debug Tools</h1>\n        </header>\n        <nav class=\"settings-menu\">\n            <ul>\n                <li class=\"general\"><a href=\"javascript:void(0);\">General</a></li>\n            </ul>\n        </nav>\n    </aside>\n\n    <section class=\"settings-content active\">\n        <header>\n            <h2 class=\"title\">General</h2>\n        </header>\n        <section class=\"content\">\n            <form id=\"settings-export\">\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label>Export</label>\n                        <a class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("model.exportPath")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Export</a>\n                        <p>Export the blog settings and data.</p>\n                    </div>\n                </fieldset>\n            </form>\n            ");
  stack1 = (helper = helpers['gh-form'] || (depth0 && depth0['gh-form']),options={hash:{
    'id': ("settings-import"),
    'enctype': ("multipart/form-data")
  },hashTypes:{'id': "STRING",'enctype': "STRING"},hashContexts:{'id': depth0,'enctype': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gh-form", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <form id=\"settings-resetdb\">\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label>Delete all Content</label>\n                        <a href=\"javascript:void(0);\" class=\"button-delete js-delete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "deleteAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Delete</a>\n                        <p>Delete all posts and tags from the database.</p>\n                    </div>\n                </fieldset>\n            </form>\n            <form id=\"settings-testmail\">\n                <fieldset>\n                    <div class=\"form-group\">\n                        <label>Send a test email</label>\n                        <button type=\"submit\" id=\"sendtestmail\" class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendTestEmail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Send</button>\n                        <p>Sends a test email to your address.</p>\n                    </div>\n                </fieldset>\n            </form>\n        </section>\n    </section>\n</div>\n");
  return buffer;
  
}); });

define('ghost/templates/editor', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"entry-container\">\n    <header>\n        <section class=\"box entry-title\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("entry-title"),
    'placeholder': ("Your Post Title"),
    'value': ("title"),
    'tabindex': ("1")
  },hashTypes:{'type': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID",'tabindex': "STRING"},hashContexts:{'type': depth0,'id': depth0,'placeholder': depth0,'value': depth0,'tabindex': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </section>\n    </header>\n\n    <section class=\"entry-markdown active\">\n        <header class=\"floatingheader\">\n            <small>Markdown</small>\n            <a class=\"markdown-help\" href=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "markdown", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("><span class=\"hidden\">What is Markdown?</span></a>\n        </header>\n        <section id=\"entry-markdown-content\" class=\"entry-markdown-content\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['-codemirror'] || (depth0 && depth0['-codemirror']),options={hash:{
    'value': ("markdown"),
    'scrollPosition': ("view.scrollPosition")
  },hashTypes:{'value': "ID",'scrollPosition': "ID"},hashContexts:{'value': depth0,'scrollPosition': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "-codemirror", options))));
  data.buffer.push("\n        </section>\n    </section>\n\n    <section class=\"entry-preview\">\n        <header class=\"floatingheader\">\n            <small>Preview <span class=\"entry-word-count js-entry-word-count\">");
  data.buffer.push(escapeExpression((helper = helpers['count-words'] || (depth0 && depth0['count-words']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "markdown", options) : helperMissing.call(depth0, "count-words", "markdown", options))));
  data.buffer.push(" words</span></small>\n        </header>\n        <section class=\"entry-preview-content\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['-markdown'] || (depth0 && depth0['-markdown']),options={hash:{
    'markdown': ("markdown"),
    'scrollPosition': ("view.scrollPosition")
  },hashTypes:{'markdown': "ID",'scrollPosition': "ID"},hashContexts:{'markdown': depth0,'scrollPosition': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "-markdown", options))));
  data.buffer.push("\n        </section>\n    </section>\n</section>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "publish-bar", options) : helperMissing.call(depth0, "partial", "publish-bar", options))));
  return buffer;
  
}); });

define('ghost/templates/error', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<h1>Sorry, Something went wrong</h1>\n");
  stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<pre>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "stack", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</pre>\n");
  return buffer;
  
}); });

define('ghost/templates/forgotten', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<section class=\"forgotten-box js-forgotten-box fade-in\">\n    <form id=\"forgotten\" class=\"forgotten-form\" method=\"post\" novalidate=\"novalidate\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <div class=\"email-wrap\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("email"),
    'class': ("email"),
    'type': ("email"),
    'placeholder': ("Email Address"),
    'name': ("email"),
    'autofocus': ("autofocus"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'autofocus': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'autofocus': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <button class=\"button-save\" type=\"submit\">Send new password</button>\n    </form>\n</section>\n");
  return buffer;
  
}); });

define('ghost/templates/loading', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<h1>Loading...</h1>\n");
  
}); });

define('ghost/templates/modals/delete-all', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n    <p>This is permanent! No backups, no restores, no magic undo button. <br /> We warned you, ok?</p>\n\n");
  }

  stack1 = (helper = helpers['modal-dialog'] || (depth0 && depth0['modal-dialog']),options={hash:{
    'action': ("closeModal"),
    'type': ("action"),
    'style': ("wide,centered"),
    'animation': ("fade"),
    'title': ("Would you really like to delete all content from your blog?"),
    'confirm': ("confirm")
  },hashTypes:{'action': "STRING",'type': "STRING",'style': "STRING",'animation': "STRING",'title': "STRING",'confirm': "ID"},hashContexts:{'action': depth0,'type': depth0,'style': depth0,'animation': depth0,'title': depth0,'confirm': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('ghost/templates/modals/delete-post', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n    <p>This is permanent! No backups, no restores, no magic undo button. <br /> We warned you, ok?</p>\n\n");
  }

  stack1 = (helper = helpers['modal-dialog'] || (depth0 && depth0['modal-dialog']),options={hash:{
    'action': ("closeModal"),
    'showClose': (true),
    'type': ("action"),
    'style': ("wide,centered"),
    'animation': ("fade"),
    'title': ("Are you sure you want to delete this post?"),
    'confirm': ("confirm")
  },hashTypes:{'action': "STRING",'showClose': "BOOLEAN",'type': "STRING",'style': "STRING",'animation': "STRING",'title': "STRING",'confirm': "ID"},hashContexts:{'action': depth0,'showClose': depth0,'type': depth0,'style': depth0,'animation': depth0,'title': depth0,'confirm': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('ghost/templates/modals/markdown', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <section class=\"markdown-help-container\">\n        <table class=\"modal-markdown-help-table\">\n            <thead>\n            <tr>\n                <th>Result</th>\n                <th>Markdown</th>\n                <th>Shortcut</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td><strong>Bold</strong></td>\n                <td>**text**</td>\n                <td>Ctrl / Cmd + B</td>\n            </tr>\n            <tr>\n                <td><em>Emphasize</em></td>\n                <td>*text*</td>\n                <td>Ctrl / Cmd + I</td>\n            </tr>\n            <tr>\n                <td>Strike-through</td>\n                <td>~~text~~</td>\n                <td>Ctrl + Alt + U</td>\n            </tr>\n            <tr>\n                <td><a href=\"#\">Link</a></td>\n                <td>[title](http://)</td>\n                <td>Ctrl + Shift + L</td>\n            </tr>\n            <tr>\n                <td>Image</td>\n                <td>![alt](http://)</td>\n                <td>Ctrl + Shift + I</td>\n            </tr>\n            <tr>\n                <td>List</td>\n                <td>* item</td>\n                <td>Ctrl + L</td>\n            </tr>\n            <tr>\n                <td>Blockquote</td>\n                <td>> quote</td>\n                <td>Ctrl + Q</td>\n            </tr>\n            <tr>\n                <td>H1</td>\n                <td># Heading</td>\n                <td>Ctrl + Alt + 1</td>\n            </tr>\n            <tr>\n                <td>H2</td>\n                <td>## Heading</td>\n                <td>Ctrl + Alt + 2</td>\n            </tr>\n            <tr>\n                <td>H3</td>\n                <td>### Heading</td>\n                <td>Ctrl + Alt + 3</td>\n            </tr>\n            <tr>\n                <td><code>Inline Code</code></td>\n                <td>`code`</td>\n                <td>Cmd + K / Ctrl + Shift + K</td>\n            </tr>\n            </tbody>\n        </table>\n        For further Markdown syntax reference: <a href=\"http://daringfireball.net/projects/markdown/syntax\" target=\"_blank\">Markdown Documentation</a>\n    </section>\n");
  }

  stack1 = (helper = helpers['modal-dialog'] || (depth0 && depth0['modal-dialog']),options={hash:{
    'action': ("closeModal"),
    'showClose': (true),
    'style': ("wide"),
    'animation': ("fade"),
    'title': ("Markdown Help")
  },hashTypes:{'action': "STRING",'showClose': "BOOLEAN",'style': "STRING",'animation': "STRING",'title': "STRING"},hashContexts:{'action': depth0,'showClose': depth0,'style': depth0,'animation': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "modal-dialog", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('ghost/templates/modals/upload', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n  <section class=\"js-drop-zone\">\n      <img class=\"js-upload-target\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("src")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"logo\">\n      <input data-url=\"upload\" class=\"js-fileupload main\" type=\"file\" name=\"uploadimage\" ");
  stack1 = helpers['if'].call(depth0, "options.acceptEncoding", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(">\n  </section>\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("accept=\"");
  stack1 = helpers._triageMustache.call(depth0, "options.acceptEncoding", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\"");
  return buffer;
  }

  stack1 = (helper = helpers['upload-modal'] || (depth0 && depth0['upload-modal']),options={hash:{
    'action': ("closeModal"),
    'close': (true),
    'type': ("action"),
    'style': ("wide"),
    'animation': ("fade")
  },hashTypes:{'action': "STRING",'close': "BOOLEAN",'type': "STRING",'style': "STRING",'animation': "STRING"},hashContexts:{'action': depth0,'close': depth0,'type': depth0,'style': depth0,'animation': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "upload-modal", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('ghost/templates/new', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("TODO");
  
}); });

define('ghost/templates/post-settings-menu', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form>\n    <table class=\"plain\">\n        <tbody>\n            <tr class=\"post-setting\">\n                <td class=\"post-setting-label\">\n                    <label for=\"url\">URL</label>\n                </td>\n                <td class=\"post-setting-field\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['blur-text-field'] || (depth0 && depth0['blur-text-field']),options={hash:{
    'class': ("post-setting-slug"),
    'id': ("url"),
    'value': ("newSlug"),
    'action': ("updateSlug"),
    'placeholder': ("slugPlaceholder"),
    'selectOnClick': ("true")
  },hashTypes:{'class': "STRING",'id': "STRING",'value': "ID",'action': "STRING",'placeholder': "ID",'selectOnClick': "STRING"},hashContexts:{'class': depth0,'id': depth0,'value': depth0,'action': depth0,'placeholder': depth0,'selectOnClick': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "blur-text-field", options))));
  data.buffer.push("\n                </td>\n            </tr>\n            <tr class=\"post-setting\">\n                <td class=\"post-setting-label\">\n                    <label for=\"pub-date\">Pub Date</label>\n                </td>\n                <td class=\"post-setting-field\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['blur-text-field'] || (depth0 && depth0['blur-text-field']),options={hash:{
    'class': ("post-setting-date"),
    'value': ("view.publishedAt"),
    'action': ("updatePublishedAt"),
    'placeholder': ("view.datePlaceholder")
  },hashTypes:{'class': "STRING",'value': "ID",'action': "STRING",'placeholder': "ID"},hashContexts:{'class': depth0,'value': depth0,'action': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "blur-text-field", options))));
  data.buffer.push("\n                </td>\n            </tr>\n            <tr class=\"post-setting\">\n                <td class=\"post-setting-label\">\n                    <label class=\"label\" for=\"static-page\">Static Page</label>\n                </td>\n                <td class=\"post-setting-item\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("static-page"),
    'id': ("static-page"),
    'class': ("post-setting-static-page"),
    'checked': ("isStaticPage")
  },hashTypes:{'type': "STRING",'name': "STRING",'id': "STRING",'class': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'name': depth0,'id': depth0,'class': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    <label class=\"checkbox\" for=\"static-page\"></label>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</form>\n<a class=\"delete\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "delete-post", "post", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","ID"],data:data})));
  data.buffer.push(">Delete This Post</a>\n");
  return buffer;
  
}); });

define('ghost/templates/posts', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<span class=\"hidden\">New Post</span>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                    \n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("permalink"),
    'title': ("Edit this post")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posts.post", "", options) : helperMissing.call(depth0, "link-to", "posts.post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <h3 class=\"entry-title\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n                        <section class=\"entry-meta\">\n                            <span class=\"status\">\n                                ");
  stack1 = helpers['if'].call(depth0, "isPublished", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </span>\n                        </section>\n                    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                                    ");
  stack1 = helpers['if'].call(depth0, "page", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                                ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n                                            <span class=\"page\">Page</span>\n                                    ");
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                                        <time datetime=\"");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "published_at", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\" class=\"date published\">\n                                            Published ");
  data.buffer.push(escapeExpression((helper = helpers['format-timeago'] || (depth0 && depth0['format-timeago']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "published_at", options) : helperMissing.call(depth0, "format-timeago", "published_at", options))));
  data.buffer.push("\n                                        </time>\n                                    ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n                                    <span class=\"draft\">Draft</span>\n                                ");
  }

  data.buffer.push("<section class=\"content-view-container\">\n    <section class=\"content-list js-content-list\">\n        <header class=\"floatingheader\">\n            <section class=\"content-filter\">\n                <small>All Posts</small>\n            </section>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("button button-add"),
    'title': ("New Post")
  },hashTypes:{'class': "STRING",'title': "STRING"},hashContexts:{'class': depth0,'title': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "new", options) : helperMissing.call(depth0, "link-to", "new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </header>\n        <section class=\"content-list-content\">\n            <ol class=\"posts-list\">\n                ");
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("posts/post"),
    'itemView': ("post-item-view"),
    'itemTagName': ("li")
  },hashTypes:{'itemController': "STRING",'itemView': "STRING",'itemTagName': "STRING"},hashContexts:{'itemController': depth0,'itemView': depth0,'itemTagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ol>\n        </section>\n    </section>\n    <section class=\"content-preview js-content-preview\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </section>\n</section>\n");
  return buffer;
  
}); });

define('ghost/templates/posts/post', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "floating-header", options) : helperMissing.call(depth0, "partial", "floating-header", options))));
  data.buffer.push("\n\n  <section class=\"content-preview-content\">\n      <div class=\"wrapper\">\n          <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "markdown", options) : helperMissing.call(depth0, "format-markdown", "markdown", options))));
  data.buffer.push("\n      </div>\n  </section>\n\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n\n    <div class=\"no-posts-box\">\n        <div class=\"no-posts\">\n            <h3>You Haven't Written Any Posts Yet!</h3>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "new", options) : helperMissing.call(depth0, "link-to", "new", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n    </div>\n\n");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("<button class=\"button-add large\" title=\"New Post\">Write a new Post</button>");
  }

  stack1 = helpers['if'].call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
}); });

define('ghost/templates/reset', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<section class=\"reset-box js-reset-box fade-in\">\n    <form id=\"reset\" class=\"reset-form\" method=\"post\" novalidate=\"novalidate\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <div class=\"password-wrap\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("passwords.newPassword"),
    'class': ("password"),
    'type': ("password"),
    'placeholder': ("Password"),
    'name': ("newpassword"),
    'autofocus': ("autofocus")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'autofocus': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"password-wrap\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("passwords.ne2Password"),
    'class': ("password"),
    'type': ("password"),
    'placeholder': ("Confirm Password"),
    'name': ("ne2password")
  },hashTypes:{'value': "ID",'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING"},hashContexts:{'value': depth0,'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <button class=\"button-save\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("submitButtonDisabled")
  },hashTypes:{'disabled': "STRING"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">Reset Password</button>\n    </form>\n</section>\n");
  return buffer;
  
}); });

define('ghost/templates/settings', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("General");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("User");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Apps");
  }

  data.buffer.push("<div class=\"wrapper\">\n    <aside class=\"settings-sidebar\" role=\"complementary\">\n        <header>\n            <h1 class=\"title\">Settings</h1>\n        </header>\n        <nav class=\"settings-menu\">\n            <ul>\n                <li class=\"general\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.general", options) : helperMissing.call(depth0, "link-to", "settings.general", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                <li class=\"users\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.user", options) : helperMissing.call(depth0, "link-to", "settings.user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                <li class=\"apps\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "settings.apps", options) : helperMissing.call(depth0, "link-to", "settings.apps", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            </ul>\n        </nav>\n    </aside>\n\n    <section class=\"settings-content active\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </section>\n</div>\n");
  return buffer;
  
}); });

define('ghost/templates/settings/apps', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <li>\n            ");
  stack1 = helpers['if'].call(depth0, "package", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <button data-app=\"");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" class=\"");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n        </li>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "package.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "package.version", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - package.json missing :(");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("button-delete js-button-deactivate js-button-active\">Deactivate");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("button-add js-button-activate\">Activate");
  }

  data.buffer.push("<header class=\"fade-in\">\n    <button class=\"button-back\">Back</button>\n    <h2 class=\"title\">Apps</h2>\n</header>\n\n<section class=\"content fade-in\">\n    <ul class=\"js-apps\">\n        ");
  stack1 = helpers.each.call(depth0, "availableApps", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n</section>");
  return buffer;
  
}); });

define('ghost/templates/settings/general', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <a class=\"js-modal-logo\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("><img id=\"blog-logo\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("logo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"logo\"></a>\n                ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <a class=\"button-add js-modal-logo\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Upload Image</a>\n                ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <a class=\"js-modal-cover\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push("><img id=\"blog-cover\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("logo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"cover photo\"></a>\n                ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <a class=\"button-add js-modal-cover\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Upload Image</a>\n                ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <option value=\"");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\" ");
  stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(">");
  stack1 = helpers['if'].call(depth0, "package", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</option>\n                    ");
  return buffer;
  }
function program10(depth0,data) {
  
  
  data.buffer.push("selected");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "package.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  stack1 = helpers._triageMustache.call(depth0, "package.version", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program14(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<header class=\"fade-in\">\n    <button class=\"button-back\">Back</button>\n    <h2 class=\"title\">General</h2>\n    <section class=\"page-actions\">\n        <button class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n    </section>\n</header>\n\n<section class=\"content fade-in\">\n    <form id=\"settings-general\" novalidate=\"novalidate\">\n        <fieldset>\n\n            <div class=\"form-group\">\n                <label for=\"blog-title\">Blog Title</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("blog-title"),
    'name': ("general[title]"),
    'type': ("text"),
    'value': ("title")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <p>The name of your blog</p>\n            </div>\n\n            <div class=\"form-group description-container\">\n                <label for=\"blog-description\">Blog Description</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("blog-description"),
    'value': ("description")
  },hashTypes:{'id': "STRING",'value': "ID"},hashContexts:{'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                <p>\n                    Describe what your blog is about\n                    <span class=\"word-count\">");
  data.buffer.push(escapeExpression((helper = helpers['count-words'] || (depth0 && depth0['count-words']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "count-words", "description", options))));
  data.buffer.push("</span>\n                </p>\n\n            </div>\n        </fieldset>\n            <div class=\"form-group\">\n                <label for=\"blog-logo\">Blog Logo</label>\n                ");
  stack1 = helpers['if'].call(depth0, "logo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <p>Display a sexy logo for your publication</p>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"blog-cover\">Blog Cover</label>\n                ");
  stack1 = helpers['if'].call(depth0, "cover", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <p>Display a cover image on your site</p>\n            </div>\n        <fieldset>\n            <div class=\"form-group\">\n                <label for=\"email-address\">Email Address</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("email-address"),
    'name': ("general[email-address]"),
    'type': ("email"),
    'value': ("email"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'value': "ID",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'value': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <p>Address to use for admin notifications</p>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"postsPerPage\">Posts per page</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("postsPerPage"),
    'name': ("general[postsPerPage]"),
    'type': ("number"),
    'value': ("postsPerPage")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <p>How many posts should be displayed on each page</p>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"permalinks\">Dated Permalinks</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'id': ("permalinks"),
    'name': ("general[permalinks]"),
    'type': ("checkbox"),
    'checked': ("isDatedPermalinks")
  },hashTypes:{'id': "STRING",'name': "STRING",'type': "STRING",'checked': "ID"},hashContexts:{'id': depth0,'name': depth0,'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <label class=\"checkbox\" for=\"permalinks\"></label>\n                <p>Include the date in your post URLs</p>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"activeTheme\">Theme</label>\n                <select id=\"activeTheme\" name=\"general[activeTheme]\">\n                    ");
  stack1 = helpers.each.call(depth0, "availableThemes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </select>\n                <p>Select a theme for your blog</p>\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n");
  return buffer;
  
}); });

define('ghost/templates/settings/user', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<header class=\"fade-in\">\n    <button class=\"button-back\">Back</button>\n    <h2 class=\"title\">Your Profile</h2>\n    <section class=\"page-actions\">\n        <button class=\"button-save\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save</button>\n    </section>\n</header>\n\n<section class=\"content no-padding fade-in\">\n\n    <header class=\"user-profile-header\">\n        <img id=\"user-cover\" class=\"cover-image\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("cover"),
    'title': ("coverTitle")
  },hashTypes:{'src': "ID",'title': "ID"},hashContexts:{'src': depth0,'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n\n        <a class=\"edit-cover-image js-modal-cover button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">Change Cover</a>\n    </header>\n\n    <form class=\"user-profile\" novalidate=\"novalidate\">\n\n        <fieldset class=\"user-details-top\">\n\n            <figure class=\"user-image\">\n                <div id=\"user-image\" class=\"img\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("image")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" href=\"#\"><span class=\"hidden\">");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("'s Picture</span></div>\n                <a href=\"\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openModal", "upload", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(" class=\"edit-user-image js-modal-image\">Edit Picture</a>\n            </figure>\n\n            <div class=\"form-group\">\n                <label for=\"user-name\" class=\"hidden\">Full Name</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("user.name"),
    'id': ("user-name"),
    'placeholder': ("Full Name"),
    'autocorrect': ("off")
  },hashTypes:{'value': "ID",'id': "STRING",'placeholder': "STRING",'autocorrect': "STRING"},hashContexts:{'value': depth0,'id': depth0,'placeholder': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <p>Use your real name so people can recognise you</p>\n            </div>\n\n        </fieldset>\n\n        <fieldset class=\"user-details-bottom\">\n\n            <div class=\"form-group\">\n                <label for\"user-email\">Email</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'value': ("user.email"),
    'id': ("user-email"),
    'placeholder': ("Email Address"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <p>Used for notifications</p>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"user-location\">Location</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("user.location"),
    'id': ("user-location")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <p>Where in the world do you live?</p>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"user-website\">Website</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("url"),
    'value': ("user.website"),
    'id': ("user-website"),
    'placeholder': ("http://www.ghost.org/"),
    'autocapitalize': ("off"),
    'autocorrect': ("off")
  },hashTypes:{'type': "STRING",'value': "ID",'id': "STRING",'placeholder': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING"},hashContexts:{'type': depth0,'value': depth0,'id': depth0,'placeholder': depth0,'autocapitalize': depth0,'autocorrect': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <p>Have a website or blog other than this one? Link it!</p>\n            </div>\n\n            <div class=\"form-group bio-container\">\n                <label for=\"user-bio\">Bio</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'id': ("user-bio"),
    'value': ("user.bio")
  },hashTypes:{'id': "STRING",'value': "ID"},hashContexts:{'id': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n                <p>\n                    Write about you, in 200 characters or less.\n                    <span class=\"word-count\">");
  data.buffer.push(escapeExpression((helper = helpers['count-words'] || (depth0 && depth0['count-words']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "user.bio", options) : helperMissing.call(depth0, "count-words", "user.bio", options))));
  data.buffer.push("</span>\n                </p>\n            </div>\n\n            <hr />\n\n        </fieldset>\n\n        <fieldset>\n\n            <div class=\"form-group\">\n                <label for=\"user-password-old\">Old Password</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("password"),
    'type': ("password"),
    'id': ("user-password-old")
  },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"user-password-new\">New Password</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("newPassword"),
    'type': ("password"),
    'id': ("user-password-new")
  },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"user-new-password-verification\">Verify Password</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("ne2Password"),
    'type': ("password"),
    'id': ("user-new-password-verification")
  },hashTypes:{'value': "ID",'type': "STRING",'id': "STRING"},hashContexts:{'value': depth0,'type': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            <div class=\"form-group\">\n                <button type=\"button\" class=\"button-delete button-change-password\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "password", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Change Password</button>\n            </div>\n\n        </fieldset>\n\n    </form>\n</section>\n");
  return buffer;
  
}); });

define('ghost/templates/signin', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("Forgotten password?");
  }

  data.buffer.push("<section class=\"login-box js-login-box fade-in\">\n    <form id=\"login\" class=\"login-form\" method=\"post\" novalidate=\"novalidate\">\n        <div class=\"email-wrap\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("email"),
    'type': ("email"),
    'placeholder': ("Email Address"),
    'name': ("email"),
    'autofocus': ("autofocus"),
    'autocapitalize': ("off"),
    'autocorrect': ("off"),
    'value': ("email")
  },hashTypes:{'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'autofocus': "STRING",'autocapitalize': "STRING",'autocorrect': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'autofocus': depth0,'autocapitalize': depth0,'autocorrect': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <div class=\"password-wrap\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("password"),
    'type': ("password"),
    'placeholder': ("Password"),
    'name': ("password"),
    'value': ("password")
  },hashTypes:{'class': "STRING",'type': "STRING",'placeholder': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'class': depth0,'type': depth0,'placeholder': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n        <button class=\"button-save\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Log in</button>\n        <section class=\"meta\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("forgotten-password")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "forgotten", options) : helperMissing.call(depth0, "link-to", "forgotten", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </section>\n    </form>\n</section>\n");
  return buffer;
  
}); });

define('ghost/templates/signup', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"signup-box js-signup-box fade-in\">\n    <form id=\"signup\" class=\"signup-form\" method=\"post\" novalidate=\"novalidate\">\n        <div class=\"name-wrap\">\n            <input class=\"name\" type=\"text\" placeholder=\"Full Name\" name=\"name\" autofocus autocorrect=\"off\" />\n        </div>\n        <div class=\"email-wrap\">\n            <input class=\"email\" type=\"email\" placeholder=\"Email Address\" name=\"email\" autocapitalize=\"off\" autocorrect=\"off\" />\n        </div>\n        <div class=\"password-wrap\">\n            <input class=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\" />\n        </div>\n        <button class=\"button-save\" type=\"submit\">Sign Up</button>\n    </form>\n</section>\n");
  
}); });