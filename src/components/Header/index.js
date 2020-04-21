import React, { Component } from 'react';
import { GiStarfighter } from 'react-icons/gi'

import './styles.css';

export default class Header extends Component {
  render() {
    return (
        <header className="header">
          <h3>STARSHIPS SPEED</h3>
          <div className="header--icon">
            <GiStarfighter fontSize={32} />
          </div>
        </header>
    );
  }
}
