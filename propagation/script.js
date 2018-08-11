({
    'plugins': ['jsdom-quokka-plugin'],
    'jsdom': {
        'file': 'propagation/index.html'
    }
})

const boxs = document.querySelectorAll('.box');
boxs.forEach(box => {
    box.addEventListener('click', function(e) {
        console.log('test');
    }, true)
});


const special = document.querySelector('#special'); 
special.addEventListener('click', function(e)  {
    console.log('special');  
    e.stopPropagation();
}, true)