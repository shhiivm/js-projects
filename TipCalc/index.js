function tipCalculate(){
    const amount = document.querySelector('#amount').value;
    const service = document.querySelector('#serviceQuality').value;
    const members = document.querySelector('#peoples').value;

    var tip  = amount*service;
    var text;

    if(amount == " "|| service == " "|| members <= 0){
        text = `Please enter valid inputs`
    }
    else if(members==1) {
        text = `You have to pay  ${tip.toFixed(2)}$`
    }
    else{
        tip = tip/members;
        text = `You have to pay ${tip.toFixed(2)}$`
    }


    document.getElementById('result').innerHTML = text
    

}