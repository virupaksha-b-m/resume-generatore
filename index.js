function addNewWEFiled(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weFiled");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");


    weOb.insertBefore(newNode,weAddButtonOb);
}


function addNewaqFiled(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqFiled");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here")


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");


    aqOb.insertBefore(newNode,aqAddButtonOb);
}


function generateCV(){
    document.getElementById("nameF").innerHTML = document.getElementById("nameFiled").value;
    document.getElementById("contactF").innerHTML = document.getElementById("contactFiled").value;
    document.getElementById("addressF").innerHTML = document.getElementById("addressFiled").value;


    document.getElementById("fbF").innerHTML = document.getElementById("fbFiled").value;
    document.getElementById("instaF").innerHTML = document.getElementById("instaFiled").value;
    document.getElementById("linkedF").innerHTML = document.getElementById("linkedFiled").value;

    document.getElementById("ObjF").innerHTML = document.getElementById("ObjectiveField").value;

    //work experience

    let wes = document.getElementsByClassName("weFiled");

    let str='';

    for(let e of wes)
    {
        str = str+`<li> ${e.value}</li>`;

    }

    document.getElementById("weT").innerHTML = str; 





    let aqs = document.getElementsByClassName("aqFiled");

    let str1='';

    for(let e of wes)
    {
        str1 = str1+`<li> ${e.value}</li>`;

    }

    document.getElementById("aqT").innerHTML = str1; 

    document.getElementById("CV-form").style.display="none";
    document.getElementById("CV-template").style.display="block";

  
}

function PrintCV()
{
    window.print();
}