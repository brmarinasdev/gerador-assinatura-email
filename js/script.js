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
inputCelular.addEventListener('input', () => {assCelular.innerHTML = inputCelular.value ? `${inputCelular.value}<img src="imagens/logo_whatsapp.png" alt="Celular" style="width: 10px; height: 10px; margin-left: 5px;">` : "";
});
inputEmail.addEventListener('input', () => { assEmail.textContent = inputEmail.value });

//Exporta a assinatura
function exportarPNG() {
  const elemento = document.getElementById("assinatura-gerada");
  const nome = document.getElementById("nome").value.trim() || "assinatura";
  html2canvas(elemento, {
    scale: 3, 
    useCORS: true 
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = `${nome.toLowerCase().replace(/\s+/g, "_")}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

//Muda o layout da assinatura
const logoImg = document.querySelector('#assinatura-gerada .ass-logo');
document.querySelectorAll('input[name="layout"]').forEach(radio =>
  radio.addEventListener('change', function() {
    const assinatura = document.getElementById('assinatura-gerada');
    assinatura.classList.remove('layout-default','layout-alt');
    assinatura.classList.add('layout-' + this.value);
    logoImg.src = this.value === 'alt'
      ? 'imagens/logo_jl.png'
      : 'imagens/logo_br.png';
  })
);

//Limpa os campos do formulário
function zerarCampos() {
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

