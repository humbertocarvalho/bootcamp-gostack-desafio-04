import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #4a90e2;
  height: 64px;

  svg {
    height: 24px;
    width: 120px;
  }

  p {
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;
