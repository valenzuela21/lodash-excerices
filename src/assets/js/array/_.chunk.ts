(() => {
    const _ = require('lodash');

    const letters: (number | string)[] = ['a', 1, 3, 5, 'c', 9];
    const resp =  _.chunk(letters, 2);
    const resp2 =  _.chunk(letters, 3);

    console.log(resp);

    console.log(resp2);

})();
