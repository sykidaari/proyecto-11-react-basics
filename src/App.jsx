import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Episodes from './pages/Episodes/Episodes';
import Quiz from './pages/Quiz/Quiz';
import NotFound from './pages/NotFound/NotFound';
import Background from './components/atoms/Background/Background';
import Footer from './components/organisms/Footer/Footer';

function App() {
  return (
    <div id='app' className='min-h-dvh font-sans text-app-ink bg-app-teal-900'>
      <Background />

      <Header />

      <Routes>
        <Route
          element={
            <main className='relative z-10 max-w-8xl m-auto py-20 px-5 flex  items-center flex-col gap-4 min-h-dvh'>
              <Outlet />
            </main>
          }
        >
          <Route index element={<Home />} />
          <Route path='characters' element={<Characters />} />
          <Route path='episodes' element={<Episodes />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
