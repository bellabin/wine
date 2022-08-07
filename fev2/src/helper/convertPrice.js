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