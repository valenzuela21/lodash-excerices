(() => {
    const _ = require('lodash');

    const arrayObj = [
        {'dir': 'left', 'code': 97},
        {'dir': 'right', 'code': 100}
    ];

    const resp1 = _.keyBy(arrayObj, function(o: any): string {
        return String.fromCharCode(o.code);
    });

    console.log(resp1);

    const resp2 = _.keyBy(arrayObj, 'dir');
    console.log(resp2);

})();
