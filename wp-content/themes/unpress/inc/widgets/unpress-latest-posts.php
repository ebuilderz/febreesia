<?php
/*
 * Plugin Name: Latest Posts
 * Plugin URI: http://favethemes.com/
 * Description: A widget that shows latest posts slider or list
 * Version: 1.0
 * Author: Waqas Riaz
 * Author URI: http://favethemes.com/
 */
 
class unpress_latest_posts extends WP_Widget {
	
	
	/**
	 * Register widget
	**/
	public function __construct() {
		
		parent::__construct(
	 		'unpress_latest_posts', // Base ID
			__( 'UnPress: Latest Posts', 'favethemes' ), // Name
			array( 'description' => __( 'Show latest posts list or slider', 'favethemes' ), ) // Args
		);
		
	}

	
	/**
	 * Front-end display of widget
	**/
	public function widget( $args, $instance ) {
				
		extract( $args );

		$title = apply_filters('widget_title', $instance['title'] );
		$items_num = $instance['items_num'];
		$rest = $instance['widget_type'];
		$widget_type = isset( $instance['widget_type'] ) ? $instance['widget_type'] : false;
		
		echo $before_widget;
			
			
			if ( $title ) echo $before_title . $title . $after_title;
            ?>
            
            <?php
			/** 
			 * Latest Posts
			**/
			global $post;
			$unpress_latest_posts = new WP_Query(
				array(
					'post_type' => 'post',
					'posts_per_page' => $items_num
				)
			);
			?>
            
            
			<div class="widget-content">
		
                
                <?php if($widget_type=="slider"):?>
                
                <div class="latest-post-carousel">
				
                        <div class="latest-post-gallery-carousel-arrows">
                            <a href="#" class="latest-post-gallery-carousel-prev"><i class="fa fa-angle-left"></i></a>
                            <a href="#" class="latest-post-gallery-carousel-next"><i class="fa fa-angle-right"></i></a>
                        </div>
                    
                        <div class="widget-latest-post-carousel">
                        <?php while ( $unpress_latest_posts->have_posts() ) : $unpress_latest_posts->the_post(); ?>
                            <?php if ( '' != get_the_post_thumbnail() ) {?>
                                <div class="slide">
                                    <a href="<?php the_permalink(); ?>">
                                        <span class="gallery-carousel-slide-title"><?php the_title(); ?></span>
                                        <?php the_post_thumbnail('widget-slider', array( 'class'	=> "gallery-carousel-slide-image")); ?>
                                    </a>
                                </div>
                            <?php } ?>
                        <?php endwhile; ?>
						<?php wp_reset_query(); ?>
                    </div>
                
                
                </div>
                
				<?php else: ?>
                
                <?php while ( $unpress_latest_posts->have_posts() ) : $unpress_latest_posts->the_post(); ?>
                
                <div class="latest-post">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_post_thumbnail("widget-slider"); ?>
                    </a>
                    <div class="latest-post-body">
                        <h4 class="heading"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                        
                    </div>
                </div>
                
				<?php endwhile; ?>
				<?php wp_reset_query(); ?>
               
			   <?php endif; ?>
               
               
            </div><!-- .widget-content -->

	    <?php 
		echo $after_widget;
		
	}
	
	
	/**
	 * Sanitize widget form values as they are saved
	**/
	public function update( $new_instance, $old_instance ) {
		
		$instance = array();

		/* Strip tags to remove HTML. For text inputs and textarea. */
		$instance['title'] = strip_tags( $new_instance['title'] );
		$instance['items_num'] = strip_tags( $new_instance['items_num'] );
		$instance['widget_type'] = $new_instance['widget_type'];
		
		return $instance;
		
	}
	
	
	/**
	 * Back-end widget form
	**/
	public function form( $instance ) {
		
		/* Default widget settings. */
		$defaults = array(
			'title' => 'Latest Posts',
			'items_num' => '3',
			'widget_type' => 'slider'
		);
		$instance = wp_parse_args( (array) $instance, $defaults );
		
	?>
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e('Title:', 'favethemes'); ?></label>
			<input type="text" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo $instance['title']; ?>" class="widefat" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'items_num' ); ?>"><?php _e('Maximum posts to show:', 'favethemes'); ?></label>
			<input type="text" id="<?php echo $this->get_field_id( 'items_num' ); ?>" name="<?php echo $this->get_field_name( 'items_num' ); ?>" value="<?php echo $instance['items_num']; ?>" size="1" />
		</p>
        <p>            
        	<input type="radio" id="<?php echo $this->get_field_id( 'slider' ); ?>" name="<?php echo $this->get_field_name( 'widget_type' ); ?>" <?php if ($instance["widget_type"] == 'slider') echo 'checked="checked"'; ?> value="<?php _e('slider', 'favethemes'); ?>" />
            <label for="<?php echo $this->get_field_id( 'slider' ); ?>"><?php _e( 'Display posts as Slider', 'favethemes' ); ?></label><br />
            
			<input type="radio" id="<?php echo $this->get_field_id( 'entries' ); ?>" name="<?php echo $this->get_field_name( 'widget_type' ); ?>" <?php if ($instance["widget_type"] == 'entries') echo 'checked="checked"'; ?> value="<?php _e('entries', 'favethemes'); ?>" />
            <label for="<?php echo $this->get_field_id( 'entries' ); ?>"><?php _e( 'Display posts as List', 'favethemes' ); ?></label>
        </p>
	<?php
	}

}
register_widget( 'unpress_latest_posts' );