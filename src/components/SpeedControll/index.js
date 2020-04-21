import React, { Component } from 'react';
import Starships from '../../components/Starships';
import './styles.css';

class SpeedControll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      megaLigths: null
    }

    this.handleChangeMegaLigths = this.handleChangeMegaLigths.bind(this);
  }

  handleChangeMegaLigths(event) {
    console.log(event.target.value);
  }

  render() {
    const { megaLigths } = this.state;

    return (
      <div className="speedControll">
        <h2>Defina uma distancia e calcule <br/> 
          o total de paradas das naves</h2>
        <div className="speedControll__actions">
          <input type="text" onChange={this.handleChangeMegaLigths} value="0" />
          <button className="button" type="button" >Calcular paradas</button>
        </div>
        <Starships megaLigths={megaLigths} />
      </div>
    );
  };
}
export default SpeedControll;