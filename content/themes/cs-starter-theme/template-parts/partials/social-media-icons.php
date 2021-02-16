<?php
// get data
$social_media_facebook_url  = get_field( 'social_media_facebook_url', 'options' );
$social_media_twitter_url   = get_field( 'social_media_twitter_url', 'options' );
$social_media_linkedin_url  = get_field( 'social_media_linkedin_url', 'options' );
$social_media_instagram_url = get_field( 'social_media_instagram_url', 'options' );
?>

<ul class="list list--social trailer--double">
    <?php if ( ! empty( $social_media_facebook_url ) ) : ?>
        <li><a target="_blank" href="<?php echo $social_media_facebook_url; ?>"><i class="fab fa-facebook-square"></i></a></li>
    <?php endif; ?>
    <?php if ( ! empty( $social_media_twitter_url ) ) : ?>
        <li><a target="_blank" href="<?php echo $social_media_twitter_url; ?>"><i class="fab fa-twitter-square"></i></a></li>
    <?php endif; ?>
    <?php if ( ! empty( $social_media_linkedin_url ) ) : ?>
        <li><a target="_blank" href="<?php echo $social_media_linkedin_url; ?>"><i class="fab fa-linkedin"></i></a></li>
    <?php endif; ?>
    <?php if ( ! empty( $social_media_instagram_url ) ) : ?>
        <li><a target="_blank" href="<?php echo $social_media_instagram_url; ?>"><i class="fab fa-instagram"></i></a></li>
    <?php endif; ?>
</ul>