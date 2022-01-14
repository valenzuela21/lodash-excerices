(() => {

    const _ =  require('lodash');

    const abc =  function(a: number, b: number , c: number): [number, number, number]{
        return [a, b, c];
    };

    const curried =  _.curry(abc);
    const resp1 =  curried(1)(2)(3);
    console.log(resp1);

    const resp2 =  curried(1 , 2)(3);
    console.log(resp2);

    const resp3 =  curried(1 , 2, 3);
    console.log(resp3);

    const resp4 =  curried(1 )(_, 3)(2);
    console.log(resp4);


    console.log('================ curryRight ===================');

    const curried2 = _.curryRight(abc);
    const resp5 = curried2(3)(2)(1);
    console.log(resp5);

    const resp6 = curried2(2, 3)(1);
    console.log(resp6);

    const resp7 = curried2(3, 2, 1);
    console.log(resp7);

    const resp8 =  curried(3 )(2, _)(1);
    console.log(resp8);

})();
