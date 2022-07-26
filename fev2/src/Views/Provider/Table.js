import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'
import { GetListProvider } from '../../services/Provider'
import FormModalEdit from './FormModal-Edit'
import FormModalDelete from './FormModal-Delete'

import { ENUMBODY_TYPES } from '@babel/types';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function DenseTable() {

    
    
    function Edit(data){
        //console.log(MANCC)
        // console.log('d',data.EMAIL)
        React.refModal?.open()
        React.refModal.Edit( data)

        
    }

    function Delete(MANCC) {
        //console.log(MANCC)
        // console.log('d',data.EMAIL)
        React.refModal?.open()

        React.refModal.Delete( MANCC)
        const index = listProviders.findIndex(x => x.MANCC === MANCC)
        console.log(index)
        if(index >= 0) {
            listProviders.splice(index,1)
            setListProviders([...listProviders])
        }

        
    }


    

    const [listProviders, setListProviders] = useState([])


    useEffect(() => {
        async function fetchListProviders() {
            const providers = (await GetListProvider()).data

            setListProviders(providers)
        }

        fetchListProviders()
    }, [])

    
    

    return (

        <TableContainer TableContainer component = { Paper } >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Mã số</TableCell>
                        <TableCell align="left">Tên</TableCell>
                        <TableCell align="left">SĐT</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Địa chỉ</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listProviders.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.MANCC}</TableCell>
                            <TableCell align="left">{row.TENNCC}</TableCell>
                            <TableCell align="left">{row.SDT}</TableCell>
                            <TableCell align="left">{row.EMAIL}</TableCell>
                            <TableCell align="left">{row.DIACHI}</TableCell>
                            <i className="fa fa-user-tie" onClick= {() => Edit(row)} ></i>
                            <i className="fa fa-user-tie" onClick= {() => Delete(row.MANCC)} ></i>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
            <FormModalEdit ref={ref => React.refModal = ref} />
            <FormModalDelete ref={ref => React.refModal = ref} />
            
        </TableContainer>
    );
}
