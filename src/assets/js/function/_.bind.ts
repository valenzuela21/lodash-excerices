(() => {
    const _ = require('lodash');

    function greet(this: any, greeting: any, punctuation: any): string {
        return greeting + ' ' + this.user + punctuation;
    }

    const object = {'user': 'Fred'};

    const bound1 = _.bind(greet, object, 'Hi');
    const resp1 = bound1('!');
    console.log(resp1);

    const bound2 = _.bind(greet, object, _, '!');
    const resp2 = bound2('Hey');
    console.log(resp2);

    console.log('=========== bindKey =============');
    const object2 = {
        'user': 'fred',
        'greet'(greeting: any, punctuation: any): string {
            return greeting + ' ' + this.user + punctuation;
        }
    };

    const bound3 =  _.bindKey(object2, 'greet', 'Hi');
    const resp3 = bound3('!');

    console.log(resp3);

    object2.greet = function(this: any, greeting: any, punctuation: any): string {
        return greeting + 'ya ' + this.user + punctuation;
    };

    const resp4 = bound3('!');
    console.log(resp4);

    const bound4 = _.bindKey(object2, 'greet', _, '!');
    const resp5 = bound4('hi');
    console.log(resp5);

})();
