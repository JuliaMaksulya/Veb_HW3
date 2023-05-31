const temC = Number.parseFloat(prompt("Введите температуру В градусах Цельсия"));

alert(temF(temC).toFixed(1))

function temF(arg1) 
{
    return (9/5) * arg1 + 32;
}