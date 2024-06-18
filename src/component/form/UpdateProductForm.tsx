import { useState,useEffect  } from 'react';
import { Button, Stack, Modal, Form, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../redux/action/action';

export default function UpdateForm({ updateForm,SetUpdateForm }: any) {

    const dispatch = useDispatch();
    const products = useSelector((state:any) => (state.products));

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    function update(e: any) {
        e.preventDefault();
        dispatch(updateProduct({"id":updateForm,title,description,thumbnail}))
        SetUpdateForm(-1);
    }
    
    useEffect(()=>{
        console.log(updateForm)
        let data = updateForm!==-1?products.filter((e:any)=>(e.id===updateForm))[0]:undefined;
        console.log(data);
        if(data){
            setTitle(data.title);
            setDescription(data.description);
            setThumbnail(data.thumbnail);
        }
    },[updateForm])
    return (<>
        <Container>
            <Modal show={updateForm!=-1} onHide={()=>{  SetUpdateForm(-1)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Products</Modal.Title>
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
                            <Form.Label>Thumbnail Url</Form.Label>
                            <Form.Control type='text' onChange={(e) => (setThumbnail(e.target.value))} value={thumbnail} />
                        </Form.Group>
                        <Stack direction='horizontal' className='gap-3'>
                            <Button className='shadow' type='submit' >
                                Update Product
                            </Button>
                            <Button className='shadow' variant="secondary" onClick={()=>{ SetUpdateForm(-1)  }}    >
                                Close
                            </Button>
                        </Stack>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>

    </>)
}