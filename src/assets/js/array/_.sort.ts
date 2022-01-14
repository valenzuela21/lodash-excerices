(() => {
    const _ = require('lodash');

    console.log('=========== sortedIndex ============');

    const resp1 = _.sortedIndex([30, 40], 40);
    console.log(resp1);

    console.log('=========== sortedIndexBy ============');
    const objects: { x: number }[] = [{'x': 4}, {'x': 5}];

    const resp2 = _.sortedIndexBy(objects, {'x': 4}, function(o: any) {
        return o.x;
    });

    console.log(resp2);

    const resp3 = _.sortedIndexBy(objects, {'x': 4}, 'x');
    console.log(resp3);

    console.log('=========== sortedIndexOf ============');

    const objNumber: number[] = [4, 5, 5, 6, 5];

    const resp4 = _.sortedIndexBy(objNumber, 5);
    console.log(resp4);

    console.log('=========== sortedLastIndex ============');

    const resp5 = _.sortedLastIndex(objNumber, 5);
    console.log(resp5);

    console.log('=========== sortedLastIndexBy ============');

    const objNumber2 = [{'x': 4}, {'x': 5}];

    const resp6 = _.sortedLastIndexBy(objNumber2, {'x': 4}, function(o: any) {
        return o.x;
    });

    console.log(resp6);

    const resp7 = _.sortedLastIndexBy(objects, {'x': 4}, 'x');
    console.log(resp7);

    console.log('=========== sortedLastIndexOf ============');

    const resp8 = _.sortedLastIndexOf(objNumber, 4);
    console.log(resp8);

    console.log('=========== sortedUniq ============');
    const resp9 = _.sortedUniq(objNumber, 5);
    console.log(resp9);

    console.log('=========== sortedUniqBy ============');
    const resp10 =  _.sortedUniqBy(objNumber, 5);
    console.log(resp10);

})();
