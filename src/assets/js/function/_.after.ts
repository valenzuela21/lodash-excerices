(() => {
    const _ = require('lodash');

    // Applying _.after() method
    const gfg = _.after(3, function() {
        console.log('Successful');
    });

    gfg(); // Print nothing
    gfg(); // Print nothing
    gfg(); // Print Saved

})();
