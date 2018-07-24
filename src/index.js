// Loading the Promise Polyfill
import 'promise-polyfill/src/polyfill';

// Components
import Header from './components/header/header';

// Building the Interface
document.addEventListener( 'DOMContentLoaded', () => {
	Header();
} );