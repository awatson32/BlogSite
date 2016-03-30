"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_repo_1 = require('../base/base.repo');
var entries_svc_1 = require('../../services/entries/entries.svc');
var PostsRepository = (function (_super) {
    __extends(PostsRepository, _super);
    function PostsRepository(entriesService) {
        _super.call(this);
        this.entriesService = entriesService;
    }
    PostsRepository.prototype.getPosts = function () {
        return this.entriesService.getPosts();
    };
    PostsRepository.prototype.submitPost = function (post) {
        return this.entriesService.submitPost(post);
    };
    PostsRepository.prototype.getPost = function (postId) {
        return this.entriesService.getPost(postId);
    };
    return PostsRepository;
}(base_repo_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PostsRepository;
platypus_1.register.injectable('posts-repo', PostsRepository, [entries_svc_1.default]);
