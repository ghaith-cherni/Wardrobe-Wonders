import Home from './routes/home/home.component'; 
import { Routes,Route} from 'react-router-dom';
import Navigation from './routes/navigation/Navigation.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop =()=>{
  return <h1>i iam groot</h1>;
};

const App1=() =>{
  
    return(
      
      <Routes>
        <Route path='/' element={<Navigation/>}> 
          <Route index element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/SignIn' element={<SignIn/>}/>
        </Route>
     </Routes>
  )
};
export default App1;