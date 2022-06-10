let tipPercent = document.querySelectorAll('.grid-item');
let tipLen = tipPercent.length; 

for(let i = 0; i < tipLen; i++){
    tipPercent[i].addEventListener('click', function (e) {
        let selected = 
        document.querySelector('.grid-select');
        if(selected){
            selected.classList.remove('grid-select');
        }
        this.classList.add('grid-select');
        if(this.classList.contains('custom')){
            console.log(selected.textContent);
            selected.textContent = 
            document.querySelector('.custom').value;
            console.log(selected.textContent);
        }
        document.querySelector('.tip').textContent = tipCalc();
        document.querySelector('.total').textContent = totalCalc();
    }, false); 
} 

function tipCalc() {
    let tipRate = parseInt(
            document.querySelector('.grid-select').textContent
        );
    let bill = parseFloat(
        document.querySelector('.bill-input').value
    ); 
    let people = 
        parseInt(document.querySelector('.people').value); 

    if(people <= 0 || !people){
        return "$0.00";
    }
    if(bill <= 0 || !bill){
        return "$0.00";
    } 
    else{
        let sum = bill * (tipRate/100) / people;
        return '$' + sum.toFixed(2);
    }   
    
} 

function totalCalc() {
    let tipRate = parseInt(
        document.querySelector('.grid-select').textContent
    );
    let bill = parseFloat(
        document.querySelector('.bill-input').value
    ); 
    let people = 
        parseInt(document.querySelector('.people').value); 
    let selected = document.querySelector('.grid-select');
    
    if(people <= 0 || !people){
        alert("Enter Proper Amount of People");
        selected.classList.remove('grid-select');
        return "$0.00";
    }
    if(bill <= 0 || !bill){
        alert("Enter proper bill amount");
        selected.classList.remove('grid-select');
        return "$0.00";
    }
    else{
        let sum = (bill * (tipRate/100) + bill) / people;
        btn.classList.add('btn-light'); 
        return '$' + sum.toFixed(2);
    }
    
}

// if(document.querySelector('.tip').textContent !== '$0.00') {
//     btn.classList.add('btn-light');
// }
btn = document.querySelector('.reset');
btn.addEventListener('click', function() {
    let chosenTip = document.querySelector('.tip');
    
    let tip = document.querySelector('.grid-select');
    // let billText = document.querySelector('bill-input');
    // let peopleText = document.querySelector('people');
    tip.classList.remove('grid-select');
    // billText.value, peopleText.value = '0';
    chosenTip.textContent = '$0.00';
    document.querySelector('.total').textContent = '$0.00';
    this.classList.remove('btn-light');
})

// function calculate() {
//     let tipRate = parseInt(
//         document.querySelector('.grid-select').textContent
//     );
//     let bill = document.querySelector('.bill-input').value;
//     let people = 
//         parseInt(document.querySelector('.people').value); 

//     let tipTotal = document.querySelector('.tip').textContent;
//     let total = document.querySelector('.total').textContent;

//     if( isNaN(bill) && Number.isInteger(people) && tipRate) {
//         let ans = bill * (tipRate/100)/ people;
//         let ans2 = ((bill * (tipRate/100)) + bill)/ people; 

//         tipTotal = ans.toFixed(2);
//         total = ans2.toFixed(2);
//     }

// }