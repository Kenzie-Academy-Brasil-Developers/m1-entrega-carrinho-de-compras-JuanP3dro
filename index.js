const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]
    let body = document.querySelector('body')
    let tagMain = document.createElement("main")
    let tagSection = document.createElement("section")
    let titulo = document.createElement("h2")
    let tagUl = document.createElement("ul")
    let cabecalho = document.createElement('li')
    let tituloItem = document.createElement("p")
    let tituloValor = document.createElement("p")
    cabecalho.classList.add('cabecalho')
    body.appendChild(tagMain)
    tagMain.appendChild(tagSection)
    tagSection.appendChild(titulo)
    tagSection.appendChild(tagUl)
    tagUl.appendChild(cabecalho)
    cabecalho.appendChild(tituloItem)
    cabecalho.appendChild(tituloValor)
    titulo.innerText = "Virtual Market"
    tituloItem.innerText = 'Item'
    tituloValor.innerText = 'Valor'    

function createList (productsCart) {
    for (let i=0; i<productsCart.length; i++) {    
    let produto = document.createElement("li")
    let nomeProduto = document.createElement("p")
    let valorProduto = document.createElement("p")
    produto.classList.add('produto')
    produto.appendChild(nomeProduto)
    produto.appendChild(valorProduto)
    tagUl.appendChild(produto)
    nomeProduto.innerText = productsCart[i].name
    valorProduto.innerText = productsCart[i].price 
    }
}
createList (productsCart)

let soma = 0
for (let j = 0; j<productsCart.length; j++) {
    soma += productsCart[j].price
}
let finalLista = document.createElement('li')
let textoTotal = document.createElement("p")
let valorTotal = document.createElement("p")
let botao = document.createElement("button")
finalLista.classList.add('rodape')
textoTotal.innerText = 'Total'
valorTotal.innerText = soma
botao.innerText = 'Finalizar'
tagUl.append(finalLista, botao)
finalLista.append(textoTotal, valorTotal)
