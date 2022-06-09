//import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactToPrint,{PrintContextConsumer} from 'react-to-print';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class ComponentToPrint extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      poema:null, 
    }
  }

  fetchPoema = () =>{
    fetch("https://www.poemist.com/api/v1/randompoems")
    .then((response) => response.json())
    .then((data)=> { this.setState({poema:data[0]}); });
  }

  componentDidMount(){
    this.fetchPoema();
    console.log("poema: ",this.state.poema);
  }

  render() {
    return (
      
      <div style={{display: "flex",flexDirection: "column", justifyContent:"center", alignItenms:"center", }}>
        <center>
        <h1 style={{color: "#3388af", fontSize:"42px"}}>
              {this.state.poema?this.state.poema.title:""}
        </h1>
        </center>
        <center>
          <p style={{color:"#3388af"}}>
          By&nbsp;{this.state.poema?this.state.poema.poet.name:""}
          </p>
        </center>
        <center>
            <img src="https://picsum.photos/600/400" alt="Imagen Random" style={{maxWidth:"600px", maxHeigth:"400"}}></img>
        </center>
        <p style={{color:"#3388af", border:"100px solid #ffffff",}}>
        &nbsp;&nbsp;&nbsp;{this.state.poema?this.state.poema.content:""}
        </p>
        {/* <p>
          <Button color="danger" onClick={this.fetchPoema} >Actualizar</Button>
        </p> */}
      </div>
    );
  }
}


class App extends React.PureComponent {
  render(){
    return (
      <div>
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <>
              <h4>React a PDF</h4>
              Autor: L.I. Omar Esteban<br/>
              Contacto: mx.esteban@outlook.com<br/>
              <Button color="primary" onClick={handlePrint}>Imprimir</Button>
              &nbsp;&nbsp;
              <Button className="btn btn-danger" color="danger" onClick={() => window.location.reload()}>Nuevo Poema</Button>
              </>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default App;
