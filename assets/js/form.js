document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário padrão

    // Obtendo os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const estado = document.getElementById('estado').value;
    const cidade = document.getElementById('cidade').value;
    const capitalInvestir = document.getElementById('capitalInvestir').value;

    // Validação dos campos
    if (nome === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    if (email === "" || !validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (telefone === "") {
        alert("Por favor, insira seu número de WhatsApp.");
        return;
    }

    if (estado === "") {
        alert("Por favor, selecione seu estado.");
        return;
    }

    if (cidade === "") {
        alert("Por favor, selecione sua cidade.");
        return;
    }

    if (capitalInvestir === "" || capitalInvestir === "Capital disponível para investir") {
        alert("Por favor, selecione o capital disponível para investir.");
        return;
    }

    // Se tudo estiver correto, redireciona para a página de sucesso
    window.location.href = "sucesso.html";  // Redireciona para a página de sucesso (substitua com o caminho correto)
});

// Função para validar o e-mail
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
