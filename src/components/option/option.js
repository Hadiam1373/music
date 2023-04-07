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
            this.classList.add('active-item')
            let main = document.getElementById('main');
            main.innerHTML = ''
            for (let i = 0; i < 20; i++) {
                let div = document.createElement('div')
                div.innerHTML = `<co-card></co-card>`
                div.style.width = 'min-content'
                main.appendChild(div)
            }
        })
    }

    //Lifecycle method
    connectedCallback() {
        //set component value with Attribute
        this.shadowRoot.querySelector('span').innerHTML = this.getAttribute('option-value')
        let x = this.attributes[0].nodeValue;
        this.call()
    }

    //get Attribute value
    static observedAttributes() {
        return ['option-value']
    }
}

export {Option}