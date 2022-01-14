(() => {

    const _ = require('lodash');
    const say = _.rest(function(what: any, names: any): string{
            return  what + ' ' + _.initial(names).join(', ') + (_.size(names) > 1 ? ', & ' : ' ') + _.last(names);
    });

    const resp = say('hello', 'fred', 'barney' , 'pebbles');

    console.log(resp);

})();


