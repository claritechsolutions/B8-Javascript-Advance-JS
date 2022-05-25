import logo from './logo.svg';
import './App.css';
import Demo from './component/hello';
import Welcome from './component/welcome';
import Hello from './component/helloJsx';
// import Image1 from './component/image';
// import Demo from './component/classHello';

function App() {
    return (
        <div className="App">
          <Demo/> 
          <Hello/>
          {/* <Welcome></Welcome>   */}
         
          {/* <Image1/> */}
          {/* <Demo/> */}
          <Welcome name={'dhanashri'} desig={'Software Engineer'} values={[10,20,30]}/>
          <Welcome name={'Anuradha'} desig={'Software Engineer'} values={[40,50,60]}/>
          <Welcome name={'Pooja'} desig={'Software Engineer'} values={[70,80,90]}/>
        </div>
      );
    }

export default App;