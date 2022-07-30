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
import { GetListPromo } from '../../services/Promo';



export default function DenseTable() {

    const [listProducts, setListProducts] = useState([])
    const [listWinetypes, setListWinetypes] = useState([])
    const [listPromos, setListPromos] = useState([])



    useEffect(() => {
        async function fetchListProducts() {
            const getListProducts = GetListProduct().then(res => { return res.data })
            const getListWinetypes = GetListWinetype().then(res => { return res.data })
            const getListPromos = GetListPromo().then(res => { return res.data })


            const promises = [getListProducts, getListWinetypes, getListPromos]

            const [products, winetypes, promos] = await Promise.all(promises)

            setListProducts(products)
            setListWinetypes(winetypes)
            setListPromos(promos)
        }

        fetchListProducts()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên KM</TableCell>
                        <TableCell align="left">Hình ảnh</TableCell>
                        <TableCell align="left">Sản phẩm</TableCell>
                        <TableCell align="left">Giảm</TableCell>
                        


                    </TableRow>
                </TableHead>
                <TableBody>
                    {listPromos.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MAKM}</TableCell>
                            <TableCell align="left">{row.TENKM}</TableCell>
                            <TableCell align="left">{row.HINHANH}</TableCell>
                            <TableCell align="left">{row.GIA}</TableCell>
                            <TableCell align="left">{row.GIAM}</TableCell>
                            {/* {
                                listWinetypes && listWinetypes.map(wineType => {
                                    if (row.MALOAI == wineType.MALOAI) {
                                        return <TableCell align="left">{wineType.TENLOAI}</TableCell>
                                    }
                                })
                            } */}
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
