(() => {
    const _ = require('lodash');

    function greet(greeting: string, name: string): string{
        return greeting + ' ' + name;
    }

    const greetFred = _.partialRight(greet, 'Fred');
    const resp1 = greetFred('Hi');
    console.log(resp1);

    const sayHelloTo =  _.partialRight(greet, 'Hello', _);
    const resp2 = sayHelloTo('Fred');
    console.log(resp2);

})();
