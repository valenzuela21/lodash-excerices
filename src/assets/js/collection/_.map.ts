(() => {
    const _ = require('lodash');

    function square(n: number): number{
        return n * n;
    }

    const resp1 = _.map([4, 8], square);
    console.log(resp1);

    const resp2 = _.map({'a': 4 , 'b': 8}, square);
    console.log(resp2);

    const users = [
        {'user': 'barney'},
        {'user': 'mafalda'}
    ]

    const resp3 = _.map(users, 'user');
    console.log(resp3);
})()
