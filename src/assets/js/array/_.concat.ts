(() => {
    const _ = require('lodash');

    const numbers: number[] = [1, 4, 5, 6, 7, 8, 9];
    const strings: string[] = ['a', 'b', 'c', 'd'];
    const other = _.concat(numbers, strings);
    console.log(other);

})();
