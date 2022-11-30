import * as Components from './App.styles';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

function App() {
  
  return (
    <Components.Container>
      <div>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div>
        <p>etapas</p>
        <form>
          <div>
            <button type='button'>
              <GrFormPrevious />
              <span>Volatr</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </Components.Container>
    
  )
}

export default App
