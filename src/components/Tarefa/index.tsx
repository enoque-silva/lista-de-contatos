import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar, Botao } from '../../styles/index'

import * as enums from '../../utils/enums/Tarefas'

type Props = TarefaClass

const Tarefa = ({
  descricao: descricaoOriginal,
  status,
  prioridade,
  titulo: tituloOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  useEffect(() => {
    if (tituloOriginal.length > 0) {
      setTitulo(tituloOriginal)
    }
  }, [tituloOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
    setTitulo(tituloOriginal)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <S.CardTarefa>
      <label htmlFor={tituloOriginal}>
        <input
          type="checkbox"
          id={tituloOriginal}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        {estaEditando ? (
          <S.CardTarefaTitulo
            as="input"
            type="text"
            value={titulo}
            onChange={(evento: ChangeEvent<HTMLInputElement>) =>
              setTitulo(evento.target.value)
            }
          />
        ) : (
          <S.CardTarefaTitulo>{titulo}</S.CardTarefaTitulo>
        )}
      </label>
      <S.CardTarefaTag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.CardTarefaTag>
      <S.CardTarefaTag parametro="status" status={status}>
        {status}
      </S.CardTarefaTag>
      <S.CardTarefaDescricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.CardTarefaBarraDosBotoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({ id, titulo, descricao, prioridade, status }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.btnCancelar onClick={() => cancelarEdicao()}>
              Cancelar
            </S.btnCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.btnRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.btnRemover>
          </>
        )}
      </S.CardTarefaBarraDosBotoes>
    </S.CardTarefa>
  )
}

export default Tarefa
