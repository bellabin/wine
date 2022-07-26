import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetListPromo, GetPromoById } from '../../services/Promo';
import { useState, useEffect } from 'react'


export default function DenseTable() {

    const [listPromos, setListPromos] = useState([])


    useEffect(() => {
        async function fetchListPromos() {
            const promos = (await GetListPromo()).data

            setListPromos(promos)
        }

        fetchListPromos()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên KM</TableCell>
                        <TableCell align="left">Ngày bắt đầu</TableCell>
                        <TableCell align="left">Ngày kết thúc</TableCell>
                        <TableCell align="left">Lý Do</TableCell>
                        <TableCell align="left">Mã NV</TableCell>


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
                            <TableCell align="left">{row.NGAYBATDAU}</TableCell>
                            <TableCell align="left">{row.NGAYKETTHUC}</TableCell>
                            <TableCell align="left">{row.LIDO}</TableCell>
                            <TableCell align="left">{row.MANV}</TableCell>

                            {/* <i className="fa fa-user-tie" onClick= {() => Edit(row)} ></i>
                            <i className="fa fa-user-tie" onClick= {() => Delete(row.MANCC)} ></i> */}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
