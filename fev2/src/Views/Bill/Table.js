import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'
import { GetListBill } from '../../services/Bill'



export default function DenseTable() {

    const [listBills, setListBills] = useState([])


    useEffect(() => {
        async function fetchListBills() {
            const bills = (await GetListBill()).data
            // console.log(bills)
            setListBills(bills)
        }

        fetchListBills()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Ngày</TableCell>
                        <TableCell align="left">Thông tin người đặt</TableCell>
                        <TableCell align="left">Trạng thái</TableCell>
                        <TableCell align="left">Tổng tiền</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listBills.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MAHD}</TableCell>
                            <TableCell align="left">{row.TENNCC}</TableCell>
                            <TableCell align="left">{row.SDT}</TableCell>
                            <TableCell align="left">{row.EMAIL}</TableCell>
                            <TableCell align="left">{row.THANHTIEN}</TableCell>
                            {/* <i className="fa fa-user-tie" onClick= {() => Edit(row)} ></i>
                            <i className="fa fa-user-tie" onClick= {() => Delete(row.MANCC)} ></i> */}
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}
