var hints = [{id: "a870b02DivMul6a-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality.", variabilization: {}}, {id: "a870b02DivMul6a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{b}{\\left(-6\\right)} \\left(-6\\right)=\\left(-24\\right) \\left(-6\\right)$$"], dependencies: ["a870b02DivMul6a-h1"], title: "Multiplication", text: "Multiple -6 from each side.", variabilization: {}}, {id: "a870b02DivMul6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["144"], dependencies: ["a870b02DivMul6a-h2"], title: "Simplification", text: "What do we get for b after simplifying the equation?", variabilization: {}}, {id: "a870b02DivMul6a-h4", type: "hint", dependencies: ["a870b02DivMul6a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a870b02DivMul6a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a870b02DivMul6a-h4"], title: "Verification", text: "Check whether $$\\frac{144}{\\left(-6\\right)}$$ equals -24.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};