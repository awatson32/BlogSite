"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var posts_repo_1 = require('../../repositories/posts/posts.repo');
var newentry_vc_1 = require('../newentry/newentry.vc');
var singlepost_vc_1 = require('../singlepost/singlepost.vc');
var HomeViewControl = (function (_super) {
    __extends(HomeViewControl, _super);
    function HomeViewControl(postRepo) {
        _super.call(this);
        this.postRepo = postRepo;
        this.templateString = require('./home.vc.html');
        this.context = {
            posts: [],
            composeView: newentry_vc_1.default
        };
    }
    ;
    HomeViewControl.prototype.navigatedTo = function () {
        var _this = this;
        this.postRepo.getPosts().then(function (posts) {
            console.log(posts);
            _this.context.posts = posts;
        }, function (err) {
            console.log(err);
        });
    };
    HomeViewControl.prototype.newPost = function () {
        this.navigator.navigate(newentry_vc_1.default);
    };
    HomeViewControl.prototype.singlePost = function (postId) {
        console.log('This is working');
        this.navigator.navigate(singlepost_vc_1.default, {
            parameters: {
                someId: postId
            }
        });
    };
    return HomeViewControl;
}(base_vc_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeViewControl;
platypus_1.register.viewControl('home-vc', HomeViewControl, [posts_repo_1.default]);
