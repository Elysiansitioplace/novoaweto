
function addProduct(productName, productPrice) {
    alert("Seu Produto Foi Adicionado ao Carrinho!")
    // Verifica se já existe um carrinho no localStorage
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Adiciona o produto ao carrinho
    cart.push({ name: productName, price: productPrice });

    // Atualiza o carrinho no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
}


//PAGINA DOIS

        // Obtém o carrinho do localStorage
        var cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Exibe os itens do carrinho e calcula o preço total
        var cartDetails = document.getElementById("cartDetails");
        if (cart.length > 0) {
            var totalPrice = 0;
            cartDetails.innerHTML = "<h2>Itens do Carrinho</h2><ul>";
            cart.forEach(function(item, index) {
            cartDetails.innerHTML += "<li>" + item.name + " - R$ " + item.price.toFixed(2) + " <button onclick='removeProduct(" + index + ")'>Remover</button></li>";
            totalPrice += item.price;
        });
            cartDetails.innerHTML += "</ul>";
            cartDetails.innerHTML += "<h3>Total: R$ " + totalPrice.toFixed(2) + "</h3>";
        } else {
            cartDetails.innerHTML = "<p>O carrinho está vazio.</p>";
        }
        
        function removeProduct(index) {
            // Remove o produto do carrinho pelo índice
            cart.splice(index, 1);
        
            // Atualiza o carrinho no localStorage
            localStorage.setItem("cart", JSON.stringify(cart));
        
            // Recarrega a página para atualizar a exibição
            location.reload();
        }

        function tudo(){
            alert("Estamos em Análise...");
        }
        