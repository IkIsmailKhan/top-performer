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
  },[dispatch])

  console.log('1')

  return (
      <div className="app-container">
        {
          topPerformers.loading ?
            <img src={logo} className="h-40" alt="logo" /> :
            topPerformers.data.map(item => (
              <div key={item.name}>
                <h3 className='text-3xl '>{item.name}</h3>
                <p className='mb-5'>{item.city}</p>
              </div>
            ))
        }
      </div>
  );
}

export default Home;
