(() => {
    const _ = require('lodash');

    const resp1 = _.head([1, 2, 3, 4, 5]);
    console.log(resp1);

    const resp2 = _.head([]);
    console.log(resp2);

})();
