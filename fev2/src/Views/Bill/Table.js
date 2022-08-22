import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { GetListBill, GetListPD } from "../../services/Bill";
import { GetListCustomer } from "../../services/Customer";
import FormModalEditBill from "./FormModal-Edit";
import FormModalDeleteBill from "./FormModal-Delete";
import { GetListStaff, GetNVGH } from "../../services/Staff";
import { findByState } from "../../services/Phieudat";

export default function DenseTable(props) {
    
    const listPds = props.list
    const [listCustomers, setListCustomers] = useState([]);
    const [listNVGH,setListNVGH] = useState([])


    

    useEffect(() => {
        async function fetchListCus() {
            const getcustomers = (await GetListCustomer()).data;
            const getListNVGH = (await GetNVGH()).data
            const promises = [getcustomers, getListNVGH];

            const [customers, nvghs] = await Promise.all(promises);
            // console.log(staffs)
            // console.log(listPds)
            console.log(nvghs)
            setListCustomers(customers);
            setListNVGH(nvghs)

            
        }

        fetchListCus();
    }, []);

    
    function Edit(data) {
        //console.log(data)
        React.refModalEditBill?.open();
        React.refModalEditBill.Edit(data);
    }

    function Delete(MAPD, listNVGH ,data) {
        React.refModalDeleteBill?.open();
        React.refModalDeleteBill.Delete(MAPD,listNVGH, data);

    }
    const totalCTPD = (list) => {
        let total = 0
        list.map(cur => {
            total += cur.GIA 
        })
        
        return total.toFixed(2)
    }

    const renderNV = (staff) => {
        if(!staff){
            return (
                <TableCell align="left"></TableCell>
            )
        }
        else{
            return (
                <TableCell align="left">{staff.HO.concat(' ').concat(staff.TEN)}</TableCell>
            )
        }
    }

    const renderNVGH = (MANVGH) => {
        if(!MANVGH || MANVGH.length === 0){
            return (
                <TableCell align="left"></TableCell>
            )
        }
        else{
            let staffTemp = {}
            console.log('in',listNVGH)
            listNVGH && listNVGH.map(cur => {
                if(cur.MANV === MANVGH){
                    console.log('cur',cur)
                    staffTemp = cur
                }
            })
            return (
                <TableCell align="left">{staffTemp.HO.concat(' ').concat(staffTemp.TEN)}</TableCell>
            )
        }
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã số</TableCell>
                            <TableCell align="left">Ngày</TableCell>
                            <TableCell align="left">Thông tin người đặt</TableCell>
                            <TableCell align="left">NV duyệt</TableCell>
                            <TableCell align="left">NV giao</TableCell>
                            <TableCell align="left">Trạng thái</TableCell>
                            <TableCell align="left">Tổng tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {listPds && listPds.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.MAPD}
                                </TableCell>
                                <TableCell align="left">{row.NGAYDAT}</TableCell>
                                <TableCell align="left">
                                    <TableRow align="left">
                                        Họ & tên: {row.HONN.concat(" ").concat(row.TENNN)}
                                    </TableRow>
                                    <TableRow align="left">Địa chỉ: {row.DIACHINN}</TableRow>
                                    <TableRow align="left">SĐT: {row.SDTNN}</TableRow>
                                    {listCustomers &&
                                        listCustomers.map((customer) => {
                                            if (row.MAKH == customer.MAKH) {
                                                return (
                                                    <TableRow align="left">
                                                        Email: {customer.EMAIL}
                                                    </TableRow>
                                                );
                                            }
                                        })}
                                </TableCell>
                                
                                {renderNV(row.staff)}
                                {renderNVGH(row.MANVGH)}
                               
                                
                                
                                <TableCell align="left">{row.TRANGTHAI}</TableCell>
                                <TableCell align="left">{totalCTPD(row.ct_phieudats)} $</TableCell>
                                <TableCell align="left">

                                <i
                                    className="fa fa-search"
                                    style={{ paddingRight: "10px" }}
                                    onClick={() => Edit(row)}
                                ></i>
                                <i
                                    className="fas fa-pencil-alt"
                                    onClick={() => Delete(row.MAPD, listNVGH, row)}
                                ></i>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <FormModalEditBill ref={(ref) => (React.refModalEditBill = ref)} />
                <FormModalDeleteBill ref={(ref) => (React.refModalDeleteBill = ref)} listNVGH={listNVGH} />
            </TableContainer>
        </>
    );
}
