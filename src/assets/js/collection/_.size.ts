(() => {
    const _ = require('lodash');

    console.log(_.size([1, 2, 3, 4, 5]));
    console.log(_.size({'a': 1, 'b': 2}));
    console.log(_.size('pebbles'));

})();
