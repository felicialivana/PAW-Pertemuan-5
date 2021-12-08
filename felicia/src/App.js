import React, {Component} from 'react';
import './css/bootstrap.min.css'; //import bootstrap
import './App.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';
import Profile  from './views/Profile/Profile';
import Header from './components/Header/Header';



class App extends Component{
  constructor(){
    super();
    //inisial state view
    this.state = {
      view : 'home'
    }
  }
  render(){
    //Functional component View untuk mengatur component yang tampil
    const View = ()=>{
      if(this.state.view == 'home')
      return <Home name='Eden Hazard' />
      else if(this.state.view == 'about')
      return <About />
      else if(this.state.view == 'help')
      return <Help />
    }
    
    return(
      <div>
        <Header getValue={(value)=>this.setState({view:value})} />

        <View />{/*panggil component View*/}
      </div>
    );
  }
}







////TUGAS 4.2
// class App extends Component{
//   constructor(){
//     super();
//     //inisial state view
//     this.state = {
//       view : 'home'
//     }
//   }

//   render(){
//     //Functional component View untuk mengatur component yang tampil
//     const View = ()=>{
//       if(this.state.view == 'home')
//       return <Home name='Eden Hazard' />
//       else if(this.state.view == 'about')
//       return <About />
//       else if(this.state.view == 'help')
//       return <Help />
//       else if(this.state.view == 'header')
//       return <Header />
//     }
//     return(
//       <div>
//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'home'})} className="nav-link" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'about'})} className="nav-link" href="#">About</a>
//             </li>
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'help'})} className="nav-link" href="#">Help</a>
//             </li>
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'header'})} className="nav-link" href="#">Header</a>
//             </li>
//           </ul>
//         </nav>

//         <View />{/*panggil component View*/}
//       </div>
//     );
//   }
// }






////4.6. STATE & TUGAS 4.1
// class App extends Component{
//   constructor(){
//     super();
//     //inisial state view
//     this.state = {
//       view : 'home'
//     }
//   }

//   render(){
//     //Functional component View untuk mengatur component yang tampil
//     const View = ()=>{
//       if(this.state.view == 'home')
//       return <Home name='Eden Hazard' />
//       else if(this.state.view == 'about')
//       return <About />
//       else if(this.state.view == 'help')
//       return <Help />
//     }
//     return(
//       <div>
//         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'home'})} className="nav-link" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'about'})} className="nav-link" href="#">About</a>
//             </li>
//             <li className="nav-item">
//               <a onClick={()=> this.setState({view : 'help'})} className="nav-link" href="#">Help</a>
//             </li>
//           </ul>
//         </nav>

//         <View />{/*panggil component View*/}
//       </div>
//     );
//   }
// }






// //4.4. PROPS
// function Message(props){
//     return <p>Hello {props.name}, </p>;
//   }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message name="Ulrich"/>
//         <Home name="Muhammad Salah"/>
//       </div>
//    )
//   }
// }






// //4.3. CLASS COMPONENTS
// function Message(){
//   return "Pesan di dalam Component";
// }

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Message/>
//         <Home />
//       </div>
//     )
//   }
// }





//4.2. FUNCTIONAL COMPONENT
// function Message(){
//     return <p>Hello from message component</p>
//   }

//   class App extends Component{
//     render() {
//       return(
//         <div>
//           <Message />
//         </div>    
//       );
//     }
//   }



////5.1 FUNCTION
////function di luar class App
// function sayHello(){
//   return "Hello World"
// }

// class App extends Component{
//   /*function di luar class App*/
//   bilangHalo(){
//     return "Halo Dunia"
//   }

//   render() {
//     return(
//       <>
//         <p>sayHello : <b>{sayHello()}</b></p>
//         <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//       </>
//     );
//   }
// }


export default App;
