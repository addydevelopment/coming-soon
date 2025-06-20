import SplitText from '@/components/SplitText';
import Particles from "@/components/particles";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#121212',
        color: '#fff',
        userSelect: 'none',
      }}
    >
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <main
        style={{
          flexGrow: 1,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2rem',
        }}
      >
        
        <SplitText text="Coming Soon" />
        
      </main>
    

      <footer
        style={{
          padding: '1rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)',
          fontWeight: '400',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <a
          href="https://addydevelopment.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none' }}
        >
        &copy; {currentYear} {''}
        
          Addy Development
        {' '} 
        All rights reserved.
        </a>
      </footer>
    </div>
  );
}