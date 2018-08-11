const req = new Request('users.json', { methos: 'GET' })
const getUser = fetch(req).then((data) => {
    return data.json()
})

 document.querySelector('#btnUSer').addEventListener('click', (e) => {
    getUser.then((res) => {
        console.log(res)
    })
})

