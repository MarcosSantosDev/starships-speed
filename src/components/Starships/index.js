import React, { Component } from 'react';
import { GiStarfighter, GiSpaceship } from 'react-icons/gi'

import api from '../../services/api';

import './styles.css';

export default class Starships extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starships: [],
      starshipsInfo: {},
      pageCurrent: 1
    }
    
    this.calculateStops = this.calculateStops.bind(this);
    this.getStarships = this.getStarships.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  componentDidMount() {
    this.getStarships();
  }

  async getStarships(page = 1) {
    const { data } = await api.get(`/starships?page=${page}`);

    this.setState({
      starships: data.results,
      starshipsInfo: { ...data },
      pageCurrent: page
    });
  }

  calculateStops(MGLT) {
    const megaLigths = Number(MGLT)
    const megaLigthsProps = Number(this.props.megaLigths);

    if (!isNaN(megaLigths)) {
      if (this.props.calculate && megaLigthsProps > 0) {
        return parseInt(megaLigthsProps / megaLigths);
      }
    }

    return 0;
  }

  nextPage() {
    const { pageCurrent } = this.state;

    if (this.state.starshipsInfo.next != null) {
      this.getStarships(pageCurrent + 1);
    }
  }

  prevPage() {
    const { pageCurrent } = this.state;

    if (pageCurrent > 1) {
      this.getStarships(pageCurrent - 1);
    }
  }

  render() {
    const { starships, starshipsInfo, pageCurrent } = this.state;
    const {calculate, megaLigths} = this.props;

    const animation = (calculate && megaLigths > 0) ? 'starships__list--item-animation' : '';
    const hidden = starships.length > 0 ? 'hidden' : '';

    return (
      <div className="starships">
        <section className="starships__list">
          
          <div className="starships__title">
            <h3>Naves estelares</h3>
          </div>
          
          {
            starships.map((starship, index) => (
              <div id={index} key={index} className="starships__list--items">
                <div className={`${animation} starships__list--item`} >
                  <span className="starships__list--item-name" >{starship.name} </span>
                  <span className="starships__list--mega-ligth" > {this.calculateStops(starship.MGLT)} Paradas</span>
                </div>
                <div className="starships__list--icon">
                  <GiStarfighter fontSize={25} color="#DDD" />
                </div>
              </div>
            ))
          }

          <div className={`${hidden} starships__loading`}>
            <div className="starships__loading--icon">
              <GiSpaceship fontSize={25}/>
            </div>
            <span>Carregando naves..</span>
          </div>

          <div className="paginate">
            <div className="paginate__actions">
              <button disabled={pageCurrent === 1} onClick={this.prevPage} type="button" >Anterior</button>
              <button disabled={starshipsInfo.next === null || starships.length === 0} onClick={this.nextPage} type="button" >Próximo</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
