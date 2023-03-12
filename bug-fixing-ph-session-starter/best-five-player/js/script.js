// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else{
            button.classList.remove('disabled');
            addPlayer(button.parentNode.children[0].innerText)
            
        }
    })
} 

// A common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    inputField.value = ''
    return inputFieldValue
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){
    const perPlayerBudget = getInputValue('per_player_budget');
    if(perPlayerBudget.length === 0 || perPlayerBudget < 0 || isNaN(perPlayerBudget) === true){
        alert('please give me a valid number')
    }else{
        let totalPlayerExpense =  selectedPlayer.children.length * perPlayerBudget;
        console.log(selectedPlayer.children.length);
        getValueOfElement( 'player_expense', totalPlayerExpense) 
    
    }
   
})
document.getElementById('calculate_total_budget').addEventListener('click', function(){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget = getInputValue('manager_budget');
    const coachBudget = getInputValue('coach_budget');
    console.log(coachBudget.length);
    
    if(managerBudget.length  === 0 || coachBudget.length === 0 || coachBudget < 0 || managerBudget < 0 || isNaN(coachBudget) === true || isNaN(managerBudget) === true ){
        alert('please give me a valid number')
    }else{
        let totalExpense = playerTotalBudget + parseInt(managerBudget) + parseInt(coachBudget);
        getValueOfElement( 'player_total_expense', totalExpense)
        console.log(playerTotalBudget);
    }
})

