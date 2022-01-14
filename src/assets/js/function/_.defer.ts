(() => {
    const _ = require('lodash');
    _.defer(function(text: string): void {
        console.log(text);
    }, 'deferred');
})();

