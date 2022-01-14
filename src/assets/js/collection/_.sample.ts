(() => {
    const _ = require('lodash');

    console.log('======= sample ======');
    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    _.sample(numbers);

    console.log(numbers);

    const numberSize =  _.sample(numbers, 2);
    console.log(numberSize);

    console.log('======= sampleSize ======');

    const numberSize2 = _.sample(numbers, 4);
    console.log(numberSize2);

})();

