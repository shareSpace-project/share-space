import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';

const RootRoute = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default RootRoute;
