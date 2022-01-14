(() => {
    const _ = require('lodash');

    interface User {
        user: string;
        age: number;
    }

    const users: User[] = [
        {'user': 'fred', 'age': 48},
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40},
        {'user': 'barney', 'age': 34},
    ];
    const resp1 = _.sortBy(users, [function(o: User): string {
        return o.user;
    }]);

    console.log(resp1);

    const resp2 = _.sortBy(users, ['user', 'age']);
    console.log(resp2);
})();
