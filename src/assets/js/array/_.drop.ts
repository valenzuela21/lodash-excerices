(() => {
    const _ = require('lodash');

    const array: number[] = [1, 2, 3];
    const resp1 = _.drop(array);
    console.log(resp1);

    const resp2 = _.drop(array, 2);
    console.log(resp2);

    const resp3 = _.drop(array, 5);
    console.log(resp3);

    const resp4 = _.drop(array, 0);
    console.log(resp4);

    // dropRight
    const resp5 = _.dropRight(array);
    console.log(resp5);

    const resp6 = _.dropRight(array, 2);
    console.log(resp6);

    // dropWidth While

    interface Users {
        user: string;
        active: boolean;
    }

    const users: Users[] = [
        {user: 'barney', 'active': true},
        {user: 'mafalda', 'active': false},
        {user: 'pepe', 'active': false},
    ];

    console.log('====== Resp dropRightWhile =====');

    const resp7 = _.dropRightWhile(users, function(param: Users) {
        return !param.active;
    });

    console.log(resp7);

    const resp8 = _.dropRightWhile(users, {'user': 'pepe', 'active': false});
    console.log(resp8);

    const resp9 = _.dropRightWhile(users, ['active', false]);
    console.log(resp9);

    const resp10 = _.dropRightWhile(users, 'active');
    console.log(resp10);

})();
