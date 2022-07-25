import React from 'react'

export default function ImportProductPage() {
  return (
    <div>
        <div>
      <h1 style={{background: 'rgb(177, 177, 177)', paddingLeft: '650px'}}>
        Nhập kho
      </h1>
      <p>
        Vui lòng chọn file Excel để tiến hành import. Định dạng file là
        <span style={{color: 'red'}}>.xlsx</span> hoặc
        <span style={{color: 'red'}}>.xls</span>
      </p>
      <input
        type="file"
        id="input"
        accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      />
      <div className="container" style={{maxWidth: '1100px', margin: '0 auto'}}></div>
      <div className="company-name" id="company"></div>
      <form action="/quan-tri/nhaphang" method="post" onsubmit="checkidorder()">
        <div className="row" id="list-import">
          {/* <!-- <div className="col-md-6">
            <input
              className="form-control"
              name="arrImport"
              id="list-import"
              type="text"
              placeholder="list"
              value=""
            />
          </div> --> */}
        </div>
        <div className="col-sm-12" id="button-confirm"></div>
      </form>
      <div id="result"></div>
      <table id="grid1"></table>
    </div>

    <script>
      function checkidorder(id) {
        var listorder = [];
        window
          .fetch("http://localhost:3000/quan-tri/api/all-ddh")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            const checkid = (obj) => obj.MADDH === id;
            if (data.some(checkid) === false) {
              $(".button-confirm").empty();
              const div = document.getElementById("button-confirm");
              let str = ``;
              str = `<h3 style={{color:'red'}}>Mã đơn đặt hàng không tồn tại. Kiểm tra lại thông tin phiếu nhập!!!</h3>`;
              div.innerHTML += str;
              // document.getElementById("confirm-import").style.visibility = "hidden";
            } else {
              $(".button-confirm").empty();
              const div = document.getElementById("button-confirm");
              let str = ``;
              str = `
          <button
            id="comfirm-import"
            style="
              background: cadetblue;
              margin-top: 20px;
              padding: 5px 5px;
              margin-bottom: 20px;
            "
            onclick="alert('Hoàn tất nhập hàng!')"
          >
            Xác nhận nhập hàng
          </button>`;
              div.innerHTML += str;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }

      $(function () {
        $("#input").on("change", function () {
          var excelFile,
            fileReader = new FileReader();

          $("#result").hide();

          fileReader.onload = function (e) {
            var buffer = new Uint8Array(fileReader.result);

            $.ig.excel.Workbook.load(
              buffer,
              function (workbook) {
                var column,
                  row,
                  newRow,
                  cellValue,
                  columnIndex,
                  i,
                  worksheet = workbook.worksheets(0),
                  columnsNumber = 0,
                  gridColumns = [],
                  data = [],
                  worksheetRowsCount,
                  idcoupon,
                  idorder,
                  date,
                  company;

                // Both the columns and rows in the worksheet are lazily created and because of this most of the time worksheet.columns().count() will return 0
                // So to get the number of columns we read the values in the first row and count. When value is null we stop counting columns:
                while (worksheet.rows(10).getCellValue(columnsNumber)) {
                  columnsNumber++;
                }

                //read the order id
                idorder = worksheet.rows(1).getCellText(5);
                console.log(`day la ddh : ${idorder}`);
                //read the coupon
                idcoupon = worksheet.rows(6).getCellText(4);
                console.log(`day la ma phieu: ${idcoupon}`);
                //read date
                date = worksheet.rows(7).getCellText(5);
                console.log(`day la ngay lap: ${valid_Date(date)}`);
                //read company
                company = worksheet.rows(0).getCellText(0);
                addr = worksheet.rows(1).getCellText(0);
                console.log(`day la cong ty: ${company}`);
                console.log(`day la dia chi ${addr}`);

                // Iterating through cells in first row and use the cell text as key and header text for the grid columns
                for (
                  columnIndex = 0;
                  columnIndex < columnsNumber;
                  columnIndex++
                ) {
                  column = worksheet.rows(9).getCellText(columnIndex);
                  gridColumns.push({
                    headerText: column,
                    key: loc_xoa_dau(column),
                  });
                }

                // We start iterating from 1, because we already read the first row to build the gridColumns array above
                // We use each cell value and add it to json array, which will be used as dataSource for the grid
                var flag = 0;
                for (
                  i = 10, worksheetRowsCount = worksheet.rows().count();
                  i < worksheetRowsCount;
                  i++
                ) {
                  newRow = {};
                  row = worksheet.rows(i);
                  for (
                    columnIndex = 0;
                    columnIndex < columnsNumber;
                    columnIndex++
                  ) {
                    cellValue = row.getCellText(columnIndex);
                    if (cellValue !== "") {
                      newRow[gridColumns[columnIndex].key] =
                        loc_xoa_dau(cellValue);
                    } else flag = 1;
                  }
                  if (flag === 0) {
                    data.push(newRow);
                  }
                }

                // we can also skip passing the gridColumns use autoGenerateColumns = true, or modify the gridColumns array
                createGrid(data, gridColumns);
                renderlistimport(data, idorder, idcoupon, date);
                checkidorder(idorder);
                rendercompany(company, addr);
                console.log(gridColumns);
              },
              function (error) {
                $("#result").text("The excel file is corrupted.");
                $("#result").show(1000);
              }
            );
          };

          if (this.files.length > 0) {
            excelFile = this.files[0];
            if (
              excelFile.type === "application/vnd.ms-excel" ||
              excelFile.type ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
              (excelFile.type === "" &&
                (excelFile.name.endsWith("xls") ||
                  excelFile.name.endsWith("xlsx")))
            ) {
              fileReader.readAsArrayBuffer(excelFile);
            } else {
              $("#result").text(
                "Định dạng file không hỗ trợ. Vui lòng chọn file excel có định dạng sau ('.xls, *.xlsx')."
              );
              $("#result").show(1000);
            }
          }
        });
      });

      function createGrid(data, gridColumns) {
        console.log(data);
        if ($("#grid1").data("igGrid") !== undefined) {
          $("#grid1").igGrid("destroy");
        }

        $("#grid1").igGrid({
          columns: gridColumns,
          autoGenerateColumns: true,
          dataSource: data,
          width: "100%",
        });
      }

      function rendercompany(company, addr) {
        $(".company").empty();
        const div = document.getElementById("company");
        let str = ``;

        str = `<h1 style="margin-left:500px">${company}</h1>
                   <h3 style="margin-left:530px">${addr}</h3>`;

        div.innerHTML += str;
      }

      function renderlistimport(data, idorder, idcoupon, date) {
        var listimport = JSON.stringify(data);
        var idnv = localStorage.getItem("recentadmin");
        $(".list-import").empty();
        const div = document.getElementById("list-import");
        let str = ``;

        str = `<div className="col-md-6">
          <input
            className="form-control"
            name="arrImport"
            id="list-import"
            type="hidden"
            placeholder="list"
            value='${listimport}'

          />
        </div>
        <div className="col-md-6" style="margin-top:30px">
          <label for="name" style="font-weight: 800">Mã đơn đặt hàng:</label>
          <input
            className="form-control"
            name="idorder"
            id="maddh"
            type="text"
            placeholder="list"
            value='${idorder}'

          />
        </div>
        <div className="col-md-6">
          <label for="name" style="font-weight: 800">Mã phiếu nhập:</label>
          <input
            className="form-control"
            name="idcoupon"
            id="mapn"
            type="text"
            placeholder="list"
            value='${idcoupon}'
            style="margin-left:13px"
          />
        </div>
        <div className="col-md-6">
          <input
            className="form-control"
            name="idnv"
            id="manv"
            type="hidden"
            placeholder="list"
            value='${idnv}'
          />
        </div>
        <div className="col-md-6">
          <label for="name" style="font-weight: 800">Ngày lập:</label>
          <input
            className="form-control"
            name="date"
            id="ngaylap"
            type="text"
            placeholder="list"
            value='${valid_Date(date)}'
            style="margin-left:55px"
          />
        </div>`;

        div.innerHTML += str;
      }

      function loc_xoa_dau(str) {
        // Gộp nhiều dấu space thành 1 space
        str = str.replace(/\s+/g, "");
        // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
        str = str.trim();
        // bắt đầu xóa dấu tiếng việt  trong chuỗi
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
      }

      function valid_Date(str) {
        str = str.replace(/-/g, "/");

        return str;
      }
    </script>

    </div>
  )
}
