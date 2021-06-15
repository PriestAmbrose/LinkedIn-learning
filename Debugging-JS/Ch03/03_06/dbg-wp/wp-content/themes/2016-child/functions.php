<?php

// dequeue the built-in keyboard nav script, substituting mine.
function twentysixteen_child_scripts() {
	if ( is_singular() && wp_attachment_is_image() ) {
		wp_dequeue_script( 'twentysixteen-keyboard-image-navigation');
		wp_enqueue_script( 'twentysixteen-child-keyboard-image-navigation', get_stylesheet_directory_uri() . '/js/keyboard-image-navigation.js', array( 'jquery' ), '20160816' );
	}
}
add_action( 'wp_enqueue_scripts', 'twentysixteen_child_scripts', 100 );