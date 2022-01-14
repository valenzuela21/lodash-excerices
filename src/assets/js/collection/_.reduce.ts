(() => {
    const _ = require('lodash');
    console.log('======== reduce =========');
    const resp1 = _.reduce([1, 2], function(sum: number, n: number): number {
        return sum + n;
    }, 0);
    console.log(resp1);

    const resp2 = _.reduce({'a': 1, 'b': 2, 'c': 1}, function(result: any, value: any, key: number): any {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {});

    console.log(resp2);

    console.log('======== reduceRight =========');

    const array: number[][] = [[0, 1], [2, 3], [4, 5]];

    const resp3 = _.reduceRight(array, function(flattened: number[], other: number): any{
        return flattened.concat(other);
    }, []);

    console.log(resp3);

})();
