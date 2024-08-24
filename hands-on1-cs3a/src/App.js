import { useState } from 'react';
import FullName from './components/UserInformation/FullName/FullName';
import Section from './components/UserInformation/Section/Section';
import Description from './components/UserInformation/Description/Description';
import './App.css';

function App() {
  const [userInformation, setUserInformation] = useState({
    firstName: "Eleazar James",
    middleInitial: "S.",
    lastName: "Galope",
    section: "BSCS-3A",
    description: "Zinky zoogle, zeekybooble beeble meep Forp Bogos Binted?"
  });

  const [moonProps, setMoonProps] = useState({
    xPosition: "800",
    color: "yellow",
  });

  const toggleTime = () => {
    setMoonProps((moonProps) => (moonProps === 'Day' ? 'Night' : 'Day'));
    console.log(moonProps);
  };

  function updateName() {
    userInformation.firstName = "EJ";
    setUserInformation({ ...userInformation });
  }


  return (
    <div className="App">
      <div className=''>
        <FullName
          firstName={userInformation.firstName}
          middleInitial={userInformation.middleInitial}
          lastName={userInformation.lastName}
        />
        <Section section={userInformation.section} />
        <Description description={userInformation.description} />
        <div className='moon'>

        </div>
        <button type='button' onClick={updateName}>Update</button>
        <button type='button' onClick={toggleTime}>Move the moon</button>
      </div>
    </div>
  );
}

export default App;
