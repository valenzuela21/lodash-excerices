(() => {
    const _ = require('lodash');
    const rearGed = _.rearg(function(a: number, b: number, c: number): [any, any, any] {
        return [a, b, c];
    }, [2, 0, 1]);

    const resp = rearGed('b', 'c', 'a');
    console.log(resp);

})();
