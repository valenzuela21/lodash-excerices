(() => {
    const _ = require('lodash');

    const arrayNumber: number[] = [1, 2];

    console.log('======= flatMap ======');

    function duplicate(n: number): number[] {
        return [n, n];
    }

    const resp1 = _.flatMap(arrayNumber, duplicate);

    console.log(resp1);

    console.log('======== flatMapDeep ========');

    function duplicate2(n: number): number[][][] {
        return [[[n, n]]];
    }
    const resp2 = _.flatMapDeep(arrayNumber, duplicate2);
    console.log(resp2);

    console.log('======= flatMapDepth =====');

    const resp3 = _.flatMapDepth(arrayNumber, duplicate2);
    console.log(resp3);


})();
