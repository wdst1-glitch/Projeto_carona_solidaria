const usuario = {
    email: 'williandavist@gmail.com',
    senha: '123456'
}

const botao = document.getElementById('botao')

botao.addEventListener('click', function () {
    const emailDigitado = document.getElementById('email').value
    const senhaDigitada = document.getElementById('senha').value

    if (emailDigitado === usuario.email && senhaDigitada === usuario.senha) {
        window.location.href = "../dashboard/index.html"
    } else
        alert("Tem algo errado, mermão")
})