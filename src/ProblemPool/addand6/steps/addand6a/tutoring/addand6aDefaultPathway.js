var hints = [{id: "addand6a-h1", type: "hint", dependencies: [], title: "LCD", text: "We need to first rewrite each fraction with the least common denominator because they don't have a common denominator to start with."}, {id: "addand6a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["120"], dependencies: ["addand6a-h1"], title: "LCD", text: "What is the LCD of 15 and 24 $$(15=\\left(3\\right) \\left(5\\right)$$, 24=2*2*2*3)?"}, {id: "addand6a-h3", type: "hint", dependencies: ["addand6a-h2"], title: "Rewrite", text: "We then need to change into equivalent fractions with the LCD, 120."}, {id: "addand6a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["56/120"], dependencies: ["addand6a-h3"], title: "Rewrite", text: "What should $$\\frac{7}{15}$$ be changed into?"}, {id: "addand6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["95/120"], dependencies: ["addand6a-h4"], title: "Rewrite", text: "What should $$\\frac{19}{24}$$ be changed into?"}, {id: "addand6a-h6", type: "hint", dependencies: ["addand6a-h5"], title: "Subtract", text: "Subtract the numerators and place the difference over the common denominator."}, {id: "addand6a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-39"], dependencies: ["addand6a-h6"], title: "Numerator", text: "What do we get for the numerator after the subtraction?"}, {id: "addand6a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-39/120"], dependencies: ["addand6a-h7"], title: "Denominator", text: "What do we get after placing the difference over the common denominator?"}, {id: "addand6a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-13/40"], dependencies: ["addand6a-h8"], title: "Simplify", text: "What do we get after simplifying the above expression?"}, ]; export {hints};