<li class="col-xs-12 col-sm-6 col-md-3 trailer" id="post-<?php the_ID(); ?>">

    <article class="tile__wrapper">

        <header class="tile__header center-xs leader-inside">
            <a class="tile__title trailer--half" href="<?php echo get_permalink(); ?>">
                <h2 class="title-h2"><?php the_title(); ?></h2>
            </a>
        </header>

        <div class="tile__content">

            <a class="is-block trailer--half" href="<?php echo get_permalink(); ?>">
                <figure class="tile__thumb" style="background-image: url('<?php echo get_the_post_thumbnail_url(); ?>');">
                    <img class="is-hidden" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="">
                </figure>
            </a>

            <div class="tile__category trailer">
                <?php
                $categories = cs_get_categories( get_the_ID(), 'case' );
                if ( ! empty( $categories ) && is_array( $categories ) ) : ?>
	                <?php echo cs_get_tag_list_links( $categories ); ?>
                <?php endif; ?>
            </div>

            <div class="tile__excerpt trailer-outside">
                <?php the_content(); ?>
            </div>

            <div class="center">
                <a class="button softest" href="<?php echo get_permalink(); ?>"><?php echo __( 'Read more', 'cs-starter-theme' ); ?></a>
            </div>

        </div>

    </article>

</li>