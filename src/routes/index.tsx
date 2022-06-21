import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home';

const RootRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          {/* <Route path='signin' element={<SignIn />} /> */}
          {/* <Route path='signup' element={<SignUp />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default RootRoute;
