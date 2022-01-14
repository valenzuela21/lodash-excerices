(() => {

    const _ = require('lodash');

    const number$: number[] = [2, 1, 2, 3];
    const resp1 = _.without(number$, 1, 2);

    console.log(resp1);

})();
