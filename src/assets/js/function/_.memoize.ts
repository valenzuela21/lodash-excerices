(() => {

    const _ = require('lodash');

    const object = {'a': 1, 'b': 2};
    const other = {'a': 3, 'b': 4};

    const values = _.memoize(_.values);
    console.log(values(object));

    console.log(values(other));

    object.a = 2;
    // Start Memoize
    console.log(values(object));

    // Modify the result cache
    values.cache.set(object, ['a', 'b']);
    console.log(values(object));

    // Replace `_.memoize.Cache`.
    _.memoize.Cache =  WeakMap;

})();
