import { useState,useEffect  } from 'react';
import { Button, Stack, Modal, Form, Container } from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { addProduct } from '../../redux/action/action';

export default function AddProductForm({ handleClose, show }: any) {

    const dispatch = useDispatch();

    const products = useSelector((state:any) => state.products);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function add(e: any) {
        e.preventDefault();
        const id = products[products.length-1].id+1;
        dispatch(addProduct({id, title, description, "thumbnail": imageUrl }));
        handleClose();
    }

    useEffect(()=>{
    },[]);
    return (<>
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={add} >
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
                            <Form.Control type='text' onChange={(e) => (setImageUrl(e.target.value))} value={imageUrl} />
                        </Form.Group>
                        <Stack direction='horizontal' className='gap-3'>
                            <Button className='shadow' type='submit' >
                                Add Product
                            </Button>
                            <Button className='shadow' variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Stack>
                    </Form>
                </Modal.Body>

            </Modal>
        </Container>

    </>)
}