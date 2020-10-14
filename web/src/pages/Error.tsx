import React from 'react';
import logoImg from '../images/logoError.svg';
import Home from '../images/Home.svg';

import {Link} from 'react-router-dom';

import { FiAlertCircle } from 'react-icons/fi';
import '../styles/pages/Error.css';

const pages: React.FC = () => {
  return (
    <div id="page-error">

      <div className="content-wrapper">

        <div className="header">
          <img src={logoImg} alt="Happylogo" />
          <div className="content">
            <h1>404... Ooops! Essa página não foi encontrada, retorne para a Home</h1>

            <div className="backToHome">
              <h3>Tente voltar para a Home</h3>
              <Link to="/" className="enterApp" >
                  <img src={Home} alt="Happylogo" />
              </Link>
            </div>
          </div>
        </div>

        <FiAlertCircle />
      </div>

      
    </div>
  )
}

export default pages;