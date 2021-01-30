const number = document.querySelector('.number-input');
const outputContainer = document.querySelector('.output');
const numberFact = document.querySelector('.number-fact');


number.addEventListener('input',function(event){
    const Inputvalue = number.value;
    //using the fetch api
    fetch(`http://numbersapi.com/${Inputvalue}`)
    .then(function(response){
        return response.text()
    })
    .then(function(data){
       if(Inputvalue != ''){
        outputContainer.style.display = 'block';
        numberFact.textContent = data;
       }
    })
    .catch(function(err){
        console.log(err)
    })
    //using the old xhr method
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', `http://numbersapi.com/${Inputvalue}`);
    // xhr.onload = function(){
    //     if(this.status ===200 && Inputvalue != ""){
    //         outputContainer.style.display = 'block';
    //         numberFact.textContent = this.responseText;
    //     }
    // }
    // xhr.send();

})