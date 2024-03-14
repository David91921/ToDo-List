import './App.css';
import Task from './components/Task';
import TaksForm from './components/taskForm'

function App() {
  return (
    <div className="todo-list">
      react
    <div className='main-task-list'>
      <TaksForm/>
      <h1>Mis Tareask</h1>
      <Task texto='Aprpender React' />
    </div>
    </div>
  );
}

export default App;
