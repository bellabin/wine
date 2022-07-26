import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetListWinetype } from '../../services/Product';
import { useState, useEffect } from 'react'




export default function DenseTable() {

    const [listWineTypes, setListWineTypes] = useState([])


    useEffect(() => {
        async function fetchListWineTypes() {
            const winetypes = (await GetListWinetype()).data

            setListWineTypes(winetypes)
        }

        fetchListWineTypes()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên loại rượu</TableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listWineTypes.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MALOAI}</TableCell>
                            <TableCell align="left">{row.TENLOAI}</TableCell>
                            
                            {/* <i className="fa fa-user-tie" onClick= {() => Edit(row)} ></i>
                            <i className="fa fa-user-tie" onClick= {() => Delete(row.MANCC)} ></i> */}
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}
