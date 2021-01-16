function isSolved2x2 (scramble = "", solution = "") {
    let cp = [0, 1, 2, 3, 4, 5, 6, 7]
    let co = [0, 0, 0, 0, 0, 0, 0, 0]
    let splitScramble = scramble.split(" ")
    let splitSolution = solution.split(" ")
    let solvedState = [cp, co]
    let moveCount = splitSolution.length
    const regex1 = /[^UDFBRL2' xyzw]/g
    const regex2 = /^ | $|  /g
    if (scramble == "") {
        return "Write a scramble!"
    }
    else if (solution == "") {
        return "Write a solution!"
    }
    else if (regex1.test(scramble)) {
        return "Please input a valid scramble. (Wrong Character)"
    }
    else if (regex1.test(solution)) {
        return "Please input a valid solution. (Wrong Character)"
    }
    else if (regex2.test(scramble)) {
        return "Please input a valid scramble. (Spaces)"
    }
     else if (regex2.test(solution)) {
        return "Please input a valid solution. (Spaces)"
    }
    for (let move = 0; move<splitSolution.length; move++) {
        if (/x|x'|x2|y|y'|y2|z|z'|z2/.test(splitSolution[move])) {
            moveCount--
        }
    }
    const u = () => {
        cp = [cp[3], cp[0], cp[1], cp[2], cp[4], cp[5], cp[6], cp[7]]
        co = [co[3], co[0], co[1], co[2], co[4], co[5], co[6], co[7]]
    }
    const up = () => {
        u2(); u()
    }
    const u2 = () => {
        u(); u()
    }
    
    const d = () => {
        x2(); u(); x2()
    }
    const dp = () => {
        d2(); d()
    }
    const d2 = () => {
        d(); d()
    }
    const r = () => {
        zp(); u(); z()
    }
    const rp = () => {
        r2(); r()
    }
    const r2 = () => {
        r(); r()
    }
    const l = () => {
        z(); u(); zp()
    }
    const lp = () => {
        l2(); l()
    }
    const l2 = () => {
        l(); l()
    }
    const f = () => {
        x(); u(); xpp()
    }
    const fp = () => {
        f2(); f()
    }
    const f2 = () => {
        f(); f()
    }
    const b = () => {
        xpp(); u(); x()
    }
    const bp = () => {
        b2(); b()
    }
    const b2 = () => {
        b(); b()
    } 
    const x = () => {
        cp = [cp[3], cp[2], cp[5], cp[4], cp[7], cp[6], cp[1], cp[0]]
        co = [(co[3]+1)%3, (co[2]+2)%3, (co[5]+1)%3, (co[4]+2)%3, (co[7]+1)%3, (co[6]+2)%3, (co[1]+1)%3, (co[0]+2)%3]
    }
    const xpp = () => {
        x2(); x()
    }
    const x2 = () => {
        x(); x()
    }
    const y = () => {
        cp = [cp[3], cp[0], cp[1], cp[2], cp[5], cp[6], cp[7], cp[4]]
        co = [co[3], co[0], co[1], co[2], co[5], co[6], co[7], co[4]]
    }
    const yp = () => {
        y2(); y()
    }
    const y2 = () => {
        y(); y()
    }
    const z = () => {
        yp(); x(); y()
    }
    const zp = () => {
        z2(); z()
    }
    const z2 = () => {
        z(); z()
    }
    const moves = {
        "U": u,
        "U'": up,
        "U2": u2,
        "D": d,
        "D'": dp,
        "D2": d2,
        "R": r,
        "R'": rp,
        "R2": r2,
        "L": l,
        "L'": lp,
        "L2": l2,
        "F": f,
        "F'": fp,
        "F2": f2,
        "B": b,
        "B'": bp,
        "B2": b2,
        "x": x,
        "x'": xpp,
        "x2": x2,
        "y": y,
        "y'": yp,
        "y2": y2,
        "z": z,
        "z'": zp,
        "z2": z2
    }
    for (let move = 0; move<splitScramble.length; move++) {
        moves[splitScramble[move]]()
    }
    for (let move = 0; move<splitSolution.length; move++) {
        moves[splitSolution[move]]()
    }
    for (let i = 0; i<3; i++) {
        x()
        let currentState = [cp, co]
        if (currentState.toString() == solvedState.toString()) {
            return "Solved! your solution was " + moveCount + " moves."
        }
        else {
            for (let i = 0; i<4; i++) {
                y()
                let currentState = [cp, co]
                if (currentState.toString() == solvedState.toString()) {
                    return "Solved! your solution was " + moveCount + " moves."
                }
                else {
                    for (let i = 0; i<4; i++) {
                        z()
                        let currentState = [cp, co]
                        if (currentState.toString() == solvedState.toString()) {
                            return "Solved! your solution was " + moveCount + " moves."
                        }
                    }
                }
            }
        }
    } return "Not Solved :("
}

//antonio kam