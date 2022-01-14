(() => {
    const _ = require('lodash');

    const body = document.querySelector('body');
    const btn = document.createElement('button');
    btn.classList.add('btn-large');
    btn.innerText = 'Click her';

    function addContactToList(): void {
        console.log('Add or the list');
    }


    btn.addEventListener('click', _.before(6, addContactToList));

    body?.append(btn);

})();
