//select items
//select courses list
const span = document.querySelector(".span");
const selectCourseList = document.querySelector(".select-courses-list");
//course tab section
let tabBtn = document.querySelectorAll(".tab-nav-item");
const tabIndicator = document.querySelectorAll(".tab-indicator");
const tabSection = document.querySelector(".tab");
const courseList = document.querySelectorAll(".course-list");


console.log(tabIndicator)
console.log(tabSection)
console.log(courseList)
console.log(tabBtn)

//make arrays
tabBtn = Array.from(tabBtn)

//function to display list on click
function showList(e){
    console.log(e.target)
    if(selectCourseList.style.display == 'block'){
        selectCourseList.style.display='none'
    }else{
        selectCourseList.style.display ='block'
    }
}

function test(e){
    console.log(e.target)
}
//add event listeners
span.addEventListener('click', showList);
// tabBtn.addEventListener('click', test);




