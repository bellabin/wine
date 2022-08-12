import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import {
  GetListProduct,
  GetWinetypeById,
  GetListWinetype,
} from "../../services/Product";
import { GetListRevProduct } from "../../services/rev";
import { useState, useEffect } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Box, Button } from "@mui/material";
import * as moment from "moment";

export default function DenseTable() {
  const [fromTime, setFromTime] = React.useState(
    new Date("2022-07-18T21:11:54")
  );
  const [toTime, setToTime] = React.useState(new Date());
  const [stt, setStt] = useState(1);
  const [listRev, setListRev] = useState([]);

  const handleFromTime = (time) => {
    setFromTime(time);
    //console.log(fromTime)
  };
  const handleToTime = (time) => {
    setToTime(time);
    //console.log(toTime)
  };

  const handleRev = (fromTime, toTime) => {
    const vFromTime = moment(fromTime).format("YYYY-MM-DD");
    const vToTime = moment(toTime).format("YYYY-MM-DD");
    setStt(1);
    GetListRevProduct(vFromTime, vToTime).then((res) => {
      res.data.stt = stt
      setListRev(res.data);
      setStt(stt++)
    });
    
    
  };
  return (
    <>
      <Box display="flex" gap={1}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="From"
            inputFormat="MM/dd/yyyy"
            value={fromTime}
            onChange={handleFromTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="To"
            inputFormat="MM/dd/yyyy"
            value={toTime}
            onChange={handleToTime}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button
            variant="outlined"
            style={{ marginLeft: "30px" }}
            onClick={(e) => handleRev(fromTime, toTime)}
          >
            Lọc
          </Button>
        </LocalizationProvider>
      </Box>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "10%" }}>STT</TableCell>
              <TableCell style={{ width: "35%" }} align="left">
                Tên dòng
              </TableCell>
              <TableCell style={{ width: "40%" }} align="left">
                Hình ảnh
              </TableCell>
              <TableCell style={{ width: "15%" }} align="left">
                Số lượng bán
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {listRev.map((item) => (
              <TableRow>
                <TableCell style={{ width: "10%" }}>{item.stt}</TableCell>
                <TableCell style={{ width: "35%" }} align="left">
                  {item.TENDONG}
                </TableCell>
                <TableCell style={{ width: "40%" }} align="left">
                <img
                        src={"../../../".concat(item.HINHANH)}
                        width={"18%"}
                        height={"auto"}
                      />
                </TableCell>
                <TableCell style={{ width: "15%" }} align="left">
                  {item.so_luong_ban}
                </TableCell>
              </TableRow>
            )
          )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
