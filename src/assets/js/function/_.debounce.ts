(() => {

    const _ = require('lodash');

    // Using _.debounce() method
    // with its parameters
    const debounceFun = _.debounce(function(): void {
        console.log('Function debounced after 1000ms!');
    }, 4, 1000, {'leading': true, 'trailing': false});

    // Defining loop
    const loop = function(): void {
        setTimeout(loop, 3);
        debounceFun();
    };

    // Calling loop to start
    loop();

})();
