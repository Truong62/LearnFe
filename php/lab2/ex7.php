<?php
function array_not_unique($my_array)
{
    $same = array();
    natcasesort($my_array);
    reset($my_array);

    $old_key = null;
    $old_value = null;

    foreach ($my_array as $key => $value) {
        if ($value === null) {
            $old_key = null;
            $old_value = null;
            continue;
        }

        if ($old_key === $key && $old_value === $value) {
            continue;
        }

        $same[$key] = $value;
        $old_key = $key;
        $old_value = $value;
    }

    return $same;
}
