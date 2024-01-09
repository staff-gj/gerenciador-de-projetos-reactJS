<?php
// permite solicitações de qualquer origem
header("Access-Control-Allow-Origin: *");
// define o tipo de conteúdo como JSON
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "reactprojeto");

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else {
    $sql = "SELECT * FROM projetos";
    $res = mysqli_query($conn, $sql);

    if ($res) {
        $dados = array();
        while ($row = mysqli_fetch_array($res)) {
            $dados[] = $row;
        }
        echo json_encode($dados);
    } else {
        echo "Error!";
    }
    $conn->close();
}

?>
