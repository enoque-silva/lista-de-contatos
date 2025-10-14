import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles/index'
import * as enums from '../../utils/enums/Tarefas'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'prioridade' | 'status'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const CardTarefa = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 0px 0px 16px 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`

export const CardTarefaTitulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
  border: transparent;
`

export const CardTarefaTag = styled.span<TagProps>`
  padding: 4px 8px;
  font-size: 10px;
  color: #ffffff;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const CardTarefaDescricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', nomospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const CardTarefaBarraDosBotoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const btnCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const btnRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
