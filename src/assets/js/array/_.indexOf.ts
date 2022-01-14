(() => {
    const _ = require('lodash');

    const arrayNumber: number[] = [1, 2, 1, 2];

    const resp1 = _.indexOf(arrayNumber, 2);

    console.log(resp1);

    const resp2 = _.indexOf(arrayNumber, 2, 2);

    console.log(resp2);

})();
