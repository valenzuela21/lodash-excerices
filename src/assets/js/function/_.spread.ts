(() => {

    const _ = require('lodash');

    const say = _.spread(function(who: any, what: any): string {
        return who + ' says ' + what;
    });

    const resp = say(['Fred', 'hello']);
    console.log(resp);

    const numbers = Promise.all([
        Promise.resolve(40),
        Promise.resolve(36)
    ]);

    numbers.then(_.spread(function(x: number, y: number): void {
       console.log(x + y);
    }));





})();
