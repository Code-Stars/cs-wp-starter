<?php
/**
 * The template for displaying a "No posts found" message
 *
 * @package cs_starter_theme
 */
?>

<article id="post-0" class="post no-results not-found">

    <header class="entry-header trailer">
        <h1 class="post__title title title--page"><?php _e( 'Nothing Found', 'cs-starter-theme' ); ?></h1>
    </header>

    <div class="post__content">
        <p><?php _e( 'Apologies, but no results were found. Perhaps searching will help find a related post.', 'cs-starter-theme' ); ?></p>
		<?php get_search_form(); ?>
    </div>

</article>