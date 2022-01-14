(() => {

    const _ = require('lodash');

    const number1: number[] =  [5, 1, 7];
    const number2: number[] =  [3, 2, 1];

    const resp1 = _.invokeMap([number1, number2], 'sort');
    console.log(resp1);

    const resp2 =  _.invokeMap([123, 456], String.prototype.split, '');
    console.log(resp2);


})();
