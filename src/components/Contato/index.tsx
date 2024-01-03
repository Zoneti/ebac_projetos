import { useEffect, useState } from 'react'
import {
  BarraAcoes,
  BotaoCancelarRemover,
  CampoCard,
  Card,
  Titulo
} from './styles'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }

    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <Card>
      <Titulo>
        {estaEditando && <em>Editando: </em>}
        {nome}
      </Titulo>
      <CampoCard
        disabled={!estaEditando}
        value={email}
        type="email"
        placeholder="E-mail"
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <CampoCard
        disabled={!estaEditando}
        value={telefone}
        type="tel"
        placeholder="Telefone"
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({ email, id, nome, telefone }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Contato
