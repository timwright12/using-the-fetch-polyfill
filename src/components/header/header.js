const Header = () => {
	'use strict';

	fetch( '//csskarma.com/blog/wp-json/wp/v2/posts/1666' )
		.then( function( response ) {
			return response.json();
		} ).then( function( json ) {
			console.log( 'parsed json', json );
			document.getElementById( 'post' ).innerHTML = '<a href="' + json.link + '">' + json.link + '</a>';
		} ).catch( function( ex ) {
			console.log( 'parsing failed', ex );
		} );
	
};

export default Header;