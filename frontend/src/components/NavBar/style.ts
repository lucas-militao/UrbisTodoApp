import styled from 'styled-components';

export const Container = styled.div`
  background-color: #737373;

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
  }

  .dropdown-content a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  a {
    float: left;
    color: black;
    padding: 12px 14px;
    text-decoration: none;
    font-size: 17px;
    transition: color 0.2s;
  }

  a:hover {
    color: #f2f2f2;
  }

  a.dropbtn {
    margin: 8px;
    width: 40px;
    height: 40px;
    border-color: #000;
    border: 1px solid;
    border-radius: 50%;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
