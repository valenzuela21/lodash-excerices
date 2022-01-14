(() => {
    const _ = require('lodash');
    const number$: number[] = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7];
    console.log('============ uniq =============');
    const resp1 = _.uniq(number$);
    console.log(resp1);

    console.log('============ uniqBy =============');
    const resp2 = _.uniqBy([2.1, 1.2, 2.3], Math.floor);
    console.log(resp2);
    const resp3 = _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
    console.log(resp3);

    console.log('============ uniqWith =============');
    const objects: {x: number, y: number}[] = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    _.uniqWith(objects, _.isEqual);

    console.log('============ unzipWith =============');
    const zipped = _.zip([1, 2], [10, 20], [100, 200]);
    _.unzipWith(zipped, _.add);

})();
