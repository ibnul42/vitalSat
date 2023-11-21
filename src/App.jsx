import { useLocation } from 'react-router-dom';
import Layout from './Layout'
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="font-roboto scroll-smooth">
      <Layout />
    </div>
  )
}

export default App
