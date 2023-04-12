import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/* Componente Propio Greeting.jsx */}
          {/* <Greeting name="Francisco"></Greeting> */}
          
          {/* Componente de ejemplo funcional */}
          {/* <GreetingF name="Francisco"></GreetingF> */}
          
          {/* Componente de Listado de tareas */}
          {/* <TaskListComponent></TaskListComponent> */}
          
      </header>
    </div>
  );
}

export default App;
