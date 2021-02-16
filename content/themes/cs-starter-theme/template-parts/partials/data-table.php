<?php
// get field data
$table_data = get_query_var('table-data');
?>
<table class="data-table">
    <?php foreach($table_data as $label => $content) : ?>
        <tr>
            <th><?php echo $label; ?></th>
            <td><?php echo empty( $content ) ? '-' : $content; ?></td>
        </tr>
    <?php endforeach; ?>
</table>
