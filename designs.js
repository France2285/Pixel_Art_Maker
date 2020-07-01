
const myTable = document.getElementById("pixelCanvas")

function makeGrid(){
    //gather values of the nb of rows and columns
    const nbRows    = document.getElementById("inputHeight").value
    const nbColumns = document.getElementById("inputWidth").value 
    
    //add rows 
    for(r=0 ; r < nbRows ; r++){
        let row = myTable.insertRow(0)
        //add cells
        for(c=0 ; c < nbColumns ; c++){
            let cell = row.insertCell(0)
            //add a class to the <td> : <td class="colorSwitchable">
            cell.setAttribute("class" , "colorSwitchable")
        }
    }
    
    //Get all cells for which we have set a class of 'colorSwitchable'
    let tableCells = document.getElementsByClassName("colorSwitchable")

    //For each of the cells in tableCells, when i click, execute setColor
    for(i = 0 ; i < tableCells.length ; i++){
        tableCells[i].addEventListener("click", setColor)
    }
}

function setColor(event){
    //at the time when the function is called, get the color in the color picker
    let color = document.getElementById("colorPicker").value
    //change the background color of the cell on which the event occured with the color from the color picker
    event.currentTarget.style.backgroundColor = color
}

// when i click on the button with id "mybutton", execute makeGrid
document.getElementById("myButton").addEventListener("click", makeGrid)
