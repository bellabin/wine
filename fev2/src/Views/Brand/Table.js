import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {GetListBrand} from '../../services/Brand'
import { useState, useEffect } from 'react'



export default function DenseTable() {


    const [listBrands, setListWineTypes] = useState([])


    useEffect(() => {
        async function fetchListBrands() {
            const brands = (await GetListBrand()).data

            setListWineTypes(brands)
        }

        fetchListBrands()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên thương hiệu</TableCell>
                        
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listBrands.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MATH}</TableCell>
                            <TableCell align="left">{row.TENTH}</TableCell>
                            
                            {/* <i className="fa fa-user-tie" onClick= {() => Edit(row)} ></i>
                            <i className="fa fa-user-tie" onClick= {() => Delete(row.MANCC)} ></i> */}
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
        </TableContainer>
    );
}
