import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react'
import { GetListBill, GetListPD } from '../../services/Bill'
import { GetListCustomer } from '../../services/Customer'
import FormModalEditBill from './FormModal-Edit';
import FormModalDeleteBill from './FormModal-Delete';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";




export default function DenseTable() {

  const [state,setState] = useState('TAT_CA');

  const handleChange = (e) => {
    setState(e.target.value );
    
  };
    function Edit(data){
        
        //console.log(data)
        React.refModalEditBill?.open()
        React.refModalEditBill.Edit( data)

        
    }

    function Delete(MAHD) {
        React.refModalDeleteBill?.open()
        React.refModalDeleteBill.Delete( MAHD)

        const index = listBills.findIndex(x => x.MAHD === MAHD)
        console.log(index)
        if(index >= 0) {
            listBills.splice(index,1)
            setListBills([...listBills])
        }

        
    }




    const [listBills, setListBills] = useState([])
    const [listPD, setListPD] = useState([])

    const [listCustomers,setListCustomers] = useState([])

    useEffect(() => {
        async function fetchListBills() {
            const getbills = (await GetListBill()).data
            const getpds = (await GetListPD()).data
            const getcustomers = (await GetListCustomer()).data

            const promises = [getbills, getpds, getcustomers]

            const [bills, pds, customers] = await Promise.all(promises)
            setListBills(bills)
            setListPD(pds)
            setListCustomers(customers)
        }

        fetchListBills()
    }, [])

    return (
        <TableContainer component={Paper}>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label=" "
            onChange={handleChange}
          >
            <MenuItem value={0}>TAT_CA</MenuItem>
            <MenuItem value={1}>CHUA_DUYET</MenuItem>
            <MenuItem value={2}>DA_DUYET</MenuItem>
          </Select>
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
                            <TableCell align="left">{row.NGAY}</TableCell>
                            {
                                listPD && listPD.map(PD => {

                                    if (row.phieudat.MAPD == PD.MAPD) {
                                        //console.log('match')
                                        return <TableCell align="left">
                                        <TableRow align="left">Họ & tên: {PD.HONN.concat(PD.TENNN)}</TableRow>
                                        <TableRow align="left">Địa chỉ: {PD.DIACHINN}</TableRow>
                                        <TableRow align="left">SĐT: {PD.SDTNN}</TableRow>
                                        {listCustomers && listCustomers.map(customer => {
                                            if(PD.MAKH == customer.MAKH) {
                                                return <TableRow align="left">Email: {customer.EMAIL}</TableRow>
                                            }
                                        })}
                                        </TableCell>
                                    }
                                })
                            }
                            {/* {console.log(row.TRANGTHAI)} */}
                            <TableCell align="left">{row.TRANGTHAI}</TableCell>
                            <TableCell align="left">{row.THANHTIEN}</TableCell>
                            <i className="fas fa-pencil-alt" style={{paddingRight:'10px'}} onClick={()=>Edit(row)} ></i>
                            <i className="fas fa-trash-alt"  onClick= {() => Delete(row.MAHD)} ></i>
                        </TableRow>
                    ))}
                    
                </TableBody>
            </Table>
            <FormModalEditBill ref={ref => React.refModalEditBill = ref} />
            <FormModalDeleteBill ref={ref => React.refModalDeleteBill = ref} />
        </TableContainer>
    );
}
