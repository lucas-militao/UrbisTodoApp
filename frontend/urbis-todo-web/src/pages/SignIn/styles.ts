import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  justify-content: center;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 50%;

  form {
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      border-radius: 10px;
      height: 56px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background ${shade(0.2, '#fff')};
      }
    }
  }

  a {
      color: #959594;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#000')}
      }
    }
`;
