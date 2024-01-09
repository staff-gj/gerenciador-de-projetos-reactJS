import { useState } from 'react';
import styles from './ProjectForm.modules.css'
import axios from 'axios';

export default function ProjectForm() {
  const [nomeProjeto, setNomeProjeto] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [categoria, setCategoria] = useState('');

  function enviarFormulario(event){

    event.preventDefault()

    if(nomeProjeto.length <=  0){
      alert("faltou o nome do projeto!")
    } else if(orcamento.length <= 0){
      alert("Faltou o orcamento do projeto!")
    }else if(categoria.length <= 0){
      alert("Faltou selecionar a categoria")
    }else if(categoria == 'Selecione a categoria'){
      alert("Valor incorreto!")}
     else{
      const url = 'http://localhost/backend/enviar_formulario.php';
      let fData = new FormData();

      fData.append('nome_projeto', nomeProjeto)
      fData.append('orcamento', orcamento)
      fData.append('categoria', categoria)

      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));

      console.log(nomeProjeto)
      console.log(orcamento)
      console.log(categoria)
      window.location = '/home'
    }

  }

  return (
    <form className='form'>
      <div>
        <input
          type="text"
          placeholder="Insira o nome do projeto"
          value={nomeProjeto}
          onChange={(e) => setNomeProjeto(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Insira o orçamento total"
          value={orcamento}
          onChange={(e) => setOrcamento(e.target.value)}
        />
      </div>
      <div>
        <select defaultValue="" onChange={(e) => setCategoria(e.target.value)}>
            <option >Selecione a categoria</option><br />
            <option value="Imovel">Imovel</option>
            <option value="Veicular">Veicular</option>
            <option value="Outros">Outros</option>
        </select>
      </div>
      <button type="submit" onClick={enviarFormulario}>Enviar</button>
    </form>
  );
}
