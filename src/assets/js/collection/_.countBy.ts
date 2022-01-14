(() => {
    const _ = require('lodash');

    const arrayNumber: number[] =  [6.1, 4.2, 6.3];

    const resp1 = _.countBy(arrayNumber, Math.floor);
    console.log(resp1);

    const arrayString : string[] = ['one', 'two', 'three'];
    const resp2 = _.countBy(arrayString, 'length');
    console.log(resp2);
})();
