import fetchProfileData from "./api.js";

async function carregar() {
  const dados = await fetchProfileData();
  const container = document.getElementById("container-direita");

  // Limpa qualquer conteúdo antigo
  container.innerHTML = '';

  dados.lista.forEach(item => {
    const cardHTML = `
      <div class="card">
        <div class="col-imagem">
          <img src="dados/${item.img.slice(2)}" alt="${item.title}">
        </div>
        <div class="col-texto">
            <p class="destaque">${item.title}</p>
            <p class="txt-direita">${item.dio}</p>
            <p class="txt-direita">${item.view}</p>
            <p class="txt-direita">${item.transmissao}</p>
        </div>
      </div>
    `;

    container.innerHTML += cardHTML;
  });
}

carregar();