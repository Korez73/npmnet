"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UsersRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userService = require("../services/userService.mjs");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

//service to inject that into the router

// /api/users/*
var UsersRouter = exports.UsersRouter = function () {
    function UsersRouter(config) {
        _classCallCheck(this, UsersRouter);

        this.config = config;
        this.userService = config.getService("UserService");
        if (!this.userService) throw Error("UserService not found");
    }

    _createClass(UsersRouter, [{
        key: "build",
        value: function build() {
            var _this = this;

            //a 'magic' method?
            this.router = express.Router();
            this.router.route("/").get(async function (req, res, next) {
                var users = await _this.userService.getUsersAsync();
                res.json(users);
            });
            //add posts, delete routes in here if we want.
            return this.router;
        }
    }]);

    return UsersRouter;
}();
//# sourceMappingURL=usersRouter.js.map