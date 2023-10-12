import { useEffect } from 'react';
import logo from '../assets/logo.svg';
import '../styles/index.css';

import { useDispatch, useSelector } from 'react-redux'
import { fetchTopPerformers } from '../store/top-performers/index';

function Home() {

  const dispatch = useDispatch()
  const topPerformers = useSelector(state => state.topPerformers)

  useEffect(() => {
    dispatch(fetchTopPerformers())
  }, [])

  return (
      <div className="app-container">
        {
          topPerformers.loading ?
            <img src={logo} className="h-40" alt="logo" /> :
            topPerformers.data.map(item => (
              <div key={item.name}>
                <h3 className='text-3xl font-bold underline'>Name: {item.name}</h3>
                <p>City: {item.city}</p>
              </div>
            ))
        }
      </div>
  );
}

export default Home;
