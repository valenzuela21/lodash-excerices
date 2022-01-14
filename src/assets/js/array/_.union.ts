(() => {
    const _ =  require('lodash');

    console.log('=========== union =============');

    const resp1 = _.union([2], [1, 2]);
    console.log(resp1);

    console.log('=========== unionBy =============');

    const resp2 = _.unionBy([2.1], [1.2, 2.3], Math.floor);
    console.log(resp2);

    const resp3 = _.unionBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x' );
    console.log(resp3);

    console.log('=========== unionWith =============');

    const objects: {x: number , y: number}[] = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
    const others: {x: number, y: number}[] = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

    const resp4 = _.unionWith(objects, others, _.isEqual);
    console.log(resp4);

})();
