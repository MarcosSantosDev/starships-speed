import React, { Component } from 'react';
import { GiStarfighter } from 'react-icons/gi'

import api from '../../services/api';

import './styles.css';

export default class Starships extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starships: []
    }
  }

  async componentDidMount() {
    const { data } = await api.get('/starships');

    this.setState({
      starships: data.results,
      starshipsInfo: { ...data }
    });
  }

  render() {
    const { starships } = this.state;
    const animation = 'starships__list--item-animation';

    return (
      <div className="starships">
        <section className="starships__list">
          {
            starships.map((starship, index) => (
              <div id={index} key={index} className="starships__list--items">
                <div className={`${animation} starships__list--item`} >
                  <span className="starships__list--item-name" >{starship.name}</span>
                  <span className="starships__list--mega-ligth" >0 Paradas</span>
                </div>
                <div className="starships__list--icon">
                  <GiStarfighter fontSize={25} color="#DDD"  />
                </div>
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}
