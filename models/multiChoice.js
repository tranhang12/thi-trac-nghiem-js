class MultipleChoice extends Question {
    constructor(type, id, content, answers) {
        super(type, id, content, answers);
    }


    render(index) {
        let answersHTML = '';
        for (let answer of this.answers) {
            answersHTML += `
                <div>
                    <input value="${answer.id}" class="answer-${this.id}" type="radio" name="answer-${this.id}" />
                    <label for="" class="lead">${answer.content}</label>
                </div>
            `
        }
        
        return `
            <div>
                <p class="lead font-italic" style="font-size: 30px">
                    Question ${index}: ${this.content}
                </p>
                ${answersHTML}
            </div>
        `
    }

    checkExact() {
       const answerList = document.getElementsByClassName(`answer-${this.id}`);

       let answerId;

       for (let answer of answerList) {
        if (answer.checked) {
            answerId = answer.value;
        }
       }

       if (!answerId) {
        return false;
       }

       for (let answer of this.answers) {
        if(answerId == answer.id) {
            return answer.exact;
        } 
       }
       return false;
    }
}
