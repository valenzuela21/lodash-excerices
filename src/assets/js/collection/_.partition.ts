(() => {
    const _ = require('lodash');

    interface User{
        user: string;
        age: number;
        active: boolean;
    }

    const users: User[] = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': true},
        {'user': 'pebbles', 'age': 1, 'active': false},
    ];

    const resp = _.partition(users, function(o: User){
        return o.active;
    });
    console.log(resp);

})();
