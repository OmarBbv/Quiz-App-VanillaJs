const ui = new UI();


ui.btn_start.addEventListener('click', () => {
    ui.quiz_box.classList.add('active');
    sualGoster(quiz.sualGetir());
    sualSayisinGoster(quiz.sualIndex + 1, quiz.suallar.length);
});


ui.btn_next.addEventListener('click', function () {
    if (quiz.suallar.length != quiz.sualIndex + 1) {
        quiz.sualIndex++;
        sualGoster(quiz.sualGetir());
        sualSayisinGoster(quiz.sualIndex + 1, quiz.suallar.length);
    } else {
        return alert('Sual Bitdi!');
    };
});

const option_list = document.querySelector('.option_list');
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = ' <div class="icon"><i class="fas fa-times"></i></div>'


function sualGoster(sual) {
    let question = `<span>${sual.sualMetni}</span>`;
    let options = '';

    for (let cavab in sual.variant) {
        options +=
            `<div class="option">
                <span><b>${cavab}</b>: ${sual.variant[cavab]}</span>
            </div>`
    };

    document.querySelector('.question_text').innerHTML = question;

    option_list.innerHTML = options;

    const option = option_list.querySelectorAll('.option');

    for (const opt of option) {
        opt.setAttribute('onclick', 'optionSelected(this)');
    };
};

function optionSelected(option) {
    let cavab = option.querySelector('span b').textContent;
    let sual = quiz.sualGetir();

    if (sual.cavabKontrol(cavab)) {
        option.classList.add('correct');
        option.insertAdjacentHTML('beforeend', correctIcon);
    } else {
        option.classList.add('incorrect');
        option.insertAdjacentHTML('beforeend', incorrectIcon);
    }

    for (let i = 0; i < option_list.children.length; i++) {
        option_list.children[i].classList.add('disable');
    }
};

function sualSayisinGoster(sualSirasi, toplamSira) {
    let tag = `<div class="question_index"><span class="badge bg-warning">${sualSirasi} / ${toplamSira}</span></div>`
    document.querySelector('.quiz_box .question_index').innerHTML = tag;
}

