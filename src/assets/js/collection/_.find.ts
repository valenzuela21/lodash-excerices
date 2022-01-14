(() => {
    const _ = require('lodash');

    interface User {
        user: string;
        age: number;
        active: boolean;
    }

    const users: User[] = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false},
        {'user': 'pebbles', 'age': 1, 'active': true},
    ];

    console.log('====== find =====');

    const resp1 = _.find(users, function(o: User) {
        return o.age < 40;
    });

    // console.log(resp1);

    const resp2 = _.find(users, {'age': 1, 'active': true});

    // console.log(resp2);

    const resp3 = _.find(users, ['active', false]);

    // console.log(resp3);

    const resp4 = _.find(users, 'active');
    console.log(resp4);

    console.log('====== findLast =====');


    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

    const resp5 = _.findLast(numbers, function(n: any): boolean {
        return n % 2 === 1;
    });

    console.log(resp5);

})();


