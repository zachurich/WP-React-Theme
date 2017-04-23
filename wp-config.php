<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_playground');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Q1i4D9Ifn6S&w[XBQku!!nK7HwU0Lnix=/qLsYgYcx%=:>-6y5mlO%!BKUs`MLQ9');
define('SECURE_AUTH_KEY',  '.,~rHy5lb3X7WN/<0z[pZ`4/XwZG9IQ~Z8PIc)*e/2~_wb$1k_#Bz;$ s_`PoUnQ');
define('LOGGED_IN_KEY',    'NVZ2%O|Aj4yc7}b!i#VD^*{NF)|TNxw.<iepS#J.C||9EpHc234O3_ka4Q#~)M<i');
define('NONCE_KEY',        'z^,sw*SyHRl>!In1=q39/`0d+V6;@:[#M1_v3y(x. |A;R!w<=tV?aoE&PrzDzvf');
define('AUTH_SALT',        'ePvofQ;6b;bn+)7e{0XB4-Gkr!b>G LXyX(ZAasXm0bkbCoZ& 9H>pPSLZD[W[K]');
define('SECURE_AUTH_SALT', 'JcKA!!(oy|e> & o4()Cs4uTJfZh@+uk:w2o{qZAawngxz:i1b<R*wxWmsiS@m{R');
define('LOGGED_IN_SALT',   'tX!On^,1#a6I~xqxV6 A4i{?H!XBx>zO: Cx1R]:O7u<&B]0M14*vmU4>8]s3uPi');
define('NONCE_SALT',       'a 4UBiD5>Y%=D9vq7)3#d}.JoF??hiXS.1J/I}Mb<0gdEpn*5E)v&[r&ldB.x]Xr');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
