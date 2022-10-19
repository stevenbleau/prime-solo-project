import { useSelector, useDispatch } from 'react-redux';
import SetFirstName from './SetFirstName/SetFirstName';
import SetLastName from './SetLastName/SetLastName.jsx';
import SetLocation from './SetLocation/SetLocation'
import SetBio from './SetBio/SetBio';
import SetPhoto from './SetPhoto/SetPhoto';

const CreateAccountPage = () => {
    return (
        <div>
            <h1>Create your account!</h1>
            <SetFirstName />
            <SetLastName />
            <SetLocation />
            <SetBio />
            <SetPhoto />
            <button>Create Account</button>

        </div>
    )
}

export default CreateAccountPage;