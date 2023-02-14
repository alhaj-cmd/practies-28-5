document.getElementById('btn-click').addEventListener('click', function(){
    // console.log('click');
    const newDiscount = document.getElementById('price');
    //  input value off discount
    const newDiscountValue = document.getElementById('prices');
    // console.log(newDiscount);
    const newDiscountBalance = newDiscountValue.value;
    // heading tag with discount 1000
   
    const newDiscounts = newDiscount.innerText;
    if(newDiscountBalance =='DISC30' ){
        newDiscountValue.value = ' ';
        // console.log('hello');
        const discount = parseFloat(1000-(newDiscounts)*0.3);
        // console.log(discount);
        const discountCurrentAmount = document.getElementById('discount');
        const discountCurrent = discountCurrentAmount.innerText;
        // console.log(discountCurrent)
        // discountCurrentAmount.innerText =' ';
        const discountTotals = parseFloat(discountCurrent)
        // console.log(discountTotals)
        const discountTotal = discount + discountTotals;
        // console.log(discountTotal)
        discountCurrentAmount.innerText = discountTotal;
        
        
    }
    else{
        alert('It is not validation. please!! correct your Text');
        newDiscountValue.value = ' ';
        // console.log('ami asi')
        const discount = parseFloat(newDiscounts);
        // console.log(discount);
        const discountCurrentAmount = document.getElementById('discount');
        const discountCurrent = discountCurrentAmount.innerText;
        // console.log(discountCurrent)
        // discountCurrentAmount.innerText = ' ';
        const discountTotals = parseFloat(discountCurrent)
        // console.log(discountTotals)
        const discountTotal = discount + discountTotals;
        // console.log(discountTotal)
        discountCurrentAmount.innerText = discountTotal;
        // discountCurrentAmount.innerText = ' ';
        
       
    }

})