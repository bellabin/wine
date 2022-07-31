export const convertPrice = (gia, percent) => {
    return (gia - gia*percent ).toFixed(2)
}