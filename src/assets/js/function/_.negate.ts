(() => {
    const _ = require('lodash');
    const number$: number[] = [1, 2, 3, 4, 5, 6, 7];

    function isEven(n: number): boolean {
        return n % 2 === 0;
    }

    const resp = _.filter(number$, _.negate(isEven));
    console.log(resp);

})();
