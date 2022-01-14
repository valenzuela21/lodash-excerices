(() => {
    const _ = require('lodash');
    console.log('========== Initial ===========');
    const number$: number[] = [1, 2, 3];
    const resp = _.initial(number$);
    console.log(resp);
})();
