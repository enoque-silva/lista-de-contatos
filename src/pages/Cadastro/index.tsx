import BarraLateral from '../../containers/BarraLateral'
import FormularioCadastro from '../../containers/FormularioCadastro'

const Cadastro = () => (
  <>
    {/* Barra leteral */}
    <BarraLateral mostrarFiltros={false} />
    {/* Formulário de cadastro */}
    <FormularioCadastro />
  </>
)

export default Cadastro
