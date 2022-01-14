(() => {

    const _ = require('lodash');

    const p = _.wrap(_.escape, function(func: any, text: string): string {
        return '<p>' + func(text) + '</p>';
    });

    const resp = p('Fred, Barney & pebbles');

    console.log(resp);
})();
