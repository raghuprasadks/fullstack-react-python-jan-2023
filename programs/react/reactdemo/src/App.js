import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import DemoForm from './components/DemoForm';
import SimpleInterest from './components/SimpleInterest';

function App() {
  return (
    <div className="App">  
      
      <Header/>
      <Content/>
      <DemoForm/>
      <SimpleInterest/>
      
    </div>
  );
}

export default App;
