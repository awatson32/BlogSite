"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var entries_svc_1 = require('../../services/entries/entries.svc');
var HomeViewControl = (function (_super) {
    __extends(HomeViewControl, _super);
    function HomeViewControl(entriesService) {
        _super.call(this);
        this.entriesService = entriesService;
        this.templateString = require('./home.vc.html');
        this.context = {
            posts: []
        };
    }
    ;
    HomeViewControl.prototype.navigatedTo = function () {
        var _this = this;
        this.entriesService.getPosts().then(function (posts) {
            console.log(posts);
            _this.context.posts = posts;
        });
    };
    return HomeViewControl;
}(base_vc_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeViewControl;
console.log("Hello world");
platypus_1.register.viewControl('home-vc', HomeViewControl, [entries_svc_1.default]);
