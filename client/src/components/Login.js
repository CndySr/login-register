import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgusername, setMsgusername] = useState('');
    const [msgpassword, setMsgPassword] = useState('');


    //function untuk handle proses login
    const login = () => {
        //cek username
        if (Username === '') {
            setMsgusername('maaf dek username nya di isi ngapa si!!')
            //cek password
        } else if (password === '') {
            setMsgPassword('password nya juga la!!')
            setMsgusername('')
        }


    }
    return (
        <>
            <div className='container py-5'>
                <h1 className='text-muted'>LOGIN</h1>
                <p className='text-muted'>
                    please login to authenticate
                </p>
                <hr />
                <div className='form-grup'>
                    <label>Username</label>
                    <input type='text' className='form-control' onChange={(e) => { setUsername(e.target.value) }} />
                    <b className='text-danger'>{msgusername}</b>
                </div>
                <div className='form-grup'>
                    <label>password</label>
                    <input type='password' className='form-control' onChange={(e) => { setPassword(e.target.value) }} />
                    <b className='text-danger'>{msgpassword}</b>

                </div>
                <div className='form-group'>
                    <button className='btn btn-primary mt-3' onClick={login}>
                        LOGIN
                    </button>
                </div>
                <p className='text-muted'>
                    Don't have account? please <Link to='/register'>register</Link>
                </p>

            </div>
        </>
    );
}

export default Login;
