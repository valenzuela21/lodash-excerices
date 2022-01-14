(() => {
    const _ =  require('lodash');

    const arrayNumber: string[] =  ['6', '8', '10'];

    const resp = _.map(arrayNumber, _.ary(parseInt, 1));

    console.log(resp);
})()
