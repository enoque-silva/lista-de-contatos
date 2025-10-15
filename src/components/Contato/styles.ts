import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles/index'

export const CardTarefa = styled.div`
  background-color: #fcfcfd;
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #e4e8ed;


  label {
    display: flex;
    align-items: center;
`

export const CardTarefaTitulo = styled.h3`
  font-weight: bold;
  font-size: 20px;
  border: transparent;
  outline: none;
`

export const InputInformacoes = styled.input`
  color: #626b77;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter', sans-serif;
  display: block;
  width: 100%;
  margin: 4px 0;
  resize: none;
  border: none;
  background-color: transparent;
  outline: none;

  &:disabled {
    color: #a0a0a0; /* cor do texto quando desabilitado */
    -webkit-text-fill-color: #a0a0a0; /* compatibilidade com Chrome/Safari */
    opacity: 1; /* evita o "esbranquiçado" padrão */
  }
`

export const CardTarefaBarraDosBotoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  width: 100%;
  margin-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelhoSecundario};
  color: ${variaveis.vermelhoPrimario};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelhoSecundario};
  color: ${variaveis.vermelhoPrimario};
`
