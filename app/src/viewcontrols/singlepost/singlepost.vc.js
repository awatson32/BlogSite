"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var posts_repo_1 = require('../../repositories/posts/posts.repo');
var SinglepostViewControl = (function (_super) {
    __extends(SinglepostViewControl, _super);
    function SinglepostViewControl(postRepo) {
        _super.call(this);
        this.postRepo = postRepo;
        this.templateString = require('./singlepost.vc.html');
        this.context = {
            post: {}
        };
    }
    SinglepostViewControl.prototype.navigatedTo = function (parameters) {
        var _this = this;
        var idValue = parameters.someid;
        this.postRepo.getPost(idValue).then(function (success) {
            _this.context.post = success;
        }, function (err) {
            console.log(err);
        });
    };
    return SinglepostViewControl;
}(base_vc_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SinglepostViewControl;
platypus_1.register.viewControl('singlepost-vc', SinglepostViewControl, [posts_repo_1.default]);
