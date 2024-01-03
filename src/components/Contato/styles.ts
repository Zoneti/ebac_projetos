import styled from 'styled-components'
import { Botao, Campo } from '../../styles'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: ${variaveis.cinzaPadrao};
  box-shadow: 0px 4px 4px ${variaveis.pretoAlpha3};
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.pretoAlpha1};
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const CampoCard = styled(Campo)`
  background-color: transparent;
  border: 1px solid ${variaveis.pretoAlpha1};
  margin: 12px 0px;
`
