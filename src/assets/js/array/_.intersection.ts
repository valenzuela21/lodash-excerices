(() => {
    const _ = require('lodash');
    console.log('============== intersection =============');
    const resp1 = _.intersection([2, 1], [2, 3]);
    console.log(resp1);

    console.log('================= intersectionBy ================');
    const resp2 = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    console.log(resp2);

    const resp3 = _.intersectionBy([{'x' :  1}], [{'x' : 2}, {'x' : 1}], 'x');
    console.log(resp3);

    console.log('================= intersectionWith ================');

    const objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    const others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];

    const resp4 = _.intersectionWith(objects, others, _.isEqual);
    console.log(resp4);
})();
