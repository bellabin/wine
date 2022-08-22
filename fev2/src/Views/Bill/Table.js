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
import { GetListStaff, GetNVGH, GetStaffById } from "../../services/Staff";
import { findByState } from "../../services/Phieudat";

export default function DenseTable(props) {
    
    
    const listPds = props.list
    const [listCustomers, setListCustomers] = useState([]);
    const [listNVGH,setListNVGH] = useState([])
    const listNVGH1 =  GetNVGH() 

    
    // const listNVGH = props.listNVGH


    

    useEffect(() => {
        async function fetchListCus() {
             GetListCustomer().then((res) => {
                console.log(res.data)
                setListCustomers(res.data);
            }
            )
            GetNVGH().then((res) => {
                    setListNVGH(res.data);
                }
            )
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
        console.log('GH',MANVGH)
        if(!MANVGH || MANVGH.length === 0){
            return (
                <TableCell align="left"></TableCell>
            )
        }
        else{
            let staff = listNVGH.find(item => item.MANV === MANVGH)
            return (
                <TableCell align="left">{staff.HO.concat(' ').concat(staff.TEN)}</TableCell>
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
