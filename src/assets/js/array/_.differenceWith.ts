(() => {
    const _ = require('lodash');

    const array1: number[] = [2.1, 1.2];
    const array2: number[] = [2.3, 3.4];
    const math = Math.floor;

    console.log(math);
    const resp =  _.differenceBy(array1, array2, math);
    console.log(resp);

    const resp2 =  _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');

    console.log(resp2);

    // differenceWith

    const obj = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

    const resp3 =  _.differenceWith(obj, [{'x': 1, 'y': 2}], _.isEqual);
    console.log(resp3);

})();
