(() => {
    const _ = require('lodash');

    interface Users {
        user: string;
        age: number;
        active: boolean;
    };

    const users: Users[] = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false}
    ];

    const resp1 = _.filter(users, (o: Users) => {
        return !o.active;
    });
    console.log(resp1);

    const resp2 = _.filter(users, {'age': 36, 'active': true});
    console.log(resp2);

    const resp3 = _.filter(users, ['active', false]);
    console.log(resp3);

    const resp4 = _.filter(users, 'active');
    console.log(resp4);


})();

