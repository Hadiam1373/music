const template = document.createElement('template')
//insert template
template.innerHTML = `
  <!--       import component style-->
  <link rel="stylesheet" href="/components/productes/productes.css">
  
   <div>
<!--     component template -->
   </div>
`

//create class with component name extends HTMLElement
class productes extends HTMLElement {
    constructor() {
        //call HTMLElement constructor
        super();
        //open shadow Dom
        this.attachShadow({mode: 'open'})
        //add template to shadow dom
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    //methods
    createCart() {
        let app = document.getElementById('app');
        for (let i = 0; i < 20; i++) {
            let div = document.createElement('div')
            div.innerHTML = `<co-card></co-card>`
            div.style.width = 'min-content'
            app.appendChild(div)
        }

    }

    //Lifecycle method
    connectedCallback() {
        this.createCart()
    }

    //get Attribute value
    static observedAttributes() {
        return ['props']
    }
}

export {productes}