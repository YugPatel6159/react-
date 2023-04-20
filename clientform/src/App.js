
import './App.css';
import { useState } from 'react';
import Client from './components/Client';
import Dashboard from './components/Dashboard';

function App() {

  const [client, setClient] = useState(true)
  const routeToClient = () => {
    setClient(true)
    console.log(client)
  }
  const routeToDashboard = () => {
    setClient(false);
    console.log(client)
  }

  return (
    <div className='container'>
      <div className="container d-flex justify-content-center">
        <div>
          <button className="btn btn-primary" onClick={routeToClient}>
            Client
          </button>
        </div>
        <div>
          <button className="btn btn-primary" onClick={routeToDashboard}>
            Dashboard
          </button>
        </div>
      </div>
      <div>
        {client ? <Client /> : <Dashboard />}
      </div>
    </div>
  );
}

export default App;
