// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
//import option component
import {Option} from "../components/option/option.js";
//import Card component
import {Card} from "../components/card/card";
//import search component
import {Search} from "../components/search/search";
//import search-input
import {inputSearch} from "../components/inputSearch/inputSearch";
//import productes
import {productes} from "../components/productes/productes";
//import lib-option
import {Lib} from "../components/lib-option/library";
//import router
import "../router/routes"

window.customElements.define('co-option', Option)
window.customElements.define('co-card', Card)
window.customElements.define('co-search', Search)
window.customElements.define('co-search-input', inputSearch)
window.customElements.define('co-productes', productes)
window.customElements.define('co-library', Lib)

