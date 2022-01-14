(() => {
    const _ = require('lodash');

    function updatePosition(): void {
        console.log('Update scroll');
    }

    document.addEventListener('scroll', _.throttle(updatePosition, 2000));


    function renewToken(): void {
        console.log('Renew Token!');
    }

    const throttled = _.throttle(renewToken, 5000, {'trailing': false});

    const body = document.querySelector('body');
    const btn = document.createElement('button');
    btn.setAttribute('id', 'Div1');

    btn.innerText = 'click here!';
    btn.addEventListener('click', throttled);

    body?.append(btn);

    window.addEventListener('popstate', throttled.cancel);


})();
