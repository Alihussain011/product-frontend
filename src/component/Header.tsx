import { useState } from 'react'
import { Container, InputGroup, Form, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaSearch } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { LuLogOut } from 'react-icons/lu';
import { SlReload } from "react-icons/sl";

import { getProducts, searchProduct } from '../redux/action/action';

import eCommerceSvg from "../assets/eCommerce.svg"
import Cookies from 'js-cookie';

export const Header = ({ handleShow }: any) => {
    const navigate = useNavigate();

    const products = useSelector((state: any) => (state.products));
    const dispatch = useDispatch();
    const [searchValue, SetSearchValue] = useState("");
    return (
        <Container fluid className='bg-warning m-0 p-0'>
            <div className='p-3 d-flex justify-content-between align-items-center'>
                <div className=' d-flex'>
                    <span className='p-1 '><img src={eCommerceSvg} /></span><h1 className=''>Products</h1>
                </div>
                <div className='d-flex gap-3 '>
                    <InputGroup className="shadow rounded">
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

                    <Button className="shadow p-2" onClick={()=>{console.log("add click");handleShow()}} ><IoIosAdd className='fs-4' /></Button>

                    <Button onClick={async () => {
                        dispatch(await getProducts());
                    }}><SlReload/></Button>
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
                        navigate("/registration/login");
                    }}>
                        <LuLogOut className='fs-3' />
                    </div>
                </div>
            </div>
        </Container>
    )
}
