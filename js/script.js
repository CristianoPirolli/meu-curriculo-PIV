const form = document.getElementById('formContato');
const campoNome = document.getElementById('nome');
const saudacao = document.getElementById('saudacao');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Obrigado pelo contato, ' + campoNome.value + '!');
    form.reset();
    saudacao.innerText = '';
});

// vai montando a saudação enquanto a pessoa digita o nome
campoNome.addEventListener('input', () => {
    const valor = campoNome.value.trim();

    if (valor) {
        saudacao.innerText = `Olá, ${valor}! Seja bem-vindo(a).`;
    } else {
        saudacao.innerText = '';
    }
});

document.getElementById('btnSaudacao').addEventListener('click', () => {
    alert('Olá! Obrigado por visitar meu currículo.');
});

// contador de visitas guardado no localStorage
let visitas = Number(localStorage.getItem('visitas')) || 0;
visitas++;
localStorage.setItem('visitas', visitas);
document.getElementById('contador').innerText = 'Visitas: ' + visitas;

// anima cada seção quando ela entra na tela
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((secao) => observador.observe(secao));
