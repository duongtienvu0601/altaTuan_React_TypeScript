import "./App.css";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Home } from "./components/Home";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { Loggined } from "./components/state/Loggedin";
import { User } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import CounterClass from "./components/class/CounterClass";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import firebase from "firebase/compat";
import "./components/firebase/firebaseconfig";
import "./redux/usersSlice";
import UserList from "./redux/UserList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  //khỏi tạo một đối tượng
  const personName = {
    first: "Duong",
    last: "Tien Vu",
  };
  //khởi tạo một mảng đối tượng
  const personList = [
    {
      first: "Duong",
      last: "Tien Vu",
      id: 1,
    },
    {
      first: "Duong",
      last: "Tien Vu Hutech",
      id: 2,
    },
    {
      first: "Duong",
      last: "Tien Vu Alta",
      id: 3,
    },
  ];
  return (
    <Provider store={store}>
      <div className="App">
        <Person name={personName} />
        <PersonList names={personList} />
        <Status status="loading" />
        <Heading> Placeholder text </Heading>
        <Oscar>
          <Heading>Giải thưởng dành cho Duong Tien Vu</Heading>
        </Oscar>
        <Home name="DuongTienVu" isLoggedIn={false} />
        <Button 
          handleClick={(event,id)=>{
            console.log('Button Clicked',event,id);
          }}
        />
        <Input value ='hello' handleChange={(event)=> console.log(event)}/>
        
        {/*ở đây ta truyền thằng thuộc tính CSS inline vào Container */}
        <Container styles={{border:'1px solid black', padding:'1rem'}} />
        <Loggined/>
        <User/>
        <Counter/>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
          <DomRef/>
          <MutableRef/>
          <CounterClass name="Duong Tien Vu"/>
          <Toast position="center-bottom" />
          <CustomButton variant='primary' onClick={() => console.log("Duong Tien Vu")}>
            Primary Button
          </CustomButton>
          <UserList/>
      </div>
    </Provider>
  );  
}

export default App;

