function appendtodisplay(value)
{
    document.getElementById("display").value+=value;
}

function appendconstant(value)
{
    document.getElementById("display").value+=value;
}

function appendfunction(func)
{
    document.getElementById("display").value+='Math.${func}(';
}

function backspace()
{
    let display=document.getElementById("display");
    display.value=display.value.slice(0,-1);
}

function cleardisplay()
{
    document.getElementById("display").value='';
}


function calculate()
{
    let display = document.getElementById("display");
    try{
        let expression=display.value.replace(/%/g, "/100");
        display.value=eval(expression);
    }
    catch(e)
    {
        display.value="Error";
    }
}