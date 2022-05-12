const khayamPascal = (numb) => {
    return 11**numb
}
const numb = 2;

for (let i = 1; 1 <= khayamPascal(numb); i++) {
    if (i >= 10) break
    console.log(khayamPascal(i))
}