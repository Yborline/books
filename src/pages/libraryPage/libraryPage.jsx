import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryList from '../../components/LibraryList/LibraryList';
import LibraryForm from '../../components/LibraryForm/LibraryForm';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LibraryPage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !isLoggedIn && navigate((location.pathname = '/login'));
  });

  return (
    isLoggedIn && (
      <div>
        <LibraryForm />
        {!sessionStorage.getItem('firstVisit') && <LibraryModal />}
        <LibraryList />
      </div>
    )
  );
};

export default LibraryPage;
