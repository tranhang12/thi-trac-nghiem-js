let questionList = [];
const fetchQuestion = async() => {
    try {
        const res = await axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET"
        })
        // console.log(res);
        return res.data;
    } catch(err) {
        console.log(err);
    }
}

const dataMap = ((data = []) => {
    questionList = data.map((item) => {
        const {questionType, id, content, answers} = item;
        if (questionType === 1) {
            return new MultipleChoice(questionType, id, content, answers);
        } else if (questionType === 2) {
            return new FillBlank(questionType, id, content, answers);
        }
    })
})

const renderQuestion = () => {
    let contentHTML ="";

    for (let i in questionList) {
        contentHTML += questionList[i].render(+i + 1);
    }
    document.getElementById("questionsContainer").innerHTML = contentHTML;
}

// Tinh diem:
const submit = () => {
    let result = 0;
    for (let item of questionList) {
        if (item.checkExact()) {
            result++;
        }
    }
    alert("ket qua: " + result + "/" + questionList.length);
}

fetchQuestion().then((data) => {
    dataMap(data);
    renderQuestion();
});