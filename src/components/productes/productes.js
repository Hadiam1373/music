import {getTopAlbum} from "../../api/apis/getTopAlbum";
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
        alert('dddddddd')


    }

    //Lifecycle method
    connectedCallback() {
        // console.log(r.data.topalbums.album)
        getTopAlbum().then(r => {
            let app = document.getElementById('app');
            console.log(r.data.topalbums.album.length)
            for (let i = 0; i < r.data.topalbums.album.length; i++) {
                let div = document.createElement('div')
                div.style.width = 'min-content'
                div.innerHTML = `<co-card data="${r.data.topalbums.album}"></co-card>`
                app.appendChild(div)
            }
        })
    }

    //get Attribute value
    static observedAttributes() {
        return ['props']
    }
}

export {productes}