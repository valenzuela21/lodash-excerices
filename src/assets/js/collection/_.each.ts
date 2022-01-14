(() => {
    const _ = require('lodash');

    const arrayNumber: number[] =  [1, 2, 3, 4];

    console.log('======= forEach ======');

    _.forEach(arrayNumber, function(value: number): void{
        console.log(value);
    });

    const obj: {a: number, b: number, c: number} =  { 'a': 1, 'b': 2, 'c': 3};
    _.forEach(obj, function(value: any , key: number): void{
        console.log(key);
    });

    console.log('======= forEachRight ======');

    _.forEachRight(arrayNumber, (value: number) => {
        console.log(value);
    });
    
})();
