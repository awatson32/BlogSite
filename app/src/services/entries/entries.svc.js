"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_svc_1 = require('../base/base.svc');
var EntriesService = (function (_super) {
    __extends(EntriesService, _super);
    function EntriesService() {
        _super.apply(this, arguments);
    }
    EntriesService.prototype.getPosts = function () {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts',
        }).then(function (success) {
            return success.response;
        }, function (err) {
            console.log(err);
            throw err;
        });
    };
    EntriesService.prototype.submitPost = function (blogPost) {
        return this.http.json({
            method: 'POST',
            url: this.host + '/posts',
            data: blogPost
        }).then(function (success) {
            return success.response;
        }, function (err) {
            console.log(err);
            throw err;
        });
    };
    EntriesService.prototype.getPost = function (postId) {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts/' + postId
        }).then(function (success) {
            return success.response;
        }, function (err) {
            console.log(err);
            throw err;
        });
    };
    return EntriesService;
}(base_svc_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntriesService;
platypus_1.register.injectable('entries-svc', EntriesService);
