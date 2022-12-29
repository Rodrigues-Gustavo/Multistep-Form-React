import * as Components from './App.styles';
import GlobalStyle from './GlobalStyle';
import {FiSend} from 'react-icons/fi'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Thanks from './components/Thanks';
import { useForm } from './hooks/useForm';
import  Header  from "./components/Header/Header";

// first color 11a2d7

function App() {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);
  
  return (
    <Components.Container>
      <GlobalStyle />
      <Header>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </Header>
      <div>
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep +1, e)}>
          <div>{currentComponent}</div>
          <div>
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep -1,)}>
                <GrFormPrevious />
                <span>Volatr</span>
            </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </Components.Container>
    
  )
}

export default App
