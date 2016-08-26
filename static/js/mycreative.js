(function($) {
    "use strict"; // Start of use strict

	// Text specific animations
	$( "#about .text-faded p" ).mouseenter( function( e ) {
		$( this ).stop().fadeTo( "slow", 1 );
	} ).mouseleave( function( e ) {
		$( this ).stop().fadeTo( "slow", 0.2 );
	} ).click( function( e ) {
		$( "#about .text-faded p" ).stop().fadeTo( "fast", 0.2 );
		$( this ).stop().fadeTo( "slow", 1 );
	} ).fadeTo( "fast" , 0.2 ).first().stop().fadeTo( "fast", 1 );

})(jQuery); // End of use strict
