import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static get properties() {
    return {
      //count: { type: Number }
      id: { type: String },
      name: { type: String },
      color: { type: String },
      ROM: { type: String },
      price: { type: Number },
      modeName: { type: String },
      modelNumber: { type: String },
      size: { type: String },
      camera: { type: String },
      Description: { type: String },
      productImage: { type: String },
    }
  }
  constructor() {
    super()
  }

  render() {
    return html`
      <div id=${this.id}>
      <h3>${this.name}</h3>
      <img src='${this.productImage}'/>
      <p>$./ ${this.price}</p>
      <slot name='boton'></slot>
      </div>
    `
  }
  
  static get styles() {
    return css`
    img{
      width: 100%;
    }
    :host{
      background:#fff;
      display:block;
      margin:10px;
      border-radius:10px;
    padding:10px;
    }
    `
  }

}

export default customElements.define('card-simple', MyElement)
