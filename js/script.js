// ===== Formulário de contato =====
const form = document.getElementById('formContato');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    alert('Obrigado pelo contato, ' + nome + '!');

    form.reset();
    document.getElementById('saudacao').innerText = '';
});

// ===== Botão "Dizer olá" =====
document.getElementById('btnSaudacao').addEventListener('click', function () {
    alert('Olá! Obrigado por visitar meu currículo.');
});

// ===== Saudação dinâmica ao digitar o nome =====
const campoNome = document.getElementById('nome');
const saudacao = document.getElementById('saudacao');

campoNome.addEventListener('input', function () {
    const valor = campoNome.value.trim();
    saudacao.innerText = valor ? 'Olá, ' + valor + '! Seja bem-vindo(a).' : '';
});

// ===== Contador de visitas com localStorage =====
const contadorEl = document.getElementById('contador');
let visitas = Number(localStorage.getItem('visitas')) || 0;
visitas += 1;
localStorage.setItem('visitas', visitas);
contadorEl.innerText = 'Visitas: ' + visitas;
