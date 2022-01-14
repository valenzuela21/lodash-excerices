(() => {

    const _ = require('lodash');

    function createApplication(): void {
        console.log('Loading app...');
    }

    const initialize = _.once(createApplication);

    initialize();
    initialize();

})();
