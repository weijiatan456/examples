'use strict';

exports.keys = 'my cooo00ooooool keys';
exports.security = {
  csrf: false,
  ctoken: false,
};

exports.session = {
  key: 'SESSION_ID',  // 设置session cookie里面的key
  maxAge: 1000*60*30, // 设置过期时间
  httpOnly: true,
  encrypt: true,
  renew: true         // renew等于true 那么每次刷新页面的时候 session都会被延期
}
