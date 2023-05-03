document.getElementById('entrar').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const botao = document.getElementById('submit-btn');
botao.disabled = true;

const checkbox1 = document.getElementById('agreement');

const trocar = () => {
  if (checkbox1.checked === false) {
    botao.disabled = true;
  } else if (checkbox1.checked === true) {
    botao.disabled = false;
  }
};

checkbox1.addEventListener('click', trocar);

// requisito 20

const contador = document.getElementById('counter');
const textarea = document.getElementById('textarea');

const caracteres = () => {
  const max = 500;
  // length (largura), vai transformar o valor do caractere em um number (posição).
  const tamanho = textarea.value.length;
  const retamanho = max - tamanho;
  contador.innerHTML = retamanho; // dom
};

textarea.addEventListener('input', caracteres);

// requisito 21

const principal = document.getElementById('evaluation-form');
const segundorForms = document.getElementById('form-data');

const ocultarForms = (event) => {
  event.preventDefault();
  principal.style.display = 'none'; segundorForms.style.display = 'flex';
  const emaildigitado = document.getElementById('input-email').value;
  const nomedigitado = document.getElementById('input-name').value;
  const sobrenomedigitado = document.getElementById('input-lastname').value;
  const casa = document.getElementById('house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const label = document.querySelector('input[name="rate"]:checked').value;
  const obs = document.getElementById('textarea').value;
  const checkboxes = Array.from(document.querySelectorAll('.subject:checked'));
  const conteudos = checkboxes.map((checkbox) => checkbox.value);
  document.getElementById('nomeTeste').innerHTML = `Nome: ${nomedigitado} ${sobrenomedigitado}`;
  document.getElementById('emailTeste').innerHTML = `Email: ${emaildigitado}`;
  document.getElementById('casaTeste').innerHTML = `Casa: ${casa}`;
  document.getElementById('familiaTeste').innerHTML = `Família: ${familia}`;
  document.getElementById('materiasTeste').innerHTML = `Matérias: ${conteudos.join(', ')}`; // join add a vírgula e espaço
  document.getElementById('avaliacaoTeste').innerHTML = `Avaliação: ${label}`;
  document.getElementById('obsTeste').innerHTML = `Observações: ${obs}`;
};

botao.addEventListener('click', ocultarForms);
