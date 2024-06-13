import { useState } from 'react'
import { Container, InputGroup, Form, Button, Badge } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/action/action';
import { CiShoppingCart } from "react-icons/ci";
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import eCommerceSvg from "../assets/eCommerce.svg"
import Cookies from 'js-cookie';

export const Header = ({ handleShow }: any) => {
    const navigate = useNavigate();

    const products = useSelector((state: any) => (state.products));
    const dispatch = useDispatch();
    const [searchValue, SetSearchValue] = useState("");
    return (
        <Container fluid className='m-0'>
            <div className='p-3 d-flex justify-content-between align-items-center'>
                <div className=' d-flex'>

                <span className='p-1 '><img src={eCommerceSvg} /></span><h1 className=''>Products</h1>
                </div>
                <div className='d-flex gap-3'>
                    <InputGroup className="shadow">
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
                    <Button className="shadow" onClick={() => { searchValue!="" && (dispatch(searchProduct(searchValue))) }} >Search</Button>

                    <Button className="shadow p-2" onClick={handleShow} ><IoIosAdd className='fs-4' /></Button>
                </div>
                <div className='d-flex'>
                    <div className='d-flex p-2'>
                        <sup>
                            <Badge>{products.length}</Badge>
                        </sup>
                        <CiShoppingCart className='fs-2' />
                    </div>
                    <div className='p-2' onClick={() => {
                        Cookies.remove("token");
                        navigate("/registration");
                    }}>
                        <LuLogOut className='fs-3' />
                    </div>
                </div>
            </div>
        </Container>
    )
}
