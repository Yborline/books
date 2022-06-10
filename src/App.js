import { useEffect, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
//Сделать Lazy-loading всего этого- и возможно экспортировать в общий index.js, или нет
import LoginPage from './pages/loginPage/loginPage';
import RegisterPage from './pages/registerPage/registerPage';
import TrainingPage from './pages/trainingPage/trainingPage';
import StatisticsPage from './pages/statisticsPage/statisticsPage';
import LibraryPage from './pages/libraryPage/libraryPage';
import Header from './components/Header/Header';
import QuoteSection from './components/QuoteSection/QuoteSection';
import LibraryResumeModal from './components/LibraryResumeModal/Resume/Resume';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import GoogleAuth from './components/GoogleAuth/GoogleAuth';
import actions from './redux/auth/auth-actions';
import { useWindowWidth } from '@react-hook/window-size';

function App() {
  const onlyWidth = useWindowWidth();
  const dispatch = useDispatch();
  const { isLoggedIn, token } = useSelector(state => state.auth);
  const { isPageRefreshing } = useSelector(state => state.auth);

  useEffect(() => {
    if (!isLoggedIn && token) {
      dispatch(actions.fetchCurrentUser());
    }
  }, [dispatch]);

  return (
    //Придумать позже функционал вместо Loading- спиннер и тп

    isPageRefreshing ? (
      <p>Loading...</p>
    ) : (
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route
              index
              element={onlyWidth < 768 ? <QuoteSection /> : <LoginPage />}
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />

            <Route path="library" element={<LibraryPage />}>
              <Route path=":id" element={<LibraryResumeModal />} />
            </Route>

            <Route path="training" element={<TrainingPage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="*" element={<Navigate to="login" replace />} />
            <Route />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}

export default App;
