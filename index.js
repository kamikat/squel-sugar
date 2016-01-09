var _ = require('lodash');

var squel = require('squel');

var infect = function (squel) {

  squel.cls.QueryBuilder.prototype.mixin = function (transform) {
    transform.call(this, this);
    return this;
  };

  squel.cls.Select.prototype.fieldMap = function (fields) {
    this.fields(_.transform(fields, function (o, v, k) { o[v] = k; }));
    return this;
  };

  return squel;
};

var useFlavour = squel.useFlavour;

squel.useFlavour = function (flavour) {
  return infect(squel.useFlavour(flavour));
}

module.exports = infect(squel);

