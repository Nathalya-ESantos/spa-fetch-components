const cep = '';

fetch('https://viacep.com.br/ws/' + cep + '/json/')
.then((resposta) => {
    if(!resposta.ok){
        throw new Error("cep invalido")
    }
    const resp = resposta.json()
    console.log(resp)
    return resp
})


// fetch('https://viacep.com.br/ws/01001000/json/')
// .then((resposta) => {

//     return resposta.json()
// })

.then((dados) => {

    console.log(dados)

})
.catch((error) => {

    console.warn(error)
})



