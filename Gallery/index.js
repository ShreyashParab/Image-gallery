var panel1 = document.getElementById("panel-1")
var panel2 = document.getElementById("panel-2")
var panel3 = document.getElementById("panel-3")
var panel4 = document.getElementById("panel-4")
var panel5 = document.getElementById("panel-5")
var panel6 = document.getElementById("panel-6")
var panel7 = document.getElementById("panel-7")


function resetPanel(){
    panel1.classList.remove('active')
    panel2.classList.remove('active')
    panel3.classList.remove('active')
    panel4.classList.remove('active')
    panel5.classList.remove('active')
    panel5.classList.remove('active')
    panel6.classList.remove('active')
    panel7.classList.remove('active')
}

function selectPanel(panelNo){
    resetPanel()
    switch(panelNo){
    case 1: panel1.classList.add('active') 
    break;
    case 2: panel2.classList.add('active') 
    break;
    case 3: panel3.classList.add('active') 
    break;
    case 4: panel4.classList.add('active') 
    break; 
    case 5: panel5.classList.add('active') 
    break;
    case 6: panel6.classList.add('active') 
    break;
    case 7: panel7.classList.add('active') 
    break;  
    }
}
