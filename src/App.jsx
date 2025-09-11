import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Episodes from './pages/Episodes/Episodes';
import Quiz from './pages/Quiz/Quiz';
import NotFound from './pages/NotFound/NotFound';
import Background from './components/Background/Background';
import PageWrapper from './components/wrappers/PageWrapper/PageWrapper';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id='app' className='min-h-dvh font-sans text-app-ink bg-app-teal-900'>
      <Background />

      <Header />
      <Footer />
      <Routes>
        <Route element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path='characters' element={<Characters />} />
          <Route path='episodes' element={<Episodes />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
