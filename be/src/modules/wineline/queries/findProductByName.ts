const findProductByNameQuery = `
    SELECT * from dongruou d WHERE INSTR(d.TENDONG, ?) > 0;
`

export default findProductByNameQuery
