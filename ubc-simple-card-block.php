<?php
/**
 * Plugin's bootstrap file to launch the plugin.
 *
 * @package     UBC\Simple_Card_Block
 * @author      CTLT
 * @license     GPL2+
 *
 * @wordpress-plugin
 * Plugin Name: UBC Simple Card Block
 * Plugin URI:  https://ctlt.ubc.ca
 * Description: A card block with title, and hidden/hoverable description text.
 * Version:     1.0
 * Author:      CTLT
 * Author URI:  https://ctlt.ubc.ca
 * Text Domain: ubccardblock
 * Domain Path: /languages
 * License:     GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

namespace UBC\Simple_Card_Block;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 * @since  2.1.0
 * @ignore
 * @access private
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
require __DIR__ . '/lib/enqueue-scripts.php';
require __DIR__ . '/lib/add-image-size.php';
