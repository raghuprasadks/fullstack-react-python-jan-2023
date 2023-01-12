import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import DemoForm from './components/DemoForm';
import SimpleInterest from './components/SimpleInterest';
import GroceryList from './components/GroceryList';
import GroceryListNew from './components/GroceryListNew';

function App() {

  const groceryitems=[
    {
        'slno':1,
        'item':'Rice',
        'rate':60,
        'qty':10,
        'amount':600
    },
    {
        'slno':2,
        'item':'Dal',
        'rate':90,
        'qty':2,
        'amount':180
    },
    {
        'slno':3,
        'item':'Oil',
        'rate':100,
        'qty':2,
        'amount':200
    },
]

  return (
    <div className="App">  
      {/**
      <Header/>
      <Content/>
      <DemoForm/>
      <SimpleInterest/>
      <GroceryList/>
       */}


<GroceryListNew groceryitemsdata={groceryitems}></GroceryListNew>

    </div>
  );
}

export default App;
