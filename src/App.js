import React, {  useState } from 'react';
import { Container, Form, Table } from 'react-bootstrap';

import SearchResults from './components/SearchResults';
import './App.css';


function App() {

  const [data,setData] = useState([]);
 

  const handleInputChangeInicio = (e) => {
    e.preventDefault();
    const {value} = e.target;

    if(!value) return;

    const url = `https://teste-supera.herokuapp.com/transferencias/?inicio=${value}`;

    fetch(url)
    .then((response) => response.json())
    .then((result)=> {
      setData(result.content);
    });
    console.log(value);

  }
  
  const handleInputChangeFim = (e2) => {
     e2.preventDefault();
    const {value} = e2.target;
    
    if(!value) return;

    const url = `https://teste-supera.herokuapp.com/transferencias/?termino=${value}`;

    fetch(url)
    .then((response) => response.json())
    .then((result)=> {
      setData(result.content);
    });
    console.log(value);

  }

  const handleInputChangeNome = (e3) => {
    e3.preventDefault();
    const {value} = e3.target;
    
    if(!value) return;

    const url = `https://teste-supera.herokuapp.com/transferencias/?nomeOperador=${value}`;

    fetch(url)
    .then((response) => response.json())
    .then((result)=> {
      setData(result.content);
    });
    console.log(value);
  }

  console.log(data);
  return (

    <Container>
      <Form className="formBusca">
        <div className="campo">
        <label htmlFor="inicio"> Data de Inicio</label>
        <input name="inicio" id="inicio" type="text" placeholder="DD/MM/AAAA" onChange={handleInputChangeInicio} />
        </div>

        <div className="campo">
        <label htmlFor="fim"> Data de Fim</label>
        <input name="fim" id="fim" type="text" placeholder="DD/MM/AAAA" onChange={handleInputChangeFim} />
        </div>

        <div className="campoNome">
        <label htmlFor="nomeOperador"> Nome Operador Transação</label>
        <input name="nomeOperador" id="nomeOperador" type="text"onChange={handleInputChangeNome}/>
        </div>
      </Form>

      <div className="valor">
      <thead>
        <tr className="labelTable">
         <th width="500"> - Saldo total: R$:</th>
          <td>xxxx,xx</td> 
         <th width="650" > - Saldo no Periodo: R$:</th>    
          <td>xxx,xx</td>
        </tr>
            <br/>
       </thead>
      </div>


      <div className="tabela">
    
          <Table>
            <thead>
              <tr>
                <th width="170">Data</th>
                <th width="170">Valor</th>
                <th width="170">Tipo</th>
                <th width="100">Nome operador transação</th>
              </tr>
            </thead>
          </Table>

          <div className="resultado">
          <SearchResults className="resultado" data={data} />
          </div>

      </div>

    </Container>
  );
}

export default App;