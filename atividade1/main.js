
// Seleciona os elementos [cite: 92, 95]
const form = document.getElementById('cadastroForm');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar-senha');

// Eventos de validação [cite: 98, 168]
nome.addEventListener('blur', () => validarCampo(nome, validarNome));
email.addEventListener('blur', () => validarCampo(email, validarEmail));
senha.addEventListener('input', () => validarCampo(senha, validarSenha));
confirmarSenha.addEventListener('blur', () => validarCampo(confirmarSenha, validarConfirmacao));

// Função genérica de validação [cite: 104]
function validarCampo(input, funcaoValidadora) {
    const msgErro = document.getElementById(input.id + '-error');
    const resultado = funcaoValidadora(input.value);

    if (!resultado.valido) {
        input.classList.add('error');
        input.classList.remove('success');
        msgErro.textContent = resultado.mensagem;
    } else {
        input.classList.remove('error');
        input.classList.add('success');
        msgErro.textContent = '';
    }
}

// Validações específicas [cite: 117]
function validarNome(valor) {
    if (!valor.trim()) return { valido: false, mensagem: 'Nome é obrigatório' };
    if (valor.length < 3) return { valido: false, mensagem: 'Mínimo 3 caracteres' };
    return { valido: true };
}

function validarEmail(valor) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!valor) return { valido: false, mensagem: 'E-mail obrigatório' };
    if (!regex.test(valor)) return { valido: false, mensagem: 'Formato inválido' };
    return { valido: true };
}

function validarSenha(valor) {
    if (valor.length < 8) return { valido: false, mensagem: 'Mínimo 8 caracteres' };
    if (!/[A-Z]/.test(valor)) return { valido: false, mensagem: 'Precisa de 1 letra maiúscula' };
    if (!/[0-9]/.test(valor)) return { valido: false, mensagem: 'Precisa de 1 número' };
    return { valido: true };
}

function validarConfirmacao(valor) {
    if (!valor) return { valido: false, mensagem: 'Confirmação obrigatória' };
    if (valor !== senha.value) return { valido: false, mensagem: 'As senhas não conferem' };
    return { valido: true };
}

// Simulação de envio [cite: 178, 205]
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aqui você deve verificar se todos os inputs têm a classe .success antes de enviar
    alert('Formulário enviado com sucesso!');
});