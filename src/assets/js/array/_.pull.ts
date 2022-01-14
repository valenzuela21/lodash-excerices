(() => {
    const _ = require('lodash');
    console.log('============= pull ================');
    const array: string[] = ['a', 'b', 'c', 'a', 'b', 'c'];
    const resp1 = _.pull(array, 'a', 'c');
    console.log(resp1);

    console.log('============= pullAll ==============');
    const resp2 = _.pullAll(array, ['a', 'c']);
    console.log(resp2);

    console.log('=============== pullAllBy ===============');
    const infoObj: {x: number}[] = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
    const resp3 = _.pullAllBy(infoObj, [{'x': 1}, {'x' : 3}], 'x');
    console.log(resp3);

    console.log('=============== pullAllWith ===============');
    const infoDomObj: {x: number, y: number}[] = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
    const resp4 = _.pullAllWith(infoDomObj, [{ 'x': 3, 'y': 4 }], _.isEqual);
    console.log(resp4);

    console.log('============= pullAT ================');
    const pulled: string[] =  ['a', 'b', 'c', 'd', 'e'];
    const resp5 = _.pullAt(pulled, [1, 3]);
    console.log(resp5);
})();
