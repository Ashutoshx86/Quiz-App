const app = document.getElementById("quizapp");
app.style.height = "1450px";
app.style.width = "1200px";
app.style.border = "5px solid black";
app.style.margin = "10px";
app.style.padding = "10px";


const h1 = document.createElement("h1");
h1.style.fontSize = "30px";
h1.style.textAlign = "center";
h1.innerHTML = "Quick app";

app.appendChild(h1);


const hr = document.createElement("hr");
hr.style.border = "2px solid black"; 
app.appendChild(hr);

const br3 = document.createElement("br");
app.appendChild(br3);

const form = document.createElement("form");



const nameLabel = document.createElement("label");

nameLabel.textContent = "Name: ";
nameLabel.htmlFor = "name";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
nameInput.name = "name";
nameInput.required = true;

   



const br = document.createElement("br");


form.appendChild(nameLabel);
form.appendChild(nameInput);

form.appendChild(br);


const classLabel = document.createElement("label");
classLabel.textContent = "Class: ";
classLabel.htmlFor = "class";
const classInput = document.createElement("input");
classInput.type = "text";
classInput.id = "class";
classInput.name = "class";
classInput.required = true;
const classbr = document.createElement("br");
const br5 = document.createElement("br");
app.appendChild(br5);

form.appendChild(classLabel);
form.appendChild(classInput);
form.appendChild(classbr);


const rollLabel = document.createElement("label");
rollLabel.textContent = "Roll No.: ";
rollLabel.htmlFor = "roll";
const rollInput = document.createElement("input");
rollInput.type = "text";
rollInput.id = "roll";
rollInput.name = "roll";
rollInput.required = true;
const rollbr = document.createElement("br");

form.appendChild(rollLabel);
form.appendChild(rollInput);
form.appendChild(rollbr);


const phoneLabel = document.createElement("label");
phoneLabel.textContent = "Phone Number: ";
phoneLabel.htmlFor = "phone";
const phoneInput = document.createElement("input");
phoneInput.type = "text";
phoneInput.id = "phone";
phoneInput.name = "phone";
phoneInput.required = true;
const phonebr = document.createElement("br");

form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(phonebr);

const agelabel = document.createElement("label");
agelabel.textContent = "Age: ";
const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.name = "age";
ageInput.required = true;
const agebr = document.createElement("br");
const br7 = document.createElement("br");

form.appendChild(agelabel);
form.appendChild(ageInput);
form.appendChild(agebr);
form.appendChild(br7);






const starttest = document.createElement("button");
starttest.style.height = "30px";
starttest.style.width = "100px";
starttest.required = true;                                
starttest.innerHTML = "Start Test";


form.appendChild(starttest);

app.appendChild(form);





starttest.onclick = function() {

    if (
        nameInput.value === "" ||
        classInput.value === "" ||
        rollInput.value === "" ||
        phoneInput.value === "" ||
        ageInput.value === ""
    ) {
        alert("Please fill in all the details before starting the test.");
        return;
    }





    nameLabel.style.display = "none";
    nameInput.style.display = "none";
    classLabel.style.display = "none";
    classInput.style.display = "none";
    rollLabel.style.display = "none";
    rollInput.style.display = "none";
    phoneLabel.style.display = "none";
    phoneInput.style.display = "none";
    starttest.style.display = "none";

    
        const question1 = document.createElement("div");
    question1.style.marginTop = "20px";

    const q1Text = document.createElement("p");
    q1Text.textContent = "Who is plan maker of moneyhiest robbery?";
    question1.appendChild(q1Text);

    const options1 = ["Berlin", "Professor", "Tokyo", "Denver"];
    options1.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz1";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question1.appendChild(label);
        question1.appendChild(document.createElement("br"));
    });

    const question2 = document.createElement("div");
    question2.style.marginTop = "20px";

    const q2Text = document.createElement("p");
    q2Text.textContent = "Which language is used for web development?";
    question2.appendChild(q2Text);

    const options2 = ["C++", "Python", "JavaScript", "None of these"];
    options2.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz2";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question2.appendChild(label);
        
        question2.appendChild(document.createElement("br"));
    });




      const question3 = document.createElement("div");
    question3.style.marginTop = "20px";

    const q3Text = document.createElement("p");
    q3Text.textContent = "How many Classrooms in CodeQuitent?";
    question3.appendChild(q3Text);

    const options3 = ["1", "4", "5", "9"];
options3.forEach((opt) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz3";
    radio.value = opt;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    question3.appendChild(label); 
    question3.appendChild(document.createElement("br")); 
});

    const question4 = document.createElement("div");
    question4.style.marginTop = "20px";
    const q4Text = document.createElement("p");
    q4Text.textContent = "What is the capital of India?";
    question4.appendChild(q4Text);
    const options4 = ["Delhi", "Rohtak", "Panipat", "Bhiwani"];
    options4.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz4";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question4.appendChild(label);
        question4.appendChild(document.createElement("br"));
    });


    const question5 = document.createElement("div");
    question5.style.marginTop = "20px";
    const q5Text = document.createElement("p");
    q5Text.textContent = "if x = 5 and y = 10 then what is the value of x";
    question5.appendChild(q5Text);
    const options5 = ["1", "2", "3", "5"];
    options5.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz5";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question5.appendChild(label);
        question5.appendChild(document.createElement("br"));
    });

    const question6 = document.createElement("div");
    question6.style.marginTop = "20px";
    const q6Text = document.createElement("p");
    q6Text.textContent = "what is 0 + 9";
    question6.appendChild(q6Text);
    const options6 = ["1", "0", "32", "9"];
    options6.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz6";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question6.appendChild(label);
        question6.appendChild(document.createElement("br"));
    });

    const question7 = document.createElement("div");
    question7.style.marginTop = "20px";
    const q7Text = document.createElement("p");
    q7Text.textContent = "what is 9+6?";
    question7.appendChild(q7Text);
    const options7 = ["15", "0", "9", "8"];

    options7.forEach((opt) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz7";
    radio.value = opt;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    question7.appendChild(label);
    question7.appendChild(document.createElement("br"));
});

    const question8 = document.createElement("div");
    question8.style.marginTop = "20px";
    const q8Text = document.createElement("p");
    q8Text.textContent = "Ashutosh's Happy Birthday?";
    question8.appendChild(q8Text);
    const options8 = ["10/10/2010", "1/1/2006", "11/11/2006", "1/11/2006"];
    options8.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz8";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question8.appendChild(label);
        question8.appendChild(document.createElement("br"));
    });

    const question9 = document.createElement("div");
    question9.style.marginTop = "20px";
    const q9Text = document.createElement("p");
    q9Text.textContent = "Ashutosh's Favourite Animal?";
    question9.appendChild(q9Text);
    const options9 = ["Panther", "Leopard", "Giraffe", "Lion"];
    options9.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz9";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question9.appendChild(label);
        question9.appendChild(document.createElement("br"));
    });

    const question10 = document.createElement("div");
    question10.style.marginTop = "20px";
    const q10Text = document.createElement("p");
    q10Text.textContent = "What is the capital of Bhiwani?";
    question10.appendChild(q10Text);
    const options10 = ["Hansi Gate", "Meham Gate", "Rohtak Gate", "The question is wrong"];
    options10.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz10";
        radio.value = opt;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(opt));
        question10.appendChild(label);
        question10.appendChild(document.createElement("br"));
    });

    const br4 = document.createElement("br");
    const br6 = document.createElement("br");
    app.appendChild(br6);
     
    const Finish = document.createElement("button");
    Finish.style.height = "30px";
    Finish.style.width = "100px";
    Finish.innerHTML = "Finish Test";
    Finish.style.display = "none";

    const questions = [
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10
    ];

    let currentQuestion = 0;

    const nextButton = document.createElement("button");
    nextButton.style.height = "30px";
    nextButton.style.width = "100px";
    nextButton.innerHTML = "Next";

    function showQuestion(index) {
        app.innerHTML = "";
        app.appendChild(questions[index]);
        if (index < questions.length - 1) {
            app.appendChild(nextButton);
            Finish.style.display = "none";
        } else {
            app.appendChild(Finish);
            Finish.style.display = "";
        }
    }

    nextButton.onclick = () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    };

    showQuestion(currentQuestion);

    Finish.onclick = function() {
        question1.style.display = "none";
        question2.style.display = "none";
        question3.style.display = "none";
        question4.style.display = "none";
        question5.style.display = "none";
        question6.style.display = "none";
        question7.style.display = "none";
        question8.style.display = "none";
        question9.style.display = "none";
        question10.style.display = "none";
        Finish.style.display = "none";

        const result = document.createElement("div");
        result.style.marginTop = "20px";
        result.innerHTML = "<h2> Quiz complete</h2>";
        app.appendChild(result);
    };

    
};






















