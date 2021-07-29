import './App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import LoginPageSignup from './LoginPageSignup';
import InformDeliNameAddress from './InformDeliNameAddress';
import InformDeliDate from './InformDeliDate';
import InformDeliMoney from './InformDeliMoney';
import InformDeliConfirm from './InformDeliConfirm';
import InformFinish from './InformFinish';
import ProfileNameAddress from './ProfileNameAddress';
import EditProfileNameAddress from './EditProfileNameAddress';
import ProfileMessage from './ProfileMessage';
import EditProfileMessage from './EditProfileMessage';
import ProfileManageMoney from './ProfileManageMoney';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <LoginPage/> */}
      {/* <LoginPageSignup/> */}
      {/* <InformDeliNameAddress/> */}
      {/* <InformDeliDate/> */}
      {/* <InformDeliMoney/> */}
      {/* <InformDeliConfirm/> */}
      {/* <InformFinish/> */}
      {/* <ProfileNameAddress/>  */}
      {/* แก้ไข CSS */}
      {/* <EditProfileNameAddress/> */}
      <ProfileMessage/>
      {/* <EditProfileMessage/> */}
      <ProfileManageMoney/>
    </div>
  );
}

export default App;
