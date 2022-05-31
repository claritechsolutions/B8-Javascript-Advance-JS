// import logo from './logo.svg';
import './App.css';
// import Demo from './component/hello';
// import Welcome from './component/prop';
// import Hello from './component/helloJsx';
// import Counter from './component/useState/counterUseState';
// import Form from './component/useState/form.js';
// import ArrayMethods from './component/filterarray'
// import Practice from './component/useState/practice'
// import Counter  from './component/useState/counter';
// import Ganesh from './component/useState/arrayMethods';

import Hookcounter from './component/useEffect/hookCounter'


// import Image1 from './component/image';
// import Demo from './component/classHello';

function App() {
    return (
        <div className="App">
          {/* <Demo/> 
          <Hello/> */}
          {/* <Welcome></Welcome>   */}
         
          {/* <Image1/> */}
          {/* <Demo/> */}
          {/* <Welcome name={'dhanashri'} desig={'Software Engineer'} values={[10,20,30]}/>
          <Welcome name={'Anuradha'} desig={'Software Engineer'} values={[40,50,60]}/>
          <Welcome name={'Pooja'} desig={'Software Engineer'} values={[70,80,90]}/> */}

          {/* <Counter/>
          <Form/> */}
       
          {/* <ArrayMethods/>
          <Practice/> */}

          {/* <Counter/>
          <Ganesh/> */}

          <Hookcounter/>

        </div>
      );
    }

export default App;