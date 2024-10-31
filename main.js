let total = 0;
const carrinho = [];

function adicionarAoCarrinho(item, preco) {
    carrinho.push({ item, preco });
    total += preco;
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    total -= carrinho[index].preco; 
    carrinho.splice(index, 1); 
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';
    
    carrinho.forEach((produto, index) => {
        const li = document.createElement('li');
        li.textContent = `${produto.item} - R$${produto.preco.toFixed(2)}`;

        const buttonRemover = document.createElement('button');
        buttonRemover.textContent = 'Remover';
        buttonRemover.onclick = () => removerDoCarrinho(index); 

        li.appendChild(buttonRemover); 
        listaCarrinho.appendChild(li);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

