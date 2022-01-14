(() => {
    const _ = require('lodash');

    const array: (boolean | number | string)[] = [true, 1, 'yes'];
    const resp1 = _.every(array, Boolean);

    console.log(resp1);

    const users: { user: string, age: number, active: boolean }[] = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': false},
    ];

    const resp2 = _.every(users, {'user': 'barney', 'active': false});
    console.log(resp2);

    const resp3 = _.every(users, ['active', false]);
    console.log(resp3);

    const resp4 = _.every(users, 'active');
    console.log(resp4);


})();
