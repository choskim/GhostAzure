/*global Ghost, _, Backbone, NProgress */

(function () {
    "use strict";
    NProgress.configure({ showSpinner: false });

    // Adds in a call to start a loading bar
    // This is sets up a success function which completes the loading bar
    function wrapSync(method, model, options) {
        if (options !== undefined && _.isObject(options)) {
            NProgress.start();

            /*jshint validthis:true */
            var self = this,
                oldSuccess = options.success;
            /*jshint validthis:false */

            options.success = function () {
                NProgress.done();
                return oldSuccess.apply(self, arguments);
            };
        }

        /*jshint validthis:true */
        return Backbone.sync.call(this, method, model, options);
    }

    Ghost.ProgressModel = Backbone.Model.extend({
        sync: wrapSync
    });

    Ghost.ProgressCollection = Backbone.Collection.extend({
        sync: wrapSync
    });
}());

/*global Ghost, _, Backbone, JSON */
(function () {
    'use strict';

    Ghost.Models.Post = Ghost.ProgressModel.extend({

        defaults: {
            status: 'draft'
        },

        blacklist: ['published', 'draft'],

        parse: function (resp) {

            if (resp.posts) {
                resp = resp.posts[0];
            }
            if (resp.status) {
                resp.published = resp.status === 'published';
                resp.draft = resp.status === 'draft';
            }
            if (resp.tags) {
                return resp;
            }
            return resp;
        },

        validate: function (attrs) {
            if (_.isEmpty(attrs.title)) {
                return 'You must specify a title for the post.';
            }
        },

        addTag: function (tagToAdd) {
            var tags = this.get('tags') || [];
            tags.push(tagToAdd);
            this.set('tags', tags);
        },

        removeTag: function (tagToRemove) {
            var tags = this.get('tags') || [];
            tags = _.reject(tags, function (tag) {
                return tag.id === tagToRemove.id || tag.name === tagToRemove.name;
            });
            this.set('tags', tags);
        },
        sync: function (method, model, options) {
            //wrap post in {posts: [{...}]}
            if (method === 'create' || method === 'update') {
                options.data = JSON.stringify({posts: [this.attributes]});
                options.contentType = 'application/json';
                options.url = model.url() + '?include=tags';
            }

            return Backbone.Model.prototype.sync.apply(this, arguments);
        }
    });

    Ghost.Collections.Posts = Backbone.Collection.extend({
        currentPage: 1,
        totalPages: 0,
        totalPosts: 0,
        nextPage: 0,
        prevPage: 0,

        url: Ghost.paths.apiRoot + '/posts/',
        model: Ghost.Models.Post,

        parse: function (resp) {
            if (_.isArray(resp.posts)) {
                this.limit = resp.meta.pagination.limit;
                this.currentPage = resp.meta.pagination.page;
                this.totalPages = resp.meta.pagination.pages;
                this.totalPosts = resp.meta.pagination.total;
                this.nextPage = resp.meta.pagination.next;
                this.prevPage = resp.meta.pagination.prev;
                return resp.posts;
            }
            return resp;
        }
    });

}());
/*global Backbone, Ghost, _ */
(function () {
    'use strict';
    //id:0 is used to issue PUT requests
    Ghost.Models.Settings = Ghost.ProgressModel.extend({
        url: Ghost.paths.apiRoot + '/settings/?type=blog,theme,app',
        id: '0',

        parse: function (response) {
            var result = _.reduce(response.settings, function (settings, setting) {
                settings[setting.key] = setting.value;

                return settings;
            }, {});

            return result;
        },

        sync: function (method, model, options) {
            var settings = _.map(this.attributes, function (value, key) {
                return { key: key, value: value };
            });
            //wrap settings in {settings: [{...}]}
            if (method === 'update') {
                options.data = JSON.stringify({settings: settings});
                options.contentType = 'application/json';
            }

            return Backbone.Model.prototype.sync.apply(this, arguments);
        }
    });

}());
/*global Ghost */
(function () {
    'use strict';

    Ghost.Collections.Tags = Ghost.ProgressCollection.extend({
        url: Ghost.paths.apiRoot + '/tags/',

        parse: function (resp) {
            return resp.tags;
        }
    });
}());

/*global Ghost, Backbone */
(function () {
    'use strict';

    Ghost.Models.Themes = Backbone.Model.extend({
        url: Ghost.paths.apiRoot + '/themes/'
    });

}());

/*global Ghost, Backbone, $ */
(function () {
    'use strict';
    Ghost.Models.uploadModal = Backbone.Model.extend({

        options: {
            close: true,
            type: 'action',
            style: ["wide"],
            animation: 'fade',
            afterRender: function () {
                var filestorage = $('#' + this.options.model.id).data('filestorage');
                this.$('.js-drop-zone').upload({fileStorage: filestorage});
            },
            confirm: {
                reject: {
                    func: function () { // The function called on rejection
                        return true;
                    },
                    buttonClass: true,
                    text: "Cancel" // The reject button text
                }
            }
        },
        content: {
            template: 'uploadImage'
        },

        initialize: function (options) {
            this.options.id = options.id;
            this.options.key = options.key;
            this.options.src = options.src;
            this.options.confirm.accept = options.accept;
            this.options.acceptEncoding = options.acceptEncoding || 'image/*';
        }
    });

}());

/*global Ghost,Backbone */
(function () {
    'use strict';

    Ghost.Models.User = Ghost.ProgressModel.extend({
        url: Ghost.paths.apiRoot + '/users/me/',

        parse: function (resp) {
            // unwrap user from {users: [{...}]}
            if (resp.users) {
                resp = resp.users[0];
            }

            return resp;
        },

        sync: function (method, model, options) {
            // wrap user in {users: [{...}]}
            if (method === 'create' || method === 'update') {
                options.data = JSON.stringify({users: [this.attributes]});
                options.contentType = 'application/json';
            }

            return Backbone.Model.prototype.sync.apply(this, arguments);
        }
    });

//    Ghost.Collections.Users = Backbone.Collection.extend({
//        url: Ghost.paths.apiRoot + '/users/'
//    });

}());
/*global Ghost */
(function () {
    'use strict';

    Ghost.Models.Widget = Ghost.ProgressModel.extend({

        defaults: {
            title: '',
            name: '',
            author: '',
            applicationID: '',
            size: '',
            content: {
                template: '',
                data: {
                    number: {
                        count: 0,
                        sub: {
                            value: 0,
                            dir: '', // "up" or "down"
                            item: '',
                            period: ''
                        }
                    }
                }
            },
            settings: {
                settingsPane: false,
                enabled: false,
                options: [{
                    title: 'ERROR',
                    value: 'Widget options not set'
                }]
            }
        }
    });

    Ghost.Collections.Widgets = Ghost.ProgressCollection.extend({
        // url: Ghost.paths.apiRoot + '/widgets/', // What will this be?
        model: Ghost.Models.Widget
    });

}());
