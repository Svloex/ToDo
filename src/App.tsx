import {InputField} from './components/InputField';
import {TodoList} from './components/TodoList';

const App = () => {
  	console.log('сколько раз')
  	return (
      	<div className='App'>
			<h1>ToDo List</h1>
			<InputField/>
			<TodoList/>
    	</div>
  	);
}

export default App;
