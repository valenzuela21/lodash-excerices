(() => {

    const _ = require('lodash');

    interface User {
        user: string,
        active: boolean
    }

    const resp = _.some([null, 0, 'yes', false], Boolean);
    console.log(resp);

    const users: User[] = [
        {'user': 'Toledo', 'active': false},
        {'user': 'Fred', 'active': true}
    ];

    const resp2 = _.some(users, {'user': 'Toledo', 'active': true});
    console.log(resp2);

    const resp3 = _.some(users, ['active', false]);
    console.log(resp3);

    const resp4 = _.some(users, 'active');
    console.log(resp4);

})();
