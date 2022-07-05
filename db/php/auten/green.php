<?php

include '../db/init_connection.php';

$getestacoes = "SELECT est_name, est_line,  ST_AsGeoJSON(est_geometry) as est_geometry FROM estacoes WHERE est_line LIKE '%Verde%'";

$result = pg_query($getestacoes);

if($result)
{
    $result_array = pg_fetch_all($result);


    echo json_encode($result_array);
}
else
{
    printf("Error message: %s\n", pg_result_error($conn));
}

?>