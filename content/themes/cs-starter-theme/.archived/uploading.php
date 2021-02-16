<?php

header( 'Content-type: application/json' );

function df_uploading() {

	$result             = array();
	$field              = acf_get_field( $_POST['field_name'] );
	$allowed_extensions = array_map( 'trim', explode( ',', $field['mime_types'] ) );
	$name               = 'files';

	for ( $i = 0; $i < count( $_FILES[ $name ]['name'] ); $i ++ ) {

		$file_name = $_FILES[ $name ]['name'][ $i ];
		$ext       = pathinfo( $file_name, PATHINFO_EXTENSION );

		if ( in_array( $ext, $allowed_extensions ) ) {
			$result[] = array(
				'type'    => 'success',
				'file'    => upload_multiple_files_to_wordpress_media_library( $name, $i ),
				'message' => 'Successfully uploaded file',
			);

		} else {
			$result[] = array(
				'type'    => 'error',
				'message' => 'File type ' . $ext . ' is not allowed',
				'file'    => array(
					'name' => $_FILES[ $name ]['name'][ $i ],
					'path' => ''
				)
			);
		}
	}

	die( json_encode( [
		'result' => $result,
		'count'  => count( $_FILES[ $name ]['name'] )
	] ) );
}

add_action( "wp_ajax_df_upload", "df_uploading" );
add_action( "wp_ajax_nopriv_df_upload", "df_uploading" );

/**
 * Upload multiple files to wordpress media library.
 *
 * @param string $name
 * @param int $index
 *
 * @return array
 */
function upload_multiple_files_to_wordpress_media_library( $name, $index = 0 ) {

	require_once( ABSPATH . 'wp-admin/includes/image.php' );

	$wordpress_upload_dir = wp_upload_dir();
	$upload_file          = wp_upload_bits( $_FILES[ $name ]['name'][ $index ], null, @file_get_contents( $_FILES[ $name ]['tmp_name'][ $index ] ) );
	$attachment_id        = - 1;
	$file_name            = basename( $upload_file['file'] );

	if ( ! $upload_file['error'] ) {

		$new_file_path = $wordpress_upload_dir['path'] . '/' . $file_name;
		$new_file_mime = mime_content_type( $_FILES[ $name ]['tmp_name'][ $index ] );

		$attachment_id = wp_insert_attachment( array(
			'guid'           => $new_file_path,
			'post_mime_type' => $new_file_mime,
			'post_title'     => preg_replace( '/\.[^.]+$/', '', $file_name ),
			'post_content'   => '',
			'post_status'    => 'inherit'
		), $new_file_path );

		// generate and save the attachment metas into the database
		wp_update_attachment_metadata( $attachment_id, wp_generate_attachment_metadata( $attachment_id, $new_file_path ) );
	}

	return array(
		'path'          => wp_get_attachment_image_src( $attachment_id, 'thumbnail' )[0],
		'name'          => $file_name,
		'attachment_id' => $attachment_id
	);
}
