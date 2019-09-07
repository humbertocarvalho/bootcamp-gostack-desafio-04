import React from 'react';
import facebook from '../../assets/images/facebook.svg';
import logo from '../../assets/images/logo.svg';
import SVG from 'react-inlinesvg';

import { Container } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <SVG src={facebook} alt='' />
        <p>Meu perfil</p>
      </Container>
    </>
  );
}
