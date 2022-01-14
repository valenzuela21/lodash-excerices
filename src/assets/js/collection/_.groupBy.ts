(() => {
    const _ = require('lodash');

    const arrayGroup: number[] = [3.4, 6.1, 4.2, 6.3];
    const resp1 = _.groupBy(arrayGroup, Math.floor);
    console.log(resp1);

    const arrayString: string[] = ['one', 'two', 'three', 'four'];

    const resp2 = _.groupBy(arrayString, 'length');
    console.log(resp2);

})();
