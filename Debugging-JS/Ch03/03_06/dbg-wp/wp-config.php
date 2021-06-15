<?php

// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbgjs_wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         'u?Xn.dyiq&eQ_/2FG$%TPh<)y|3CaoL5zEedMYtiYPioj3(SFMXRb`wJ:O?8/GFr');
define('SECURE_AUTH_KEY',  '(Qm`f[NM74b-5JLwL]K .Aq2;{cuY_O.@vsDdFI0M8$GT`)DJ!|XAs.H[eGYa`Yi');
define('LOGGED_IN_KEY',    '35n@LD?e>j8=SpneU8}`nt?fWapZHsOhnn#5s-B=TB.,ZC=##(y392dO1qwWwwF!');
define('NONCE_KEY',        '()y4}( Z_c/W_Nk9NBftL~H@cp=!E^NZOf0_Xy6w%o6<We%2U~.(++dKi.(ag+$C');
define('AUTH_SALT',        ' qPTIdmMg~X/q~U--q;==J.n*&Z(_`|%cl)0d]yTF(j[|<+S* ci{?%H}M@aiw) ');
define('SECURE_AUTH_SALT', '(p{aA-**+2_;SfH2THYT|Z04(a%mjkq%o,+2+rgdawTa]_&Q~&J((K[juBg$Kl7~');
define('LOGGED_IN_SALT',   '+G C/R=56I;~u!4}_iqL{&CywT9]PEK{M@m*~7_&4>D3p}JB9#X#12O&iQy]@Ep+');
define('NONCE_SALT',       'XZ*]mwj49<ei0cB8C2eCH/.j4l}OzX ^[H v6A)dqQ.9+UOa?Y{5|<k^w;d}ZVKX');


$table_prefix = 'dbgjs_';

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
