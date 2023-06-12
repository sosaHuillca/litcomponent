
import Card from './components/card-simple.js'
import Boton from './components/boton-simple.js'

let url = './products.json'
fetch(url)
  .then(data => data.json())
  .then(data => {
    const fragment = new DocumentFragment()
    for(let product of data){
      const {
        id,
        name,
        color,
        ROM,
        price,
        modeName,
        modelNumber,
        size,
        camera,
        Description,
        productImage
      } = product

      const card = document.createElement('card-simple') 
      const boton = document.createElement('boton-simple') 
      card.setAttribute('id',id)
      card.setAttribute('name',name)
      card.setAttribute('productImage',productImage)
      card.setAttribute('price',price)

      boton.setAttribute('boton_id',id)
      boton.setAttribute('boton_title','comprar')
      boton.setAttribute('slot','boton')
      card.appendChild(boton)
      fragment.appendChild(card)
    }
    document.querySelector('main').appendChild(fragment)
  })
