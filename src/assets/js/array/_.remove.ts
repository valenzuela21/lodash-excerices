(() => {
    const _ = require('lodash');
    const array: number[] = [1, 2, 3, 4, 5];
    const resp = _.remove(array, function(n: number): boolean {
        return n % 2 === 0;
    });
    console.log(resp);
})();
