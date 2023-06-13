
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';


function App() {
  return (
    <>
    <Navbar/>

          <div className="container px-2  bg-body-tertiary">
          <div className="row gx-2 mt-2">
            <div className="col-sm-9" style={{border:"0px solid"}}>
              {/* <div className="p-1"><Main/></div> */}
              <Main/>
            </div>
            <div className="col-sm-3">
              <div className=""><Sidebar/></div>
            </div>
          </div>
          </div>

    </>
  );
}

export default App;
