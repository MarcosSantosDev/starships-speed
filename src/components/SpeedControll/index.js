import React, { Component } from 'react';
import Starships from '../../components/Starships';
import './styles.css';

class SpeedControll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      megaLigths: 0,
      calculate: false
    }

    this.handleChangeMegaLigths = this.handleChangeMegaLigths.bind(this);
    this.handleChangeCalculate = this.handleChangeCalculate.bind(this);
  }

  handleChangeMegaLigths(event) {
    this.setState({ megaLigths: event.target.value, calculate: false });
  }

  handleChangeCalculate(event) {
    this.setState({ calculate: true });
  }

  render() {
    const { megaLigths, calculate } = this.state;

    return (
      <div className="speedControll">
        <div className="speedControll__panel">
          <h3>Calcule o total de paradas das naves em uma determinada distancia</h3>
          <div className="speedControll__actions">
            <input type="text"  placeholder="Adicione a distância" onChange={this.handleChangeMegaLigths} />
            <button className="button" type="button" onClick={this.handleChangeCalculate} >Calcular paradas</button>
          </div>
          </div>
        <Starships megaLigths={megaLigths} calculate={calculate} />
      </div>
    );
  };
}
export default SpeedControll;