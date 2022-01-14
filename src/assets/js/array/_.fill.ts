(() => {
    const _ = require('lodash');

    const numbers: number[] = [1, 2, 3, 4, 5];
    console.log(numbers);

    _.fill(numbers, 2);
    console.log(numbers);

    const letters: string[] = ['a', 'b', 'c', 'd'];
    _.fill(letters, 'd');

    console.log(letters);


    const resp = _.fill(Array(3), 8);
    console.log(resp);

    _.fill(numbers, '*', 1, 3);
    console.log(numbers);

})();
