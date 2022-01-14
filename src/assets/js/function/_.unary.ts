(() => {
    const _ = require('lodash');
    const resp = _.map(['6', '8', '10'], _.unary(parseInt));
    console.log(resp);
})()
