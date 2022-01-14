(() => {
    const _ = require('lodash');
    interface Users {
        user: string;
        active: boolean;
    }

    const users: Users[] = [
        {user: 'barney', 'active': true},
        {user: 'mafalda', 'active': false},
        {user: 'pepe', 'active': false},
    ];

    console.log('====== findIndex =====');

    const resp = _.findIndex(users, function( o: Users): boolean{
        return o.user === 'barney';
    });

    console.log(resp);

    const resp2 = _.findIndex(users, {'user': 'mafalda', 'active': false});
    console.log(resp2);

    const resp3 = _.findIndex(users, ['active', false]);
    console.log(resp3);

    const resp4 = _.findIndex(users, 'active');
    console.log(resp4);

    console.log('====== findLastIndex =====');

    const resp5 = _.findLastIndex(users, function(o: Users){
        return o.user === 'mafalda';
    });
    console.log(resp5);

    const resp6 = _.findLastIndex(users, { 'user': 'barney', 'active': true });
    console.log(resp6);

})();

