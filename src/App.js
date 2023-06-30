
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';


function App() {
  return (
    <>
    <Navbar/>

          <div className="container px-2  bg-body-tertiary" style={{borderRadius:"6px"}} >
          <div className="row gx-2 mt-2">
            <div className="col-lg-9 " style={{border:"0px solid"}}>
              {/* <div className="p-1"><Main/></div> */}
              <Main/>
            </div>
            <div className="col-lg-3">
              <div className=""><Sidebar/></div>
            </div>
          </div>
          </div>

    </>
  );
}

export default App;
