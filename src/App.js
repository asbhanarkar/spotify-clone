import logo from './logo.svg';
import './App.css';
import SideNavBar from './Components/SideNavBar/navBar';
import { Nav } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>

    </div>
  );
}

export default App;
