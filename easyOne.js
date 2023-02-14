// console.log('js file added elements');
document.getElementById('btn-click').addEventListener('click', function(){
    // console.log('click');
    const newDiscount = document.getElementById('price');
    //  input value off discount
    // const newDiscount = document.getElementById('price');
    // console.log(newDiscount);
    // const newDiscounts = newDiscount.value;
    // heading tag with discount 1000
    const newDiscounts = newDiscount.innerText;
   
    const discount = parseFloat(newDiscounts-(newDiscounts)*0.3);
    console.log(discount);
    // const discountAmount =1000-discount;
    const discountCurrentAmount = document.getElementById('discount');
    const discountCurrent = discountCurrentAmount.innerText;
    const discountTotal = discount + discountCurrentAmount;
    const discountTotals = parseFloat(discountTotal)
    console.log(discountTotals)
    discountCurrentAmount.innerText = discountTotals;

})