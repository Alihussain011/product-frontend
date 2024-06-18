import { Container, Row, Col, Card, Button, Stack, Badge } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';
import {deleteProduct, getProducts } from '../redux/action/action';
import AddProductForm from './form/AddProductForm';
import UpdateForm from './form/UpdateProductForm';
import axios from 'axios';
import Cookies from 'js-cookie';
import "../App.css";

function Home() {
  const navigate = useNavigate();
  let [show,handleClose,handleShow]:any = useOutletContext();
  useEffect(()=>{
    // console.log("home",show);
    (async ()=>{
        dispatch(await getProducts());
    })();
    (async function(){
      if(Cookies.get("token")){
        try {
          let res = await axios.post("http://localhost:8000/app/login",{},{
            headers: {
              Authorization: 'Bearer ' + Cookies.get("token") 
            }
          });
          console.log(res);
        } catch (error) {
          navigate("/registration/login");
        }
      }
      else{
        navigate("/registration/login");
      }
    })();
  },[]);
  const products = useSelector((state:any) => (state.products));
  const dispatch = useDispatch();
  
  
  const [updateForm,SetUpdateForm] = useState(-1);
  const update = (id:number)=>{
    SetUpdateForm(id);
  }
  return (
    <Container fluid  className='bg-light '>
      <Container fluid className='p-5'>
        <Row className=' justify-content-center  gap-3'>
          {products&&products.map((e: any) => (<Col md={"auto"} key={e.id} className="product">
            <Card style={{ width: '17rem',}} className='shadow'>
              <Card.Img variant="top" src={e.thumbnail} className='img-fluid ' style={{ height: "190px" }} />
              <Card.Body>
              <Badge bg='secondary'>{e.id}</Badge>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text className='overflow-hidden' style={{ height: "100px" }}>
                  {e.description}
                </Card.Text>
                <Stack direction='horizontal' className='gap-3  '>
                  <Button variant='success' className="shadow" onClick={() => { update(e.id) }}>Update</Button>
                  <Button variant='danger' className="shadow" onClick={() => {
                    confirm("DO you want to delete")&&dispatch(deleteProduct(e.id))
                  }}>Delete</Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>))}
        </Row> 
        <AddProductForm products={products} handleClose={handleClose} handleShow={handleShow} show={show} />
        <UpdateForm updateForm={updateForm} SetUpdateForm={SetUpdateForm}/>
      </Container>
    </Container>
  )
}

export default Home;
