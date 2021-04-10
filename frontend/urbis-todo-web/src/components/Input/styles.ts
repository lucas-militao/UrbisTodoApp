import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #e0e0e0;
  color: #e0e0e0;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #000000;
      border-color: #000000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #000000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #e0e0e0;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
