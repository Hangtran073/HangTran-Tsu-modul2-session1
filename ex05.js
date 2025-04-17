const evenOdd = (...numbers) => {
    const even = numbers.filter(n => n % 2 === 0);
    const odd = numbers.filter(n => n % 2 !== 0);

    const sumEven = even.reduce((sum, n) => sum + n, 0);
    const sumOdd = odd.reduce((sum, n) => sum + n, 0);

    console.log(`{Even: ${even}. SumEven = ${sumEven}}`);
    console.log(`{Odd: ${odd}. SumOdd = ${sumOdd}}`);

}
evenOdd(1, 2, 3, 4, 5);
evenOdd(1, 2, 3, 4);
evenOdd(1, 2, 3);