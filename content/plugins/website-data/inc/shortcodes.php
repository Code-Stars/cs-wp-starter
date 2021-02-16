<?php

function list_vacancies_shortcode( $params = array() ) {
	ob_start();

	$html      = '<div class="leader--double">';
	$html      .= '<ul class="list list--vacancies trailer">';
	$vacancies = get_vacancies();

	foreach ( $vacancies as $vacancy ) {
		$html .= '<li><a href="' . get_permalink( $vacancy->ID ) . '">' . strip_tags( $vacancy->post_title ) . '</a></li>';
	}

	$html .= '</ul></div>';

	echo $html;

	return ob_get_clean();
}

add_shortcode( 'list-vacancies', 'list_vacancies_shortcode' );
