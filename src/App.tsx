import { Route, Routes } from 'react-router-dom';
import { SignIn } from './components/signIn.component';
import { SignUp } from './components/signUp.component';
import { Header } from './components/header.components';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;