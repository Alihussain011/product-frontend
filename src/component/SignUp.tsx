import { Container, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import Switch from './Switch';
import { signUp } from '../api/auth';

const SignUp = () => {
     interface SignUp {
        username:string;
        email : string;
        password:string;
     } 
    const initialValues  :SignUp = {
            username: "",
            email:"",
            password: "",
    
    }
    const validate =(values:SignUp)  => {
        const errors:SignUp = {
            username: '',
            email:'',
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
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
    const formik = useFormik({
        initialValues : initialValues,
        // validate,
        onSubmit : signUp,
    });
    return (
        <Container  className='Registration rounded shadow p-5'>
        <Switch/>
        <Container>
            <Form onSubmit={formik.handleSubmit}>
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
                <Form.Label htmlFor='email'>Email : </Form.Label>
                <Form.Control
                    id="email"
                    name="email"
                    type='text'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder='Enter Email'
                    autoComplete=" "
                />
                {formik.errors.email&&<div className='text-danger'>{formik.errors.email}</div>}

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
export default SignUp;