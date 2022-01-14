(() => {
    const _ = require('lodash');
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

    console.log('========== take ===========');

    const resp1 = _.take(numbers);

    console.log(resp1);

    const resp2 = _.take(numbers, 2);
    console.log(resp2);

    const resp3 = _.take(numbers, 5);
    console.log(resp3);

    const resp4 = _.take(numbers, 0);
    console.log(resp4);

    console.log('========== takeRight ===========');

    const resp5 = _.takeRight(numbers);
    console.log(resp5);

    const resp6 = _.takeRight(numbers, 2);
    console.log(resp6);

    const resp7 = _.takeRight(numbers, 5);
    console.log(resp7);

    const resp8 = _.takeRight(numbers, 0);
    console.log(resp8);

    console.log('========== takeRightWhile ===========');

    interface User {
        user: string;
        active: boolean;
    };

    const users: User[] = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': false}
    ];

    const resp9 = _.takeRightWhile(users, function(o: User): boolean {
        return !o.active;
    });

    console.log(resp9);


    const resp10 = _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });

    console.log(resp10);

    const resp11 = _.takeRightWhile(users, ['active', false]);
    console.log(resp11);

    const resp12 =  _.takeRightWhile(users, 'active');
    console.log(resp12);


    console.log('========== takeWhile ===========');

    const usersTake: User[] = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];

    const resp13 =  _.takeWhile(usersTake, function(o: User): boolean { return !o.active; });
    console.log(resp13);

    const resp14 =  _.takeWhile(usersTake, { 'user': 'barney', 'active': false });
    console.log(resp14);

    const resp15 =  _.takeWhile(usersTake, ['active', false]);
    console.log(resp15);

    const resp16 =  _.takeWhile(usersTake, 'active');
    console.log(resp16);

})();
