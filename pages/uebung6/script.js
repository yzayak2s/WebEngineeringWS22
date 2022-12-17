function validateBrackets() {
    var input = document.getElementById('brackets').value;
    // SquareBracket = SB
    const counterSBLeft = (input.match(/\[/g) || []).length;
    const counterSBRight = (input.match(/]/g) || []).length;
    // RoundBracket = RB
    const counterRBLeft = (input.match(/\(/g) || []).length;
    const counterRBRight = (input.match(/\)/g) || []).length;
    // CurlyBracket = CB
    const counterCBLeft = (input.match(/{/g) || []).length;
    const counterCBRight = (input.match(/}/g) || []).length;

    if (
        counterSBLeft !== counterSBRight ||
        counterRBLeft !== counterRBRight ||
        counterCBLeft !== counterCBRight
    ) {
        document.querySelector('textarea:focus').style.outline = 'none';
        document.querySelector('textarea:focus').style.border = '1px solid red';
        document.querySelector('textarea:focus').style.boxShadow = '0 0 10px #719ECE';
    } else {
        document.querySelector('textarea:focus').style.outline = 'none';
        document.querySelector('textarea:focus').style.border = '1px solid darkblue';
        document.querySelector('textarea:focus').style.boxShadow = 'none';
    }
}