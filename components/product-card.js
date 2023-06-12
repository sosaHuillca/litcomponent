import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      Description: { type: String },
      productImage: { type: String },
      price: { type: String },
    }
  }
  constructor() {
    super()
    //this.count = 0
  }

  render() {
    return html`
      <div id=${this.id}>
      <h3>${this.name}</h3>
      <img src='${this.productImage}'/>
      <p>$./ ${this.Description}</p>
      </div>
    `
  }
  
  static get styles() {
    return css`
    img{
      width: 100%;
    }
    :host{
      background:green;
      display:block;
      margin:10px;
      border-radius:10px;
    padding:10px;
    }
    `
  }
}

export default customElements.define('product-card', MyElement)
