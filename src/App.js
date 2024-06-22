import logo from './logo.svg';
import './App.css';
import Form from './component/Form';

function App() {

  const fields = ['name','email','age']
  return (
    <div className="App">
      
    <Form  fields={fields}/>
    </div>
  );
}

export default App;
