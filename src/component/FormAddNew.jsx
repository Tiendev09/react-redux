
import {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUserRedux } from '../action/actions';
const FormAddNew = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const isCreating = useSelector(state => state.user.isCreating)
    const handleCreateNewUser = () => {
        dispatch(createNewUserRedux(email, password, username));
        setEmail("");
        setPassword("");
        setUsername("");
    }
    return (
        <>
            <div className="container mb-4">
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(event)=>setEmail(event.target.value) }/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(event)=>setPassword(event.target.value) }/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" value={username} onChange={(event)=>setUsername(event.target.value) }/>
                    </div>
                    <Button className="btn btn-primary" onClick={()=>handleCreateNewUser()} disabled={isCreating} >Create</Button>
                </form>
                <hr />
            </div>
            
        </>
    );
}

export default FormAddNew;
