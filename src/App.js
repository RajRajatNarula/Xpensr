import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AddExpense from "./Pages/add-expense";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact Component={Home} /> 
        <Route path="/add-expense" exact Component={AddExpense} />
      </Routes>
      <div>Footer</div>
    </Router>
    
  );
}

export default App;
