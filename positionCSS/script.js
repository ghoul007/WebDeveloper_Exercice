(function () {
    ({
        'plugins': ['jsdom-quokka-plugin'],
        'jsdom': {
            'file': 'DomManipule/index.html'
        }
    })


    const btn = document.querySelectorAll('.btn');

    btn.forEach(res => {
        res.addEventListener('click', () => {
            if (document.querySelector('.toolClick')) {
                document.querySelector('.toolClick').remove();
            }
            res.querySelector('.tool').classList.add('toolClick');
        }, false)
    })

})()