(() => {

    const _ =  require('lodash');

    function greet(greeting: any, name: string): string{
        return greeting +  ' ' + name;
    }

    const sayHelloTo =  _.partial(greet, 'Hello');
    const resp1 = sayHelloTo('Fred');
    console.log(resp1);

    const greetFred =  _.partial(greet, _, 'Fred');
    const resp2 = greetFred('Hy');
    console.log(resp2);

})();
