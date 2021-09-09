'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
// mz-modules包含了创建、删除、沉睡等功能，具体见https://www.npmjs.com/package/mz-modules
// const { mkdirp, rimraf, sleep } = require('mz-modules');
const pump = require('mz-modules/pump');

class UploadFormController extends Controller {
    async show() {
        await this.ctx.render('page/form.html');
    }

    async upload() {
        const stream = await this.ctx.getFileStream();
        // path.extname('index.html')； // returns '.html'
        // path.extname('index.')； // returns '.'
        // path.extname('index')； // returns ''
        const filename = encodeURIComponent(stream.fields.name) + path.extname(stream.filename).toLowerCase();
        const target = path.join(this.config.baseDir, 'app/public', filename);
        // 创建一个可以写入的流
        const writeStream = fs.createWriteStream(target);
        await pump(stream, writeStream);
        this.ctx.redirect('/public/' + filename);
    }
}

module.exports = UploadFormController;
