(() => {
    const _ = require('lodash');

    const users: {user: string, age: number }[] =  [
        {'user': 'superman', 'age': 48},
        {'user': 'capitan america', 'age': 24},
        {'user': 'batman', 'age': 40},
        {'user': 'thor', 'age': 36}
    ];

    const resp = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);

    console.log(resp);



})();
