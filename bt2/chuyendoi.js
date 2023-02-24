function changeMoney(){
    let Amount = document.getElementById("Amount").value;
    let FromC = document.getElementById("From").value;
    let to= document.getElementById("To").value;
    let Result;

    if (FromC == "USD" && to == "VND"){
        Result = "Result:" + (Amount*23000)+ " Đ"
    }
    else if (FromC == "VND" && to == "USD"){
        Result= "Result:" + (Amount/23000) + " $"
    }
    else if (FromC == "VND"){
        Result= "Result:" + Amount + " Đ"
    }
    else {
        Result= "Result:" + Amount + " $"
    }
    document.getElementById("Result").innerHTML= Result
}


