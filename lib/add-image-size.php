<?php

namespace UBC\Simple_Card_Block;

add_action( 'plugins_loaded', __NAMESPACE__ . '\ubc_card_block_add_image_size' );

/**
 * Add image size for block content
 * ubc_card_block_thumbnail
 *
 * @return void
 */
function ubc_card_block_add_image_size() {
    add_image_size( 'ubc_card_block_thumbnail', 600, 505, true );
}