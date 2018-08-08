
(function (n) {

    ({
        'plugins': ['jsdom-quokka-plugin'],
        'jsdom': {
            'file': 'DomManipule/index.html'
        }
    })


    const outlet$ = document.querySelector('#outlet');

    for (let i = 0; i < n; i++) {
        const elemenDIV = document.createElement('div');
        let rndColor1 = Math.random() * 255 << 0
        let rndColor2 = Math.random() * 255 << 0
        let rndColor3 = Math.random() * 255 << 0
        elemenDIV.style = `background:rgb(${rndColor1},${rndColor2},${rndColor3}); margin:10px; height:200px;width:200px`;
        outlet$.appendChild(elemenDIV)
        elemenDIV.addEventListener('click', (ele) => {
            var a = ele.target;
            outlet$.removeChild(a);
        })
    }

})(10)




