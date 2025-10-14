import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

const Circulo = styled(Link)`
  display: flex;
  width: 64px;
  height: 64px;
  background-color: ${variaveis.verde};
  color: #ffffff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
    background-color: ${variaveis.verde2};
  }
`

export default Circulo
