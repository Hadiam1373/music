const template = document.createElement('template')
//insert template
template.innerHTML = `
  <!--       import component style-->
  <link rel="stylesheet" href="/components/...">
  
   <div>
<!--     component template -->
   </div>
`

//create class with component name extends HTMLElement
class Sample extends HTMLElement {
    constructor() {
        //call HTMLElement constructor
        super();
        //open shadow Dom
        this.attachShadow({mode: 'open'})
        //add template to shadow dom
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    //methods
    method() {

    }

    //Lifecycle method
    connectedCallback() {
    }

    //get Attribute value
    static observedAttributes() {
        return ['props']
    }
}

export {Sample}