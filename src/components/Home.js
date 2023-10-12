import '../styles/index.css';
import Card from './Card';
import logo from '../assets/logo.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopPerformers } from '../store/top-performers/index';

function Home() {

  const dispatch = useDispatch()
  const topPerformers = useSelector(state => state.topPerformers)

  useEffect(() => {
    dispatch(fetchTopPerformers())
  }, [dispatch])

  return (
    <div className="app-container">
      {
        topPerformers.loading ?
          <img src={logo} className="h-40" alt="logo" /> :
          <Card topPerformers={topPerformers} />
      }
    </div>
  );
}

export default Home;
