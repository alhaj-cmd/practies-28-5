document.getElementById('btn-click').addEventListener('click', function(){
    // console.log('click');
    const newDiscount = document.getElementById('price');
    //  input value off discount
    const newDiscountValue = document.getElementById('prices');
    // console.log(newDiscount);
    const newDiscountBalance = newDiscountValue.value;
    // heading tag with discount 1000
   
    const newDiscounts = newDiscount.innerText;
    if(newDiscountBalance =='DISC30'){
        newDiscountValue.value = ' ';
        // console.log('hello');
        const discount = parseFloat(1000-(newDiscounts)*0.3);
        // console.log(discount);
        const discountCurrentAmount = document.getElementById('discount');
        const discountCurrent = discountCurrentAmount.innerText;
        // console.log(discountCurrent)
        const discountTotals = parseFloat(discountCurrent)
        // console.log(discountTotals)
        const discountTotal = discount + discountTotals;
        // console.log(discountTotal)
        discountCurrentAmount.innerText = discountTotal;
    }
    else{
        alert('It is not validation. please!! correct your Text');
        newDiscountValue.value = ' ';
        const discounts = newDiscount;
        const discount =parseFloat(discounts);
        console.log(discount);
        const discountCurrentAmount = document.getElementById('discount');
        const discountCurrent = discountCurrentAmount.innerText;
        const discountTotal = discount + discountCurrent;
        const discountTotals = parseFloat(discountTotal)
        console.log(discountTotals)
        discountCurrentAmount.innerText = discountTotals;
    }
    // const newDiscounts = newDiscount.innerText;
   
    // const discount = parseFloat(1000-(newDiscounts)*0.3);
    // console.log(discount);
    // const discountAmount =1000-discount;
    // const discountCurrentAmount = document.getElementById('discount');
    // const discountCurrent = discountCurrentAmount.innerText;
    // const discountTotal = discount + discountCurrentAmount;
    // const discountTotals = parseFloat(discountTotal)
    // console.log(discountTotals)
    // discountCurrentAmount.innerText = discountTotals;

})