import logo from './logo.svg';
import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
        setData(response.data)
        setLoading(false)
      }
      catch (e) {
        console.log(e)
      }
    };

    fetchData();

    // const interval = setInterval(() => {
    //   fetchData();
    // }, 5000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {loading ?
            <img src={logo} className="App-logo" alt="logo" /> :
            data.map(item => (
              <div key={item.name}>
                <h3>{item.name}</h3>
              </div>
            ))}
        </div>
      </header>
    </div>
  );
}

export default Home;
