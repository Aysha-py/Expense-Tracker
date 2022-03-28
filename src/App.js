import Header from './components/Header'
import './App.css'
import Balance from './components/Balance';
import Incomeexpense from './components/Incomeexpense';
import Transactionlist from './components/Transactionlist';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header  title="Expense tracker"/>
      <div className='container'>
        <Balance />
        <Incomeexpense />
        <Transactionlist Transaction={Transaction} />
        <AddTransaction />
         
      </div>
    
    </GlobalProvider>
  );
}

export default App;
