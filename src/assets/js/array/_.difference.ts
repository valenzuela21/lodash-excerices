(() => {
    const _ = require('lodash');

    const numbers1: number[] = [1, 2, 9, 3, 4, 5];
    const numbers2: number[] = [2, 3, 6];

    const resp =  _.difference(numbers1, numbers2);
    console.log(resp);

})();
