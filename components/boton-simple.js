import Product from './product-card.js'
import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static get properties() {
    return {
      boton_id: { type: String },
      boton_title: { type: String}
    }
  }
  constructor() {
    super()
  }

  render() {
    return html`
    <button @click=${this._mostrar} data-id=${this.boton_id}>${this.boton_title}</button>
    `
  }
  
  static get styles() {
    return css`
    button{
    padding:5px;
    background-color: orange;
    border:none;
    border-radius:10px;
    color:white;
    min-width:70px;
    }
    `
  }

  _mostrar(){
    const productCard = document.querySelector('product-card')
    if(productCard)
      productCard.remove()
    let url = './products.json'//products/id
    fetch(url)
      .then(data => data.json())
      .then(data => {
        const {
          id,
          name,
          Description,
          productImage,
          price
        } = data.find(product => product.id == this.boton_id)

        const card = document.createElement('product-card') 
        card.setAttribute('id',id)
        card.setAttribute('name',name)
        card.setAttribute('productImage',productImage)
        card.setAttribute('Description',Description)
        card.setAttribute('price',price)

        document.querySelector('aside').appendChild(card)
      })
  }
}

export default customElements.define('boton-simple', MyElement)
