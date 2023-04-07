const template = document.createElement('template')
//insert template
template.innerHTML = `
  <!--       import component style-->
       <link rel="stylesheet" href="/components/inputSearch/inputSearch.css">
   <div>
     <input  type="search" class="cu-search-input" id="input-search-1">
     <button class="cu-search-btn">Search</button>
   </div>
`

//create class with component name extends HTMLElement
class inputSearch extends HTMLElement {
    constructor() {
        //call HTMLElement constructor
        super();
        //open shadow Dom
        this.attachShadow({mode: 'open'})
        //add template to shadow dom
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    //methods
    search() {
        this.shadowRoot.querySelector('li').addEventListener('click', function () {
            let main = document.getElementById('main');
        })
    }

    //Lifecycle method
    connectedCallback() {
        //set placeholder with props
        this.shadowRoot.getElementById('input-search-1').placeholder = this.getAttribute('placeHolder')
    }

    //get Attribute value
    static observedAttributes() {
        return ['placeHolder']
    }
}

export {inputSearch}