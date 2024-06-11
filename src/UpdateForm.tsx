import { useState } from 'react';
import { Button, Stack, Modal, Form, Container } from 'react-bootstrap';

export default function ProductForm(props:any) {


    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageurl, setImageurl] = useState('');

    function OpenUpdateForm(id:number) {
            
       
        setTitle("");
        setDescription("");
        setImageurl("");
        props.setShow(false);
    }
    function updateForm(e: any) {
        e.preventDefault();
        let id: number = props.products.length + 1;
        props.setProducts([...props.products, { id, title, description, "images": [imageurl] }]);
        setTitle("");
        setDescription("");
        setImageurl("");
        props.setShow(false);
    }

    return (<>
       <Container>
       <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Products</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={UpdateProduct} >
                    <Form.Group className="mb-3" >
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control type="text" placeholder="Product Title" onChange={(e) => (setTitle(e.target.value))} value={title} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => (setDescription(e.target.value))} value={description} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type='text' onChange={(e) => (setImageurl(e.target.value))} value={imageurl} />
                    </Form.Group>
                    <Stack direction='horizontal' className='gap-3'>
                        <Button variant="success" type='submit' >
                            Update
                        </Button>
                        <Button variant="secondary" onClick={props.handleClose}>
                            Close
                        </Button>
                    </Stack>
                </Form>
            </Modal.Body>

        </Modal>
       </Container>

    </>)    
}