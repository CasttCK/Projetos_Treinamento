import React from "react";

class ComponenteClasse extends React.Component {
  state = {
    nome: '',
  };  

  handleClick = () => {
      if(this.state.nome === 'Fulano'){
          this.setState({nome: ''})
      }else{
          this.setState({nome: 'Fulano'})
      }
  }

  componentDidMount(){
      console.log('Criou')
  }

  componentDidUpdate(){
      console.log('Atualizou')
  }

  componentWillUnmount(){
      console.log('Removeu')
  }

  render() {
      console.log("Renderizou")
      console.log(this.props)
    return (
        <>
            <div>Nome vindo de props {'=>'} {this.props.nome}</div>
            <div>Estado vindo de props {'=>'} {this.props.estado ? 'Verdadeiro' : 'Falso'}</div>
            <div>Objeto.nome vindo de props {'=>'} {this.props.objeto.nome}</div>
            <div>Objeto.idade vindo de props {'=>'} {this.props.objeto.idade}</div>
            <div>State do componente {'=>'} {this.state.nome}</div>
            <button onClick={this.handleClick}>Alterar state componente</button>
        </>
    );
  }
}

export default ComponenteClasse;
