<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package cs_starter_theme
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<section id="comments" class="section section--comments">

	<?php if ( have_comments() ) : ?>
        <div class="trailer">
            <h2 class="comments-title">
                <?php
                $comment_count = get_comments_number();
                if ( 1 === $comment_count ) {
                    printf(
                        esc_html_e( 'One thought on &ldquo;%1$s&rdquo;', 'cs_starter_theme' ),
                        '<span>' . get_the_title() . '</span>'
                    );
                } else {
                    printf(
                        esc_html( _nx( '%1$s thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', $comment_count, 'comments title', 'cs_starter_theme' ) ),
                        number_format_i18n( $comment_count ),
                        '<span>' . get_the_title() . '</span>'
                    );
                }
                ?>
            </h2>
        </div>

		<?php the_comments_navigation(); ?>

        <div class="trailer">
            <ol class="comment-list">
                <?php
                    wp_list_comments( array(
                        'style'      => 'ol',
                        'short_ping' => true,
                    ) );
                ?>
            </ol>
        </div>

		<?php the_comments_navigation();

		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() ) : ?>
            <div class="trailer gutters">
			    <p class="no-comments">
                    <?php esc_html_e( 'Comments are closed.', 'cs_starter_theme' ); ?>
                </p>
            </div>
		<?php endif; ?>

	<?php endif;

	$post_id       = get_the_ID();
	$user          = wp_get_current_user();
	$user_identity = $user->exists() ? $user->display_name : '';

	// add some custom HTML and styling
	$args = array(
		'label_submit'       => __( 'Post Comment' ),
		'comment_field'      => '<div class="gutters trailer--half"><label class="label" for="comment">' . _x( 'Comment', 'noun' ) . ': </label><br /> <textarea class="input input--textarea" id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea></div>',
		'class_form'         => 'form form--comments',
		'class_submit'       => 'button button--submit',
		'title_reply_before' => '<div class="trailer--half gutters"><h3 class="title title--section">',
		'title_reply_after'  => '</h3></div>',
		'submit_button'      => '<div class="gutters trailer"><input name="%1$s" type="submit" id="%2$s" class="%3$s" value="%4$s" /></div>',
		'logged_in_as'       => '<p class="logged-in-as">' . sprintf(
				__( '<div class="gutters trailer--half"><a href="%1$s" aria-label="%2$s">Logged in as %3$s</a>. <a href="%4$s">Log out?</a>' ),
				get_edit_user_link(),
				esc_attr( sprintf( __( 'Logged in as %s. Edit your profile.' ), $user_identity ) ),
				$user_identity,
				wp_logout_url( apply_filters( 'the_permalink', get_permalink( $post_id ), $post_id ) )
			) . '</p></div>',
	);

    comment_form( $args ); ?>

</section>