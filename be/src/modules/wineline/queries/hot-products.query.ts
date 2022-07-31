const HotProductQuery = `
    SELECT * FROM ((SELECT * FROM (Select ct.MADONG as MD, sum(ct.SOLUONG) as so_luong_ban,ct.TRANGTHAI as TTSP 
    FROM ct_phieudat as ct,phieudat as pd WHERE ct.TRANGTHAI = 'Đã giao' and pd.MAPD = ct.MAPD and pd.NGAYDAT >= (curdate() - INTERVAL 30 DAY)
        group by MADONG ) as ct,dongruou as d 
        WHERE ct.MD = d.MADONG and d.SOLUONGTON > 0
        order by so_luong_ban DESC LIMIT 10)) as d
        left join 
    (SELECT ct.MADONG as SPKM,km.NGAYBATDAU,km.NGAYKETTHUC,ct.PHANTRAMGIAM 
    FROM ct_khuyenmai as ct,khuyenmai as km 
    WHERE ct.MAKM = km.MAKM and CURDATE() >= km.NGAYBATDAU and CURDATE() <= km.NGAYKETTHUC) as ct on d.MADONG = ct.SPKM
`

export default HotProductQuery
