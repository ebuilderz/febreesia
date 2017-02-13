<?php 
/**
 * Code Box
 * Page Composer Section
 *
 * @package UnPress
 * @since 	UnPress 1.0
**/
?>

<section class="container module advertising">
	<div class="row">
		
        <?php /*?><?php if( get_sub_field( 'code_box_title' ) ): ?>
		<div class="col-lg-3 col-md-3 col-sm-4 sticky-col">
			<div class="category-box sticky-box static_col">
                 <h2><?php the_sub_field( 'code_box_title' ); ?></h2>
            </div>
		</div>
        <?php endif; ?><?php */?>
        
        <div class="col-lg-12 col-md-12 col-sm-12">
			<div class="row post-row">
				
				<?php the_sub_field( 'code_box_source' ); ?>
							
			</div><!-- .row -->
		</div><!-- .col-lg-9 -->
        
      </div><!-- .row -->
</section><!-- .container -->