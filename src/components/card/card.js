const template = document.createElement('template')
//insert template
template.innerHTML = `
   <!--       import component style-->
   <link rel="stylesheet" href="/components/card/card.css">
   <div id="card" class="my-card">
     <div class="image-section" id="image-album"></div>
     <span class="title-name-album">Album Name:</span>
     <br/>
     <span id="name-album"></span>
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
        let name = this.getAttribute('name')
        let image = this.getAttribute('image')
        console.log(image)
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.getElementById('name-album').innerHTML = name
        this.shadowRoot.getElementById('image-album').style.backgroundImage = `url(${image})`;
    }

    //get Attribute value
    static observedAttributes() {
        return ['data']
    }
}

export {Card}