({
    'plugins': ['jsdom-quokka-plugin'],
    'jsdom': {
        'file': 'data-attr/index.html'
    }
})


var clicked = document.querySelectorAll('[data-click]');
clicked.forEach(res => {
    res.addEventListener('click', () => {
        res.style.backgroundColor='red'
    })
})