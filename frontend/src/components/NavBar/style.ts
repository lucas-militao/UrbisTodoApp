import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 10px grey;

  .dropDownBtn {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    background: #fff;
    outline: none;
    border-radius: 50%;
    border: #000 solid 1px;
    padding: 10px;
    margin: 8px;
    cursor: pointer;
    transition: color 0.2s;
  }

  .dropDownBtn:hover {
    background-color: #fff;
    color: #a7a7a7;
    border-color: #a7a7a7;
  }

  .dropDownContent {
    display: none;
    position: absolute;
    background-color: #f6f6f6;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropDownContent a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    transition: color 0.2s;
  }

  .dropDownContent a:hover {
    color: #a7a7a7;
  }

  .dropDownBtn:hover .dropDownContent {
    display: block;
  }
`;
