Squel Sugar
-----------

Several syntactic sugar extension to [Squel.js](https://hiddentao.github.io/squel/) API.

### Installation ###

    $ npm install squel-sugar

Or, save to dependency:

    $ npm install --save squel-sugar

### Usage ###

    var squel = require('squel-sugar');

#### QueryBuilder.mixin(processor: Function) ####

Apply a function on the query

    var pagination = function (page, pageSize) {
      return function (query) {
        if (perPage) {
          query.limit(pageSize);
        }
        if (page) {
          query.offset(pageSize * page);
        }
      };
    };

    squel.select().from('example').mixin(pagination(1, 20)).toString();

    // => 'SELECT * FROM example LIMIT 20 OFFSET 20'

#### Select.fieldMap() ####

Invert the map `Select.fields(map: { Field -> ColName })` to `Select.fieldMap(map: { ColName -> Field })`

    squel.select()
      .from('example')
      .fieldMap({
        category: 'example.category',
        item_count: 'COUNT(1)'
      })
      .group('category')
      .toString();

    // => 'SELECT example.category AS "category", COUNT(1) AS "item_count" FROM example GROUP BY category'

License
-------

(The MIT License)

