import React, {useState, useEffect} from 'react';

import Header from '../components/Header';

export default function Home() {
const [isLogued, setIsLogued] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      setIsLogued(true);
    }
  }, [])
  
  return (
    <div><Header></Header></div>
  );
}
