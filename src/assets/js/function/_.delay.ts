(() => {
    const _ = require('lodash');
    _.delay(function(text: string): void {
        console.log(text);
    }, 4000, 'later');
})();
