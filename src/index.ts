// import './scss/styles';
// import { MyComponent } from './components/my-component';
// import {PrincetonDesignCombobox} from "./components/puds-combobox";
import {PrincetonDesignAutocomplete} from "./components/autocomplete/puds-autocomplete";

// customElements.define('my-component', MyComponent);
// customElements.define('puds-combobox', PrincetonDesignCombobox);
customElements.define('puds-autocomplete', PrincetonDesignAutocomplete);
console.log("configured customElements")
