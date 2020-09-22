//Write your Typescript code here

//task 1 
let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);


let myList:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByClassName("unhealthy");
    console.log(myList);

//var myList = document.getElementsByClassName("healthy");
//console.log(myList);

let myElements2:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li");
    console.log(myElements2);



