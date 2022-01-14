(() => {
    const _ = require('lodash');
    const flipped = _.flip(function(): string[]{
        return _.toArray(arguments);
    });

    const resp = flipped('a', 'b', 'c', 'd');

    console.log(resp);
})();
