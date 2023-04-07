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
        this.shadowRoot.querySelector('li').addEventListener('click', function () {
            this.classList.add('active-item')
            let main = document.getElementById('main');
            main.innerHTML = ''
            main.innerHTML = `<co-search-input placeHolder="Search Music Name..."></co-search-input>`
        })
    }

    //Lifecycle method
    connectedCallback() {
        //set component value with Attribute
        this.shadowRoot.querySelector('span').innerHTML = this.getAttribute('search-value')
        this.search()
    }

    //get Attribute value
    static observedAttributes() {
        return ['search-value']
    }
}

export {Search}