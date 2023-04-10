const template = document.createElement('template')
//insert template
template.innerHTML = `
    <!--       import component style-->
   <link rel="stylesheet" href="/components/option/option.css">
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
class Option extends HTMLElement {
    constructor() {
        //call HTMLElement constructor
        super();
        //open shadow Dom
        this.attachShadow({mode: 'open'})
        //add template to shadow dom
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    //methods
    call() {
        this.shadowRoot.querySelector('li').addEventListener('click', function () {
            window.location.href = 'http://127.0.0.1:8080/'
        })
    }

    //Lifecycle method
    connectedCallback() {
        let albums = []
        //set component value with Attribute
        this.shadowRoot.querySelector('span').innerHTML = this.getAttribute('option-value')
        this.call()
        let self = this.shadowRoot.querySelector('li')
        if (window.location.href === 'http://127.0.0.1:8080/') {
            self.classList.add('active-link')
        } else {
            self.classList.remove('active-link')
        }
    }

    //get Attribute value
    static observedAttributes() {
        return ['option-value']
    }
}

export {Option}