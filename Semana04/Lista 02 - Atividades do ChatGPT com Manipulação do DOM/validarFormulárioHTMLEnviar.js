// Função de seta para validar o formulário
const validarFormulario = (event) => {
    // Prevenir envio padrão do formulário
    event.preventDefault();

    // Capturar os campos
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    // Capturar as áreas para exibir erros
    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroSenha = document.getElementById('erroSenha');

    // Inicialmente, limpar as mensagens de erro
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroSenha.textContent = '';

    let formValido = true;

    // Validar o campo Nome (não pode estar vazio)
    if (nome.value.trim() === '') {
        erroNome.textContent = 'O campo nome é obrigatório.';
        formValido = false;
    }

    // Validar o campo Email (precisa ser um email válido)
    if (email.value.trim() === '') {
        erroEmail.textContent = 'O campo email é obrigatório.';
        formValido = false;
    } else if (!email.value.includes('@')) {
        erroEmail.textContent = 'Por favor, insira um email válido.';
        formValido = false;
    }

    // Validar o campo Senha (mínimo de 6 caracteres)
    if (senha.value.length < 6) {
        erroSenha.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        formValido = false;
    }

    // Se o formulário for válido, pode ser enviado
    if (formValido) {
        document.getElementById('meuFormulario').submit();
    }
};

// Adicionar o evento de submit ao formulário
document.getElementById('meuFormulario').addEventListener('submit', validarFormulario);
