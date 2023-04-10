const template = document.createElement('template')
//insert template
template.innerHTML = `
   <!--       import component style-->
   <link rel="stylesheet" href="/components/card/card.css">
   <div id="card" class="my-card">
     <h1>component</h1>
   </div>
`

//create class with component name extends HTMLElement
class Card extends HTMLElement {
    constructor() {
        //call HTMLElement constructor
        super();
    }

    //Lifecycle method
    connectedCallback() {
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('h1').innerHTML = this.getAttribute('data')
    }

    //get Attribute value
    static observedAttributes() {
        return ['data']
    }
}

export {Card}