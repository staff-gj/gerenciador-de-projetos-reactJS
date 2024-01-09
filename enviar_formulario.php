<?php 
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","reactprojeto");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $nome_projeto = $_POST['nome_projeto'];
        $orcamento = $_POST['orcamento'];
        $categoria = $_POST['categoria'];
         
        $sql = "INSERT INTO projetos(nome_projeto, orcamento, categoria) VALUES('$nome_projeto','$orcamento','$categoria');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
        $conn->close();
    }
?>