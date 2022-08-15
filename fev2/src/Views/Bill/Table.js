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
import { findByState } from "../../services/Phieudat";

export default function DenseTable(props) {
    
    const filter = props.filter

    const [listBills, setListBills] = useState([]);
    const [listPD, setListPD] = useState([]);
    const [listCustomers, setListCustomers] = useState([]);

    useEffect(() => {
        async function fetchListBills() {
            const getbills = (await GetListBill()).data;
            const getpds = (await findByState(filter)).data;
            const getcustomers = (await GetListCustomer()).data;

            const promises = [getbills, getpds, getcustomers];

            const [bills, pds, customers] = await Promise.all(promises);
            setListBills(bills);
            setListPD(pds);
            setListCustomers(customers);
        }

        fetchListBills();
    }, []);
    findByState(filter).then(res => {
        console.log(res.data)
        setListPD(res.data)
    })
    function Edit(data) {
        //console.log(data)
        React.refModalEditBill?.open();
        React.refModalEditBill.Edit(data);
    }

    function Delete(MAHD) {
        React.refModalDeleteBill?.open();
        React.refModalDeleteBill.Delete(MAHD);

        const index = listBills.findIndex((x) => x.MAHD === MAHD);
        console.log(index);
        if (index >= 0) {
            listBills.splice(index, 1);
            setListBills([...listBills]);
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
                            <TableCell align="left">Trạng thái</TableCell>
                            <TableCell align="left">Tổng tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {listPD.map((row) => (
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

                                <TableCell align="left">{row.TRANGTHAI}</TableCell>
                                <TableCell align="left">{row.THANHTIEN}</TableCell>
                                <i
                                    className="fas fa-pencil-alt"
                                    style={{ paddingRight: "10px" }}
                                    onClick={() => Edit(row)}
                                ></i>
                                <i
                                    className="fas fa-trash-alt"
                                    onClick={() => Delete(row.MAHD)}
                                ></i>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <FormModalEditBill ref={(ref) => (React.refModalEditBill = ref)} />
                <FormModalDeleteBill ref={(ref) => (React.refModalDeleteBill = ref)} />
            </TableContainer>
        </>
    );
}
