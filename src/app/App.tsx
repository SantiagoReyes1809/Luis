import { Route, Routes } from 'react-router-dom';

import Header from './components/header';
import HomePage from './screens/homePage';




function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
    
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Header />

        
        <section className='bg' style={{background : '#1f1f1f'}}>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </section>

        

      </section>
    </main>
  );
}

export default App;
