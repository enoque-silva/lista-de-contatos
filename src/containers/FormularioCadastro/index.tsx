import { MainContainer, Titulo, BotaoSalvar } from '../../styles/index'
import { Campo } from '../../styles/index'
import { Form, Opcoes } from './styles'
import { useDispatch } from 'react-redux'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as enums from '../../utils/enums/Tarefas'
import { cadastrar } from '../../store/reducers/tarefas'

const FormularioCadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        descricao,
        prioridade,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          <input
            value={enums.Prioridade.URGENTE}
            name="prioridade"
            type="radio"
            id="urgente"
            onChange={({ target }) =>
              setPrioridade(target.value as enums.Prioridade)
            }
          />{' '}
          <label htmlFor="urgente">Urgente</label>
          <input
            value={enums.Prioridade.IMPORTANTE}
            name="prioridade"
            type="radio"
            id="importante"
            onChange={({ target }) =>
              setPrioridade(target.value as enums.Prioridade)
            }
          />{' '}
          <label htmlFor="importante">Importante</label>
          <input
            value={enums.Prioridade.NORMAL}
            name="prioridade"
            type="radio"
            id="normal"
            onChange={({ target }) =>
              setPrioridade(target.value as enums.Prioridade)
            }
            defaultChecked
          />{' '}
          <label htmlFor="normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default FormularioCadastro
