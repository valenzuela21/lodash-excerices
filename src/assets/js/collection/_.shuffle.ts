(() => {
    const _ = require('lodash');
    const numbers: number[] = [1, 2, 3, 4, 5];

    const resp =  _.shuffle(numbers);
    console.log(resp);
})();
