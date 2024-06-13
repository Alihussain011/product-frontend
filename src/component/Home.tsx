import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Stack, Badge } from 'react-bootstrap';
import Cookies from 'js-cookie';

import ProductForm from './ProductForm';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import {deleteProduct } from '../redux/action/action';
import UpdateForm from './UpdateForm';
import "../App.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  useEffect(()=>{
    (async function(){
      if(Cookies.get("token")){
        try {
          let res = await axios.post("http://localhost:8000/app/login",{},{
            headers: {
              Authorization: 'Bearer ' + Cookies.get("token")
            }
          });
          console.log(res)
        } catch (error) {
          navigate("/registration/login");
        }
      }
      else{
        navigate("/registration");
      }
    })();
  },[])
  const products = useSelector((state:any) => (state.products));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [updateForm,SetUpdateForm] = useState(-1);
  const update = (id:number)=>{
    SetUpdateForm(id);
  }

  return (
    <Container fluid  className='bg-light'>
      <Header handleShow={handleShow} />   
      <Container fluid className='p-5'>
        <Row className=' justify-content-center  gap-3'>
          {products&&products.map((e: any) => (<Col md={"auto"} key={e.id} className="product">
            <Card style={{ width: '17rem',}} className='shadow'>
              <Card.Img variant="top" src={e.images[0]} className='img-fluid ' style={{ height: "190px" }} />
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
        <ProductForm products={products} handleClose={handleClose} handleShow={handleShow} show={show} />
        <UpdateForm updateForm={updateForm} SetUpdateForm={SetUpdateForm}/>
      </Container>
    </Container>
  )
}

export default Home;
