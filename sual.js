function Sual(sual, variant, cavab) {
    this.sualMetni = sual;
    this.cavab = cavab;
    this.variant = variant;
};

Sual.prototype.cavabKontrol = function (dogrucavab) {
    return this.cavab == dogrucavab;
};

const Suallar = [
    new Sual('1: Hansi programlasdirma dilidir?', { a: 'Html', b: 'Css', c: 'Javascript', d: 'Nuget' }, 'c'),
    new Sual('2: Hansi programlasdirma dili deyildir?', { a: 'html', b: 'C++', c: 'javascript', d: 'C#' }, 'a'),
    new Sual('3: Javascript necenci ilde yaradilib?', { a: '1990', b: '1995', c: '1998', d: '1999' }, 'b'),
    new Sual('4: C++ necenci ilde yaradilib', { a: '1980', b: '1981', c: '1982', d: '1983' }, 'a'),
    new Sual('5: C# in frameworku nedir?', { a: '.NET', b: 'Kotlin', c: 'Python', d: 'Nuget' }, 'a'),
];