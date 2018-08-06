({
    'plugins': ['jsdom-quokka-plugin'],
    'jsdom': {
        'file': 'closure/index.html'
    }
})


const itemTExt =
    [
        {
            id: '#field1',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, exercitationem.'
        },
        {
            id: '#field2',
            text: 'sss Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, exercitationem.'

        }
    ]


function handleItem(id, text) {

    let alert;
    alert = document.querySelector('#alert');
    if (alert!= null) {
        alert.parentNode.removeChild(alert)
    }

    const domTest$ = document.querySelector('#test');
    const newElement = document.createElement('div');
    newElement.id = "alert";
    newElement.className = "alert alert-danger"
    newElement.innerHTML = text

    const elementCible = document.querySelector(id).parentNode;
    elementCible.insertBefore(newElement, elementCible.childNodes[1])

}





function setupItem() {
    let DOMElemnt$;
    for (var i = 0; i < itemTExt.length; i++) {
        DOMElemnt$ = document.querySelector(itemTExt[i].id)
        DOMElemnt$.addEventListener('focus', initItem(itemTExt[i].id, itemTExt[i].text))
    }
}


function initItem(id, text) {
    return function () {
        handleItem(id, text)
    }
}


setupItem();