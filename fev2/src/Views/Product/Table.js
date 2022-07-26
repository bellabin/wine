import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetListProduct, GetWinetypeById, GetListWinetype } from '../../services/Product'
import { useState, useEffect } from 'react'


export default function DenseTable() {


    const [state, setState] = useState('')

    async function getWinetypeById(id) {
        const res = await GetWinetypeById(id)

        const name = res.data.TENLOAI

        console.log('res', name)
        setState(name)

        console.log('state', state)


        //return state.data.TENLOAI
    }


    const [listProducts, setListProducts] = useState([])
    const [listWinetypes, setListWinetypes] = useState([])

    useEffect(() => {
        async function fetchListProducts() {
            const getListProducts = GetListProduct().then(res => { return res.data })
            const getListWinetypes = GetListWinetype().then(res => { return res.data })

            const promises = [getListProducts, getListWinetypes]
            
            const [products, winetypes] = await Promise.all(promises)

            setListProducts(products)
            setListWinetypes(winetypes)
        }

        fetchListProducts()
    }, [])

    /////







    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên dòng</TableCell>
                        <TableCell align="left">Hình ảnh</TableCell>
                        <TableCell align="left">Giá</TableCell>
                        <TableCell align="left">Số lượng</TableCell>
                        <TableCell align="left">Loại</TableCell>
                        <TableCell align="left">Thương hiệu</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {listProducts.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MADONG}</TableCell>
                            <TableCell align="left">{row.TENDONG}</TableCell>
                            <TableCell align="left">{row.HINHANH}</TableCell>
                            <TableCell align="left">{row.GIA}</TableCell>
                            <TableCell align="left">{row.SOLUONGTON}</TableCell>
                            {
                                listWinetypes && listWinetypes.map(wineType => {
                                    if (row.MALOAI == wineType.MALOAI) {
                                        return <TableCell align="left">{wineType.TENLOAI}</TableCell>
                                    }
                                })
                            }
                            <TableCell align="left">{row.MATH}</TableCell>

                            {/* <i className="fa fa-user-tie" onClick= {() => Edit(row)} ></i>
                            <i className="fa fa-user-tie" onClick= {() => Delete(row.MANCC)} ></i> */}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
