import { useEffect } from 'react';
import Hero from '../components/ui/Hero';


export default function Home() {
  useEffect(() => {
    document.title = "Theres Östgård"; 
  }, []);

  return (
    <section>
      <Hero />


    </section>
  );
}
