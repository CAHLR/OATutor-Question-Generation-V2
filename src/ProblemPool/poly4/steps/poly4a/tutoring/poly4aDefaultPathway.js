var hints = [{id: "poly4a-h1", type: "hint", dependencies: [], title: "Distribute the Negative Sign", text: "The first step is to distribute the negative sign to make the second expression negative. This will make the second part of the problem $-4x^3+6x^3+x-7$. Now we can combine like terms."}, {id: "poly4a-h2", type: "hint", dependencies: ["poly4a-h1"], title: "Combining $x^3$ Terms", text: "$-7x^3$ and $-4x^3$ are the only terms being multiplied by x**3, we can add these constants to simplify the $x^3$ term. $-7+-4$ = -11, so the $x^3$ term becomes $-11x^3$."}, {id: "poly4a-h3", type: "hint", dependencies: ["poly4a-h2"], title: "Combining $x^2$ Terms", text: "Since $-7x^2$ and $6x^2$ share x**2, these coefficients can be added to simplify the $x^2$ term."}, {id: "poly4a-h4", type: "scaffold", problemType: "TextBox", answerType: "algebra", hintAnswer: ["-x**2"], dependencies: ["poly4a-h3"], title: "Combining $x^2$ Terms", text: "What is $-7x^2+6x^2$?"}, {id: "poly4a-h5", type: "hint", dependencies: ["poly4a-h4"], title: "x Term", text: "6x is the only term being multiplied by x, so it cannot be simplified further. So, this term stays the same."}, {id: "poly4a-h6", type: "hint", dependencies: ["poly4a-h5"], title: "Combining Constants", text: "The last term we need to simplify is the constant term. The constants in this expression are -2 and -7. By adding these, we can get the simplified constant."}, {id: "poly4a-h7", type: "scaffold", problemType: "TextBox", answerType: "numeric", hintAnswer: ["-9"], dependencies: ["poly4a-h6"], title: "Combining Constants", text: "What is $-2+-7$?"}, {id: "poly4a-h8", type: "hint", dependencies: ["poly4a-h7"], title: "Simplified Expression", text: "Since there are no more terms to simplify, we can write the expression as the sum of the simplified terms: $-11x^3-x^2+7x-9$."}, ]; export {hints};