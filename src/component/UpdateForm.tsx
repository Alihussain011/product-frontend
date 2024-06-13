import { useState,useEffect  } from 'react';
import { Button, Stack, Modal, Form, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/action/action';

export default function UpdateForm({ updateForm,SetUpdateForm }: any) {

    const dispatch = useDispatch();
    const products = useSelector((state:any) => (state.products));

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function update(e: any) {
        e.preventDefault();
        dispatch(updateProduct({id:updateForm,title,description,images:[imageUrl]}))
        SetUpdateForm(-1);
    }
    
    useEffect(()=>{
        let data = updateForm!==-1?products.filter((e:any)=>(e.id===updateForm))[0]:undefined;
        
        if(data){
            setTitle(data.title);
            setDescription(data.description);
            setImageUrl(data.images);
        }
    },[updateForm])
    return (<>
        <Container>
            <Modal show={updateForm!=-1} onHide={()=>{  SetUpdateForm(-1)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={update} >
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
                            <Button variant="success" type='submit' >
                                Update
                            </Button>
                            <Button variant="secondary"    onClick={()=>{ SetUpdateForm(-1)  }}    >
                                Close
                            </Button>
                        </Stack>
                    </Form>
                </Modal.Body>

            </Modal>
        </Container>

    </>)
}