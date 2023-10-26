import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTemaAsPropriedade: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Bruno Dias</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        diasbrunodev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema onClick={props.trocaTemaAsPropriedade}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
