var questions = {
    "1": {
        "question": "Which of the following JavaScript methods is used to select an element by its ID from the DOM?",
        "choice1": "document.getElementsByClassName()",
        "choice2": "document.querySelectorAll()",
        "choice3": "document.getElementById()",
        "choice4": "document.createElement()",
        "answer": "document.getElementById()"
    },
    "2": {
        "question": "Which method is used to add a new element to the DOM?",
        "choice1": "document.appendChild()",
        "choice2": "document.createElement()",
        "choice3": "document.removeChild()",
        "choice4": "document.getElementsByTagName()",
        "answer": "document.createElement()"
    },
    "3": {
        "question": "What method is used to remove an existing element from the DOM?",
        "choice1": "document.removeChild()",
        "choice2": "document.getElementById()",
        "choice3": "document.createElement()",
        "choice4": "document.replaceChild()",
        "answer": "document.removeChild()"
    },
    "4": {
        "question": "Which method allows you to select the first element that matches a specified CSS selector?",
        "choice1": "document.querySelector()",
        "choice2": "document.getElementById()",
        "choice3": "document.querySelectorAll()",
        "choice4": "document.getElementsByTagName()",
        "answer": "document.querySelector()"
    },
    "5": {
        "question": "Which of the following methods returns a live HTMLCollection of elements with the specified class name?",
        "choice1": "document.getElementsByClassName()",
        "choice2": "document.querySelector()",
        "choice3": "document.getElementsByName()",
        "choice4": "document.getElementById()",
        "answer": "document.getElementsByClassName()"
    },
    "6": {
        "question": "Which property is used to change the inner text of an HTML element in the DOM?",
        "choice1": "element.innerHTML",
        "choice2": "element.innerText",
        "choice3": "element.value",
        "choice4": "element.setAttribute()",
        "answer": "element.innerText"
    },
    "7": {
        "question": "What is the method used to attach an event listener to a DOM element?",
        "choice1": "element.addEventListener()",
        "choice2": "element.attachEvent()",
        "choice3": "element.setAttribute()",
        "choice4": "element.addEvent()",
        "answer": "element.addEventListener()"
    },
    "8": {
        "question": "Which method returns all elements within the document that match a specified group of selectors?",
        "choice1": "document.querySelectorAll()",
        "choice2": "document.getElementsByClassName()",
        "choice3": "document.getElementById()",
        "choice4": "document.querySelector()",
        "answer": "document.querySelectorAll()"
    },
    "9": {
        "question": "Which property would you use to retrieve the value of an input field?",
        "choice1": "input.value",
        "choice2": "input.text",
        "choice3": "input.content",
        "choice4": "input.innerHTML",
        "answer": "input.value"
    },
    "10": {
        "question": "What is the property used to set or return the HTML content inside an element?",
        "choice1": "element.outerHTML",
        "choice2": "element.value",
        "choice3": "element.innerHTML",
        "choice4": "element.content",
        "answer": "element.innerHTML"
    }
};

var currentQuestion = 1;

function display(id){
    var question = document.getElementById("question");
    console.log(question);
    var choice = document.getElementById("choice");
    var qdata = '<h2>Question:</h2>';
    qdata += '<p>'+questions[id]["question"]+'</p>'
    var cdata = '<h2>Choice:</h2>';
    cdata += '<input type="radio" onchange="check(this)" name="choice" class="choice1" id='+id+'>'+questions[id]["choice1"]+'<br>'+
                '<input type="radio" onchange="check(this)" name="choice" class="choice2" id='+id+'>'+questions[id]["choice2"]+'<br>'+
                '<input type="radio" onchange="check(this)" name="choice" class="choice3" id='+id+'>'+questions[id]["choice3"]+'<br>'+
                '<input type="radio" onchange="check(this)" name="choice" class="choice4" id='+id+'>'+questions[id]["choice4"];
    question.innerHTML = qdata;
    choice.innerHTML = cdata;
    currentQuestion = id;
    document.getElementById("cq").innerHTML = currentQuestion + "/" + Object.keys(questions).length;
}

function check(element){
    questions[element.id]["userchoice"] = questions[element.id][element.classList[0]];
}

function nextQuestion(){
    ++currentQuestion;
    if (currentQuestion == Object.keys(questions).length){
        document.getElementById("finishbtn").style.display = "block";
        document.getElementById("nextbtn").style.display = "none";
    }
    display(currentQuestion);
}

function previousQuestion(){
    if (currentQuestion == 1) return;
    if (currentQuestion == Object.keys(questions).length){
        document.getElementById("finishbtn").style.display = "none";
        document.getElementById("nextbtn").style.display = "block";
    }
    currentQuestion--;
    display(currentQuestion)
}

var mark = 0;
function finish(){
    for(id in questions){
        if (questions[id]["answer"] == questions[id]["userchoice"]) mark++;
    }
    alert("Your Score: " + mark + "/" + Object.keys(questions).length)
}

display(currentQuestion);