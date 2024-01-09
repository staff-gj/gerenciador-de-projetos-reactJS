import NavBar from "../layout/NavBar";
import styles from './Projects.modules.css'
import axios from 'axios';  
import { useEffect, useState } from "react";
import carregamento from '../../img/loading.svg'

export default function Projects(){
    const [dados, setDados] = useState('')
    const [id, setId] = useState('')

    useEffect(()=>{
        axios.get('http://localhost/backend/recebe_dados.php')
        .then(response => {
            setDados(response.data)
          console.log(response.data);
        })
        .catch(error => {
          console.error('Erro ao obter os dados:', error);
        });      
    }, [])

    function apagarProjeto(id){

        const url = 'http://localhost/backend/apagar_projeto.php';
        let fData = new FormData();
  
        fData.append('id_projeto', id)
  
        axios.post(url, fData).then(response=> console.log(response.data)).catch(error=> alert(error));
        window.location.reload(false);
    }

    return(
        <div >
            <NavBar/>
            <div className="projetos">
                <h1>Seus <span>projetos</span> estão aqui!</h1> 
                <div className="dados">
                    {
                        dados.length > 0 ?(
                            dados.map((dado, index)=>(
                                <div className="estilos_div" key={index}>
                                    <p onClick={()=> setId(dado.id)}>{dado.id}</p>
                                    <h2>{dado.nome_projeto}</h2>
                                    <h4>{dado.orcamento}</h4>
                                    <p>{dado.categoria}</p><br /><br />
                                    <button className="btn_apagar" onClick={() => apagarProjeto(dado.id)}>Apagar Projeto</button><br /><br />
                                </div>
                            ))
                        ) : (
                            <img src={carregamento} alt='carregamento'/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}