(() => {
    const _ = require('lodash');

    const array1: number[] = [2, 1];
    const array2: number[] = [2, 3];
    const array3: number[] = [2, 4];

    console.log('=========== xor ===========');

    const resp1 = _.xor(array1, array2, array3);

    console.log(resp1);

    console.log('============ xorBy =============');

    const resp2 = _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    console.log(resp2);

    const resp3 = _.xorBy([{'x': 1}], [{'x' : 2}, {'x' : 1}], 'x');
    console.log(resp3);

    console.log('========= Sort witch =========');

    const objects: {x: number, y: number}[] = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others: {x: number, y: number}[] = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

    const resp4 = _.xorWith(objects, others, _.isEqual);
    console.log(resp4);
})();
