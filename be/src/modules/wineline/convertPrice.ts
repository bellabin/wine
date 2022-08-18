export const convertPrice = (gia, percent) => {
    
    return (gia - gia*percent ).toFixed(2)
}

export const checkKm = (listKM) => {
    return convertKm(listKM) + "%";
};

export const convertKm = (listKm) => {
    return (listKm && listKm[0] && listKm[0].PHANTRAMGIAM) ?
        listKm[0].PHANTRAMGIAM : 0;
}

export const fixedPrice = (price) => {
    return price.toFixed(2);
}

export const toDecimal = (percent) => {
    return parseFloat(percent) / 100;
  }



export const checkPrice = (list) => {
    
    let NGAY = list[0].NGAYTHAYDOI
    let GIA = list[0].GIA
    list.forEach(cPrice => {
        if(cPrice.NGAYTHAYDOI > NGAY){
            NGAY = cPrice.NGAYTHAYDOI
            GIA = cPrice.GIA
        }
    })
    return GIA
};

export const checkRating = (list) => {
    let numB = 0
    let count = 0
    list.map(cur => {
        numB += cur.RATING
        count++
    })
    // console.log('numb:',numB/count)
    return numB/count
}


