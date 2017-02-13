<?php 
/**
 * Featured Posts Masonry
 * Page Composer Section
 *
 * @package UnPress
 * @since 	UnPress 1.0
**/
global $tf_option;


$posts_per_page = get_sub_field("featured_number_of_posts");

global $query_string;
	$args = array(
		'posts_per_page'  => $posts_per_page,
		'meta_key'        => 'make_featured',
		'meta_value'      => '1',
		'post_type'       => 'post',
		'post_status'     => 'publish'
	);
query_posts( $args );
?>

<section class="container module masonry">
	<div class="row">
    <?php 
	if(!get_sub_field( 'featured_section_title_position' ) || get_sub_field( 'featured_section_title_position' )=="left_side"):
			$class_box_title = "title-box-left";
	elseif(get_sub_field( 'featured_section_title_position' )=="right_side"):
			$class_box_title = "title-box-right";
	endif; ?>
	
	<div class="col-lg-3 col-md-3 col-sm-4 sticky-col <?php echo $class_box_title; ?>">
		<div class="category-box sticky-box static_col">
			<?php if( get_sub_field( 'featured_main_title' ) ): ?>
					<h2><?php the_sub_field( 'featured_main_title' ); ?></h2>
			<?php endif; ?>
			<?php if( get_sub_field( 'featured_sub_title' ) ): ?>
			<p><?php the_sub_field( 'featured_sub_title' ); ?></p>
			<?php endif; ?>
		</div>
	</div>
            
			<div class="col-lg-9 col-md-9 col-sm-8">
			<div class="row post-row">
				
				<?php 
					if (have_posts()) :
                        while (have_posts()) : the_post(); 
						
							get_template_part( 'post-format/masonry', get_post_format() );
            
                    	endwhile; 
                endif;
				wp_reset_query();
                ?> 
							
			</div><!-- .row -->
		</div><!-- .col-lg-9 -->
        
	</div><!-- .row -->
</section><!-- .container -->