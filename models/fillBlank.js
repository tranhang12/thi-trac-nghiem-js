class FillBlank extends Question {
  constructor(type, id, content, answers) {
    super(type, id, content, answers);
  }

  render(index) {
    return `
            <div>
                <p class="lead font-italic" style="font-size: 30px;">
                    Question ${index}: ${this.content}
                </p>
                <input id="answer-${this.id}" type="text" class="form-control w-50" value="" />
            </div>
        `;
  }

  checkExact() {
    let answerContent = document.getElementById(`answer-${this.id}`).value;
    answerContent = answerContent.toLowerCase();
    if (answerContent === this.answers[0].content.toLowerCase()) {
        return true;
    }
    return false;
  }
}

// const newQuestion = new FillBlank(1,1,"What day is today?",[
//     {content: "Monday"},
//     {content: "Tuesday"},
//     {content: "Thursday"},
//     {content: "Friday"}
// ])
// console.log(newQuestion.render());
