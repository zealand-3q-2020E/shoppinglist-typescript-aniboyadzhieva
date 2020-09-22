//Write your Typescript code here

//task 1 
let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);


let myList:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");
    console.log(myList);

//var myList = document.getElementsByClassName("healthy");
//console.log(myList);

let myList2:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");
    console.log(myList2);

//Task 2
for(let i =0; i < myList2.length; i++)
{
const element = myList2[i];
console.log(element)
{
    if(element.getAttribute("class") == "healthy")
    {
        element.setAttribute("class", "unhealthy")  
    }
    else
    {
        element.setAttribute("class" , "healthy" )
    }   
}
}

//Task 3 
let myElementChanged:HTMLLIElement = <HTMLLIElement> document.getElementById("2");
myElementChanged.setAttribute("class", "middle")
console.log(myElementChanged);

let myElementHidden:HTMLLIElement = <HTMLLIElement> document.getElementById("3");
myElementHidden.hidden = true;
console.log(myElementHidden);

//Task 4
var parentNode = document.getElementById("0").parentNode.nodeName;
console.log(parentNode);

var firstChild = document.getElementById("0").firstChild.nodeName;
console.log(firstChild);

var lastChild = document.getElementById("0").lastChild.nodeName;
console.log(lastChild);



