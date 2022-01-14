(() => {
    const _ =  require('lodash');
    const resp = _.join(['a', 'b', 'c', 'd'], '~');
    console.log(resp);
})();
