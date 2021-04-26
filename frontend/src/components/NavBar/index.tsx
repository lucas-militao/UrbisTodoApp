import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Container } from './style';

const NavBar: React.FC = () => {
  return (
    <Container className="topNav">
      <div className="dropdown">
        <a className="dropbtn" href="#home">
          <FiUser size={14} />
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default NavBar;
