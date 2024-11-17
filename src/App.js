import "bootstrap/dist/css/bootstrap.min.css";
import MyNavigationBar from './MyNavigationBar';
import Container from 'react-bootstrap/Container';
import CheckOutForm from './CheckOutForm';
// Rockwell Dela Rosa, IT302-451, Unit 10 React.js Exercise, rmd2@njit.edu
function App() {
  return (
    <div>
      <MyNavigationBar />
      <Container>
        <CheckOutForm />
      </Container>
    </div>
  );
}

export default App;
