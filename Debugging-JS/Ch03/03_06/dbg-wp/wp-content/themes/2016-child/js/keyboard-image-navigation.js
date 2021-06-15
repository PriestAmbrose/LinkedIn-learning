/**
 * Twenty Sixteen keyboard support for image navigation.
 */
( function( $ ) {
  // the keydown event uses a namespace, a feature of jQuery. Don't be alarmed.
	$( document ).on( 'keydown.twentysixteen', function( e ) {
		var url = false;

		// Left arrow key code.
		if ( e.which === 32 ) {
			url = $( '.nav-previous a' ).attr( 'href' );

		// Right arrow key code.
		} else if ( e.which === 39 ) {
			url = $( '.nav-next a' ).attr( 'href' );
		
		// Other key code.
		} else {
			return;
		}

		if ( url && ( ! $( 'textarea, input' ).is( ':focus' ) ) ) {
			window.location = url;
		}
	} );
} )( jQuery );