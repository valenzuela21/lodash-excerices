(() => {
    const _ = require('lodash');

    const array = [1, [2, [3, [4]], 5]];
    console.log('=========== flatten ==========');
    const resp1 = _.flatten(array);
    console.log(resp1);

    console.log('=========== flattenDeep ===========');
    const resp2 = _.flatMapDeep(array);
    console.log(resp2);

    console.log('=========== flattenDepth ===========');

    const resp3 = _.flattenDepth(array, 1);
    console.log(resp3);

    const resp4 = _.flattenDepth(array, 2);
    console.log(resp4);

})();
