let product_Total_Amt = document.getElementById("product_total_amt");

let total_Cart_Amt = document.getElementById("total_cart_amt");

let shipping_Charge = document.getElementById("shipping_charge");

let discount_Code = document.getElementById("discount_code1");

let decreaseNumber = (incdec, itemPrice) => {

    let itemVal = document.getElementById(incdec);

    var itemPrice = document.getElementById(itemPrice);

    if (itemVal.value <= 0) {

        itemVal.value = 0;

        alert("Negative Value Is Not Allowed")

    } else {

        itemVal.value = parseInt(itemVal.value) - 1;

        itemVal.style.background = "#fff";

        itemVal.style.color = "#000";

        itemPrice.innerHTML = parseInt(itemPrice.innerHTML) - 15;

        product_Total_Amt.innerHTML = parseInt(product_Total_Amt.innerHTML) - 15;

        total_Cart_Amt.innerHTML = parseInt(product_Total_Amt.innerHTML) + parseInt(shipping_Charge.innerHTML);

    };

};

let increaseNumber = (incdec, itemPrice) => {

    let itemVal = document.getElementById(incdec);

    var itemPrice = document.getElementById(itemPrice);

    if (itemVal.value >= 5) {

        itemVal.value = 5;

        alert("Maximum 5 Values Are Allowed");

        itemVal.style.background = "red";

        itemVal.style.color = "#fff";

    } else {

        itemVal.value = parseInt(itemVal.value) + 1;

        itemPrice.innerHTML = parseInt(itemPrice.innerHTML) + 15;

        product_Total_Amt.innerHTML = parseInt(product_Total_Amt.innerHTML) + 15;

        total_Cart_Amt.innerHTML = parseInt(product_Total_Amt.innerHTML) + parseInt(shipping_Charge.innerHTML);

    };

};

let discount_code = () => {

    let totalAmtCurrent = parseInt(total_Cart_Amt.innerHTML);

    let error_Through = document.getElementById("error_trw");

    if (discount_Code.value === "Web_Dev") {

        let newTotalAmt = totalAmtCurrent - 15;

        total_Cart_Amt.innerHTML = newTotalAmt;

        error_Through.innerHTML = "Congratulations! Your Code Is Valid.";

        discount_Code.classList.add("success");

    } else {

        error_Through.innerHTML = "TryAgain! The Valid Code Is Web_Dev.";

        discount_Code.classList.add("danger");

    };

};

