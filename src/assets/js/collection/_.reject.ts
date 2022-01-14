(() => {
    const _ = require('lodash');

    interface Users {
        user: string;
        age: number;
        active: boolean;
    };

    const users: Users[] = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': true},
        {'user': 'mario', 'age': 12, 'active': true}
    ];

    const resp1 = _.reject(users, function(o: Users) {
        return !o.active;
    });

    console.log(resp1);

    const resp2 = _.reject(users, {'age': 40, 'active': true});
    console.log(resp2);

    const resp3 = _.reject(users, ['active', false]);
    console.log(resp3);

})();
