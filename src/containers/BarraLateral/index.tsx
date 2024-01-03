import { useNavigate } from 'react-router-dom'
import { Botao, BotaoSalvar } from '../../styles'
import { Aside } from './styles'

type Props = {
  alternaBotaoNav: boolean
}

const BarraLateral = ({ alternaBotaoNav }: Props) => {
  const navigate = useNavigate()
  return (
    <Aside>
      <div>
        {alternaBotaoNav ? (
          <BotaoSalvar onClick={() => navigate('/novo')}>
            Cadastrar novo Contato
          </BotaoSalvar>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar Tela de Listagem</Botao>
        )}
      </div>
    </Aside>
  )
}

export default BarraLateral
