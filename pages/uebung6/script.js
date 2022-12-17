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

function validateBracketsBalanced() {
    var input = document.getElementById('brackets2').value;
    if (areBracketsBalanced(input.replace(/(\r\n|\n|\r)/gm, ""))) {
        document.querySelector('textarea:focus').style.outline = 'none';
        document.querySelector('textarea:focus').style.border = '1px solid darkblue';
        document.querySelector('textarea:focus').style.boxShadow = 'none';
    } else {
        document.querySelector('textarea:focus').style.outline = 'none';
        document.querySelector('textarea:focus').style.border = '1px solid red';
        document.querySelector('textarea:focus').style.boxShadow = '0 0 10px #719ECE';
    }
}


// Javascript program for checking
// balanced brackets

// This code is contributed by rag2127

// Function to check if brackets are balanced
function areBracketsBalanced(expr) {

    // Using ArrayDeque is faster
    // than using Stack class
    let stack = [];

    // Traversing the Expression
    for (let i = 0; i < expr.length; i++) {
        let x = expr[i];

        if (x === '(' || x === '[' || x === '{') {

            // Push the element in the stack
            stack.push(x);
            continue;
        }

        // If current character is not opening
        // bracket, then it must be closing.
        // So stack cannot be empty at this point.
        if (stack.length === 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check === '{' || check === '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check === '(' || check === '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check === '(' || check === '{')
                    return false;
                break;
        }
    }

    // Check Empty Stack
    return (stack.length === 0);
}