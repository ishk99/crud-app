import logo from './logo.svg';
import './App.css';
import ShowProducts from './components/ShowProducts';
import ProductDataProvider from './context/ProductData';
import SignupLogin from './components/SignupLogin';
import UserDetailsProvider from './context/UserDetails';
function App() {
  return (
    <UserDetailsProvider>
      <ProductDataProvider >
        <SignupLogin />
      </ProductDataProvider>
    </UserDetailsProvider>
  );
}



export default App;
