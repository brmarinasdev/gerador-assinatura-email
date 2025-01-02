function geraAssinatura() {
  const nome = document.getElementById('nome').value;
  const setor = document.getElementById('setor').value;
  const telefone = document.getElementById('telefone').value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById('email').value;

  document.getElementById('ass-nome').innerText = nome;
  document.getElementById('ass-setor').innerText = setor;
  document.getElementById('ass-telefone').innerText = telefone;
  document.getElementById('ass-celular').innerHTML = celular ? `${celular} <img src="imagens/logo_whatsapp.png" alt="Celular" style="width: 15px; height: 15px; margin-left: 5px;">` : "";
  document.getElementById('ass-email').innerText = email;
}

function exportaPNG() {
  const signatureElement = document.getElementById('assinatura-gerada');
  const scale = 310 / signatureElement.offsetWidth;
  html2canvas(signatureElement, {
    scale: scale, // Aplica a escala calculada
    useCORS: true
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'assinatura.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

//Seleciona os elementos do formulário
const inputNome = document.getElementById('nome');
const inputSetor = document.getElementById('setor');
const inputTelefone = document.getElementById('telefone');
const inputCelular = document.getElementById('celular');
const inputEmail = document.getElementById('email');

// Seleciona os elementos do crachá
const assNome = document.getElementById('ass-nome');
const assSetor = document.getElementById('ass-setor');
const assTelefone = document.getElementById('ass-telefone')
const assCelular = document.getElementById('ass-celular')
const assEmail = document.getElementById('ass-email');


//Atualiza os elementos no crachá em tempo real
inputNome.addEventListener('input', () => { assNome.textContent = inputNome.value });
inputSetor.addEventListener('input', () => { assSetor.textContent = inputSetor.value });
inputTelefone.addEventListener('input', () => { assTelefone.textContent = inputTelefone.value });
inputCelular.addEventListener('input', () => {
  assCelular.innerHTML = inputCelular.value ? `${inputCelular.value}<img src="imagens/logo_whatsapp.png" alt="Celular" style="width: 15px; height: 15px; margin-left: 5px;">` : "";
});
inputEmail.addEventListener('input', () => { assEmail.textContent = inputEmail.value });


//Limpa os campos do formulário
function zerar_campos() {

  document.getElementById('ass-nome').innerText = "";
  document.getElementById('ass-setor').innerText = "";
  document.getElementById('ass-telefone').innerText = "";
  document.getElementById('ass-celular').innerHTML = "";
  document.getElementById('ass-email').innerText = "";

  document.getElementById('nome').value = "";
  document.getElementById('setor').value = "";
  document.getElementById('telefone').value = "";
  document.getElementById('celular').value = "";
  document.getElementById('email').value = "";
};

