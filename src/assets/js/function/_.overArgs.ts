(() => {

    const _ = require('lodash');

    function doubled(n: number): number{
        return n * 2;
    }

    function square(n: number): number{
        return n * n;
    }

    const func = _.overArgs(function(x: number, y: number): [number, number]{
        return [x, y];
    }, [square, doubled]);

    const resp  = func(9, 3);
    console.log(resp);

    const resp2  = func(10, 5);
    console.log(resp2);

})();
