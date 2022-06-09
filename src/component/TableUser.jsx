import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers,deleteUserRedux } from '../action/actions';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
const TableUser = (props) => {
    // const [listUser, setListUser] = useState();
    const listUser = useSelector((state) => state.user.listUsers)
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)
    const override = css`
    display: block;
    margin:15px 0;
    text-align:center;
    border-color: #36D6B6;
    `;
    // const fetchAllUser = async() => {
    // const response = await axios.get("http://localhost:8080/users/all");
    // const data = response.data ? response.data : []
    //   setListUser(data);
    // }
    useEffect(() => {
        // fetchAllUser();
        dispatch(fetchAllUsers());
    }, [])

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id));
        dispatch(fetchAllUsers());
    }
    return (
        <>
            <div className="container">
                <table className="table table-striped .table-hover">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isError === true ? 
                                <>
                                    <tr>
                                        Something wrongs,please try again...
                                    </tr>
                                </>
                                :
                                <>
                                    {
                                        isLoading === true ?
                                            <>
                                                
                                                <tr className="sweet-loading">
                                                    <td colSpan={4}>
                                                    <BeatLoader color='#36D6B6' loading={isLoading} css={override} />
                                                    </td>
                                                </tr>
                                            </>
                                            :
                                            <>
                                            {
                                                listUser && listUser.length > 0 && listUser.map((item, index) => {
                                                    //sd vong map phai co return
                                                    return (
                                                        <tr key={`user-${index}`}>
                                                        <th scope="row">{ index + 1}</th>
                                                            <td>{item.email}</td>
                                                            <td>{item.username}</td>
                                                            <td>
                                                                <button className='btn btn-warning'>Edit</button>
                                                                <button className='btn btn-danger' onClick={()=>handleDeleteUser(item)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </>
                                    }
                                
                                </>
                        }
                        
                        
                    </tbody>
                </table>
            </div>
            
        </>
    );
}

export default TableUser;
