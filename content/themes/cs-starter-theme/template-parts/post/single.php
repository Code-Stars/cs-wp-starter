<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cs_starter_theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('post post--single'); ?>>

    <header class="post__poster trailer-outside--double" style="background-image: url('<?php echo get_the_post_thumbnail_url(null, 'original' ); ?>');">

        <div class="content-wrapper content-wrapper--large">

            <div class="row">
                <div class="col-xs-12">

                    <h1 class="post__title title-h1 leader trailer--half">
                        <?php echo get_the_title();?>
                    </h1>

                    <div class="post__posted-on trailer">
                        <?php cs_posted_on(); ?>
                    </div>

                </div>
            </div>
        </div>

        <footer class="post__entry-footer">
            <div class="content-wrapper content-wrapper--large right">
		        <?php cs_entry_footer(); ?>
            </div>
        </footer>

    </header>

    <div class="content-wrapper content-wrapper--large trailer">
        <div class="row">

            <div class="post__content col-xs-12 trailer">
                <?php the_content(); ?>
            </div>

        </div>
    </div>

</article><!-- #post-<?php the_ID(); ?> -->
