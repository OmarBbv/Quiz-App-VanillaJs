function Quiz(suallar) {
    this.suallar = suallar;
    this.sualIndex = 0;
};

Quiz.prototype.sualGetir = function () {
    return this.suallar[this.sualIndex];
};

const quiz = new Quiz(Suallar);