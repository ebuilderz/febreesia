<?php global $ft_option; ?>

<!-- Navigation -->
<header id="header">
	<div class="navbar" role="navigation">
		<div class="secondary-nav <?php if ( $ft_option['site_top_strip'] == 0 ) { echo ' hide-strip'; } ?>">
			<div class="container">
				<div class="unpress-secondary-menu visible-lg visible-md">
                <?php
                // Pages Menu
				if ( has_nav_menu( 'secondary_menu' ) ) :
					wp_nav_menu( array (
						'theme_location' => 'secondary_menu',
						'container' => '',
						'container_class' => '',
						'menu_class' => 'page-nav nav nav-pills navbar-left',
						'menu_id' => 'secondary-nav',
						'depth' => 3,
						'walker' => new unpress_secondary_nav(),
						'fallback_cb' => false
					 ));
				 else:
					echo '<div class="navbar-left no-margin message warning"><i class="fa fa-exclamation-triangle"></i>' . __( 'Define your site secondary menu', 'favethemes' ) . '</div>';
				 endif;
                ?>
				</div>

                <?php 
				// Social Profiles
				if( $ft_option['top_social_profiles'] == 1 ) {
					get_template_part ( 'inc/social', 'media' ); 
				}
				?>
			</div><!-- .container -->
		</div><!-- .secondary-nav -->

		<div class="primary-nav <?php if($ft_option['unpress_sticky_nav'] == 1){ echo "unpress-sticky";}?> animated yamm">
			<div class="container">
				<div class="navbar-header">
					<div class="nav-open-wrap visible-xs visible-sm">
					    <a class="nav-btn navbar-toggle" id="nav-open-btn" href="#nav">
					    	<span class="sr-only"><?php _e("Toggle navigation","favethemes"); ?></span>
					    	<span class="icon-bar"></span>
					    	<span class="icon-bar"></span>
					    	<span class="icon-bar"></span>
					    </a>
					</div> 
                    <?php 
					// Get the logo
					if ( $ft_option['site_logo'] != '' ) { 
						$site_logo = $ft_option['site_logo'];
					} else { 
						$site_logo = get_template_directory_uri() . '/images/logo.png';
					}
					?>
					<a class="navbar-brand" href="<?php echo home_url( '/' ); ?>">
                    	<img width="" height="" src="<?php echo $site_logo; ?>" alt="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>" title="<?php bloginfo( 'name' ); ?> - <?php bloginfo( 'description' ); ?>"/>
                    </a>
				</div><!-- .navbar-header -->
				<div class="collapse navbar-collapse text-center animated visible-lg visible-md">
						<?php
						// Main Menu
						if ( has_nav_menu( 'main_menu' ) ) :
							wp_nav_menu( array (
								'theme_location' => 'main_menu',
								'container' => 'div',
								'container_class' => 'unpress-main-menu',
								'menu_id' => 'main-nav',
								'menu_class' => 'nav navbar-nav',
								'depth' => 2,
								'fallback_cb' => false,
								'walker' => new UnPress_Menu()
							 ));
						 else:
							echo '<div class="message warning"><i class="fa fa-exclamation-triangle"></i>' . __( 'Define your site main menu', 'favethemes' ) . '</div>';
						 endif;
						?>
					<?php get_search_form(); ?>
				</div><!--/.nav-collapse -->
			</div><!-- .container -->
		</div><!-- .primary-nav -->
	</div><!-- .navbar-fixed-top -->
</header><!-- #header -->