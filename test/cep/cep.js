const btnThen = document.getElementById('btnThen')
const btnAsync = document.getElementById('btnAsync')
const inputCep = document.getElementById('cep')


// botao then
btnThen.addEventListener('click', () => {

    const cep = inputCep.value

    fetch(`https://viacep.com.br/ws/${cep}/json/`)

    .then((resposta) => {

        if (!resposta.ok) {
            throw new Error('CEP inválido')
        }

        return resposta.json()
    })

    .then((dados) => {

        if (dados.erro) {
            throw new Error('CEP não encontrado')
        }

        console.log(dados)
        alert(`Cidade: ${dados.localidade}`)

    })

    .catch((erro) => {
        console.warn(erro.message)
    })

})



// botao asyc
btnAsync.addEventListener('click', async () => {

    try {

        const cep = inputCep.value

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        if (!resposta.ok) {
            throw new Error('CEP inválido')
        }

        const dados = await resposta.json()

        if (dados.erro) {
            throw new Error('CEP não encontrado')
        }

        console.log(dados)
        alert(`Cidade: ${dados.localidade}`)

    } catch (erro) {

        console.warn(erro.message)

    }

})
