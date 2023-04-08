const template = document.createElement('template')
//insert template
template.innerHTML = `
  <!--       import component style-->
  <link rel="stylesheet" href="/components/lib-option/lib-option.css">
  
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
class Lib extends HTMLElement {
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
        this.shadowRoot.querySelector('span').innerHTML = this.getAttribute('value')
    }

    //get Attribute value
    static observedAttributes() {
        return ['value']
    }
}

export {Lib}