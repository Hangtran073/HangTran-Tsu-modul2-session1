//r: bán kính hình tròn
//d: đường kính

//tính chu vi
const chuVi = (r) => {
    return 2 * Math.PI * r;
}

const resultC = chuVi(7);
console.log(`chu vi: ${resultC.toFixed(2)}`);

//tính diện tích hình tròn

const dientich=(r)=> Math.PI*r**2;
const resultS=dientich(7);
console.log(`diện tích: ${resultS.toFixed(2)}`);



