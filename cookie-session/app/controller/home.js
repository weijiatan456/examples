'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

    async setSession() {
        const ctx = this.ctx;

        // session就是基于cookie的
        ctx.session.username = '张三';
        ctx.session.count = (ctx.session.count || 0) + 1;
        // ctx.session.maxAge = 1000;
        ctx.body = `${ctx.session.count}${ctx.session.username} times, now: ${Date()}`;
    }

}

module.exports = HomeController;
