const template = document.createElement('template')
//insert template
template.innerHTML = `
       <!--       import component style-->
       <link rel="stylesheet" href="/components/search/search.css">
   <div>
     <li id="list" class="cu-list">
   <!--    use slot to show icon-->
         <slot name="icon"></slot>
         <div class="div-span">
           <span class="span-li"></span>
         </div>
     </li>
   </div>
`

//create class with component name extends HTMLElement
class Search extends HTMLElement {
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
        this.shadowRoot.querySelector('li').addEventListener('click',  function () {
           window.location.href = 'http://127.0.0.1:8080/search'
        })
    }


    //Lifecycle method
    connectedCallback() {
        //set component value with Attribute
        this.shadowRoot.querySelector('span').innerHTML = this.getAttribute('search-value')
        this.search()
        let self = this.shadowRoot.querySelector('li')
        if (window.location.href === 'http://127.0.0.1:8080/search') {
            self.classList.add('active-link')
        } else {
            self.classList.remove('active-link')
        }
    }

    //get Attribute value
    static observedAttributes() {
        return ['search-value']
    }
}

export {Search}