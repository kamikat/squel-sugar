var _ = require('lodash');

var squel = require('squel');

squel.cls.QueryBuilder.prototype.mixin = function (transform) {
  transform.call(this, this);
  return this;
};

squel.cls.Select.prototype.fieldMap = function (fields) {
  this.fields(_.transform(fields, function (o, v, k) { o[v] = k; }));
  return this;
};

module.exports = squel;

