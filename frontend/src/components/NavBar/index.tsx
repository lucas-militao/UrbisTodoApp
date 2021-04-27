import React from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi';
import { Container } from './style';

const NavBar: React.FC = () => {
  return (
    <Container className="topNav">
      <a href="#" className="dropDownBtn">
        <FiUser className="userIcon" />

        <div className="dropDownContent">
          <a href="#">
            Sign out <FiLogOut />
          </a>
        </div>
      </a>
    </Container>
  );
};

export default NavBar;
