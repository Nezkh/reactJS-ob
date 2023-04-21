import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MicomponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* Componente Propio Greeting.jsx */}
          {/* <Greeting name="Francisco"></Greeting> */}
          
          {/* Componente de ejemplo funcional */}
          {/* <GreetingF name="Francisco"></GreetingF> */}

          {/* Ejemplo1 de uso de HOOKS */}
          {/* <Ejemplo1></Ejemplo1> */}

          {/* Ejemplo2 de uso de HOOKS, useState, useRef, useEffect */}
          {/* <Ejemplo2></Ejemplo2> */}

          {/* Ejemplo3 de uso de HOOKS, useState y useContext*/}
          {/* <MicomponenteConContexto></MicomponenteConContexto> */}

          {/* Ejemplo 4 props.children - 
          Todo lo que hay aquí, es tratado como props.children*/}
          {/* <Ejemplo4 nombre="Francisco">
            <h3>
              Contenido del props.children
            </h3>
          </Ejemplo4> */}

          {/* GreetingStled se agrega */}
          {/* <GreetingStyled name="Francisco"></GreetingStyled> */}

          {/* Componente de Listado de tareas */}
          {/* <TaskListComponent></TaskListComponent> */}

          {/* Gestión de eventos */}
          <Father></Father>
      {/* </header> */}
    </div>
  );
}

export default App;
