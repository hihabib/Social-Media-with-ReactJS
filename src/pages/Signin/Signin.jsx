import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom';


function Signin(){

    const navigate = useNavigate();

    const {getFieldProps, handleSubmit} = useFormik({
        initialValues: {
          userName: '',
          password: ''
        },
        onSubmit: ({userName}) => {
          window.localStorage.setItem('user', JSON.stringify({userName}));
          navigate('/newsfeed')
        },
    });

  return <>
    <div className="container">

        <div className="row vh-100 align-items-center">
            <div className="offset-md-4 col-md-4">
                <h1 className="text-center">Social Media</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                          <label htmlFor="userName" className="form-label">Username</label>
                          <input type="text" className="form-control" id="userName" {...getFieldProps('userName')}/>
                    </div>
                    <div className="mb-3">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" id="password" {...getFieldProps('password')}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Signin</button>
                </form>
            </div>
        </div>
    </div>
  </>
}

export default Signin;
