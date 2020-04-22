import React, { Component } from 'react';
import Starships from '../../components/Starships';
import './styles.css';

class SpeedControll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      megaLigths: '',
      calculate: false
    }

    this.handleChangeMegaLigths = this.handleChangeMegaLigths.bind(this);
    this.handleChangeCalculate = this.handleChangeCalculate.bind(this);
  }

  handleChangeMegaLigths(event) {
    const value = event.target.value.replace(/\+|-/ig, '');
    this.setState({ megaLigths: value, calculate: false });
  }

  handleChangeCalculate(event) {
    this.setState({ calculate: true });
  }

  render() {
    const { megaLigths, calculate } = this.state;

    return (
      <div className="speedControll">
        <div className="speedControll__panel">
          <h2>Calcule o total de paradas das naves estelares</h2>
          <div className="speedControll__actions">
            <input
              id="megaLigth"
              name="megaLigth"
              type="number"
              min="0"
              placeholder="Informe a distância em mega ligths"
              value={megaLigths}
              onChange={this.handleChangeMegaLigths}
            />
            <button
              className="button"
              type="button"
              onClick={this.handleChangeCalculate}
            >Calcular paradas</button>
          </div>
        </div>
        <Starships megaLigths={megaLigths} calculate={calculate} />
      </div>
    );
  };
}
export default SpeedControll;