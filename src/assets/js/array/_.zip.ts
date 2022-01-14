(() => {
    const _ = require('lodash');
    const arrayLetters$: string[] = ['a', 'b'];
    const arrayNumber$: number[] = [1, 2];
    const arrayBoolean$: boolean[] = [true, false];

    console.log('======= Zip  ======');
    const resp1 = _.zip(arrayLetters$, arrayNumber$, arrayBoolean$);
    console.log(resp1);

    console.log('========== zipObject ==========');
    const resp2 = _.zipObject(arrayLetters$, arrayNumber$);
    console.log(resp2);

    console.log('========== zipObjectDeep ==========');

    const resp3 = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
    console.log(resp3);

    console.log('========== zipWith ==========');
    const resp4 = _.zipWith([1, 2], [10, 20], [100, 200], function(a: any , b: any, c: any): number[] {
        return a + b + c;
    });
    console.log(resp4);

})();
