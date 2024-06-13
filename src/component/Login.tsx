import { Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import { NavBar } from './NavBar';
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
     interface Login {
        username:string;
        password:string;
     } 
    const initialValues  :Login = {
            username: "",
            password: "",
    
    }
    const validate =(values:Login)  => {
        const errors:Login = {
            username: '',
            password: ''
        }
        
        if (!values.username) {
          errors.username = 'Required';
        } else if (values.username.length > 15) {
          errors.username = 'Must be 15 characters or less';
        }
      
        if (!values.password) {
          errors.password = 'Required';
        } 
    
      
        return errors;
      };
    const formik = useFormik({
        initialValues : initialValues,
        // validate,
        onSubmit : async (values)=>{
            
            try{
                let res = await axios.post("http://localhost:8000/app/login",values);
                
                console.log(res)
                Cookies.set("token",res.data);
                navigate("/");
                
            }catch(error:any){
                console.log(error.response)
                alert(error.response.data)
            }
        }
    });
    return (
        <Container className='Registration rounded shadow p-5' >
        <NavBar/>
        <Container>
            <Form onSubmit={formik.handleSubmit} >
                <Form.Label htmlFor='username'>UserName : </Form.Label>
                <Form.Control
                    id="username"
                    name="username"
                    type='text'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder='Enter Username'
                    autoComplete=" "
                />
                {formik.errors.username&&<div className='text-danger'>{formik.errors.username}</div>}
                <Form.Label htmlFor='password'>Password : </Form.Label>
                <Form.Control
                id="password"
                    type='password'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder='Enter password'
                    autoComplete=" "
                />
                {formik.errors.password&&<div className='text-danger'>{formik.errors.password}</div>}

                <div className='text-center py-3'>
                    <Button type='submit'  className='shadow'>Save</Button>
                </div>
            </Form>
        </Container>
        </Container>
    )
}
export default Login;
