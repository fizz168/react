// import Header from "./Header.jsx"

// function App() {
//   <Header></Header>
// }

// export default App
import Header from './Header'; // 1. Must import it
import Footer from './Footer';
import Food from './Food';
import Button from './Button';
import Student from './Student';

function App() {
  return (
    <>
   <Header></Header>
   <Footer></Footer>
   <Food></Food>
   <Button></Button>
   <Student name="Nigga" age= "30" Number="0962618202" isStudent={false}></Student>
   <Student name="Re ach" age= "45" Number="o12681486" isStudent={true}></Student>
   
   </>
  );
}

export default App;