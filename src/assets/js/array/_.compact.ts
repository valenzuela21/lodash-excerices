(() => {
    const _ = require('lodash');

    const array: (boolean | number | string)[] = [0, 1, false, 2, '', 3, true];
    const resp = _.compact(array);
    console.log(resp);

})();
