import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Stack, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import ProductForm from './ProductForm';
import data from "../Data/products.json"
import './App.css'

function App() {
  // interface Products {
  //   id: number;
  //   title: string;
  //   desc: string;
  //   price: number;
  // }

  // products related functionality
  const [products, setProducts] = useState(data.products);

  function delProduct(id: number) {
    setProducts(products.filter((e) => (e.id !== id)));
  }

  // modal related functionality
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // serach functionality
  const [searchValue, SetSearchValue] = useState("");
  function search() {
    setProducts(products.filter((e) => (e.title === searchValue)))
  }

  // update related functionality
  function updateProduct(id:number){
    // updateForm(id);
  }
  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <>
      <Container fluid className='m-0'>
      <div className='m-0 py-3  d-flex justify-content-between'>
        <h1>Products</h1>
        <div className='d-flex gap-3'>
          <InputGroup className="">
            <InputGroup.Text id="title"><FaSearch /></InputGroup.Text>
            <Form.Control
              placeholder="Enter Title"
              aria-label="title"
              aria-describedby="title"
              value={searchValue}
              onChange={
                (e) => {
                  SetSearchValue(e.target.value);
                }

              }
            />
          </InputGroup>
          <Button onClick={search}>Search</Button>
        </div>
        <div className='float-end'><Button onClick={handleShow} ><IoIosAdd className='fs-2' /></Button></div>
      </div>
      </Container>

      <Container fluid  className='py-3'>
        <Row className='justify-content-center gap-3'>
          {products.map((e) => (<Col md={"auto"} key={e.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={e.images[0]} className='mg-fluid ' style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text className='overflow-auto' style={{ height: "150px" }}>
                  {e.description}
                </Card.Text>
                <Stack direction='horizontal' className='gap-3  '>
                  <Button variant='success' onClick={() => { updateProduct(e.id) }}>Update</Button>
                  <Button variant='danger' onClick={() => { delProduct(e.id) }}>Delete</Button>
                </Stack>
              </Card.Body>
            </Card>
          </Col>))}
        </Row>
        <ProductForm setProducts={setProducts} products={products} handleClose={handleClose} handleShow={handleShow} show={show} />

      </Container>
    </>

  )
}

export default App
