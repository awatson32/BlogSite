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
    function EntriesService(postsRepository) {
        _super.call(this);
        this.postsRepository = postsRepository;
    }
    EntriesService.prototype.getPosts = function () {
        return this.http.json({
            method: 'GET',
            url: this.host + '/posts',
        }).then(function (success) {
            return success.response.data;
        });
    };
    return EntriesService;
}(base_svc_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntriesService;
platypus_1.register.injectable('entries-svc', EntriesService);
