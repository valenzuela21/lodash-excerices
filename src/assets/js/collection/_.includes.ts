(() => {
    const _ = require('lodash');

    const arrayNumbers: number [] = [1, 2, 3, 4, 5, 6, 7];

    const resp1 = _.includes(arrayNumbers, 1);

    console.log(resp1);

    const resp2 = _.includes(arrayNumbers, 1, 2);
    console.log(resp2);


    const obj: any = {
        'a': 1,
        'b': 2
    };

    const resp3 = _.includes(obj, 1);
    console.log(resp3);


    const letters =  'abcdefgh';
    const resp4 = _.includes(letters, 'bc');

    console.log(resp4);
})();
