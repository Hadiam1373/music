// Import our custom CSS
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
//import option component
import {Option} from "../components/option/option.js";
//import Card component
import {Card} from "../components/card/card";
//import search component
import {Search} from "../components/search/search";
//import search-input
import {inputSearch} from "../components/inputSearch/inputSearch";

window.customElements.define('co-option', Option)
window.customElements.define('co-card', Card)
window.customElements.define('co-search' , Search)
window.customElements.define('co-search-input' , inputSearch)
