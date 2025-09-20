import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/organisms/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Episodes from './pages/Episodes/Episodes';
import Quiz from './pages/Quiz/Quiz';
import NotFound from './pages/NotFound/NotFound';
import Background from './components/atoms/Background/Background';
import Footer from './components/organisms/Footer/Footer';
import Character from './pages/Character/Character';
import Episode from './pages/Episode/Episode';

function App() {
  return (
    <div id='app' className='min-h-dvh font-sans text-app-ink bg-app-teal-900 '>
      <Background />

      <Header />

      <Routes>
        <Route
          element={
            <main className='relative z-10 max-w-8xl pt-13 px-5 flex  items-center flex-col gap-4 min-h-[calc(100dvh-34px)]'>
              <Outlet />
            </main>
          }
        >
          <Route index element={<Home />} />

          <Route path='characters' element={<Outlet />}>
            <Route index element={<Characters />} />
            <Route path='character/:id' element={<Character />} />
          </Route>

          <Route path='episodes' element={<Outlet />}>
            <Route index element={<Episodes />} />
            <Route path='season/:pagenr' element={<Episodes />} />
            <Route path='episode/:id' element={<Episode />} />
          </Route>

          <Route path='quiz' element={<Quiz />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
