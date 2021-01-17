function isSolved3x3 (scramble = "", solution = "") {
    let cp = [0, 1, 2, 3, 4, 5, 6, 7]
    let co = [0, 0, 0, 0, 0, 0, 0, 0]
    let ep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let eo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let xp = [0, 1, 2, 3, 4, 5]
    const solvedState = [cp, co, ep, eo, xp]
    const splitScramble = scramble.split(" ")
    const splitSolution = solution.split(" ")
    let moveCount = splitSolution.length
    const regex1 = /[^UDFBRLudfbrl2' xyzw]/g
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
        ep = [ep[3], ep[0], ep[1], ep[2], ep[4], ep[5], ep[6], ep[7], ep[8], ep[9], ep[10], ep[11]]
        eo = [eo[3], eo[0], eo[1], eo[2], eo[4], eo[5], eo[6], eo[7], eo[8], eo[9], eo[10], eo[11]]
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
    const uw = () => {
        d(); y()
    }
    const uwp = () => {
        uw2(); uw()
    }
    const uw2 = () => {
        uw(); uw()
    }
    const dw = () => {
        u(); yp()
    }
    const dwp = () => {
        dw2(); dw()
    }
    const dw2 = () => {
        dw(); dw()
    }
    const rw = () => {
        l(); x()
    }
    const rwp = () => {
        rw2(); rw()
    }
    const rw2 = () => {
        rw(); rw()
    }
    const lw = () => {
        r(); xpp()
    }
    const lwp = () => {
        lw2(); lw()
    }
    const lw2 = () => {
        lw(); lw()
    }
    const fw = () => {
        b(); z()
    }
    const fwp = () => {
        fw2(); fw()
    }
    const fw2 = () => {
        fw(); f()
    }
    const bw = () => {
        f(); zp()
    }
    const bwp = () => {
        bw2(); bw()
    }
    const bw2 = () => {
        bw(); bw()
    }
    const x = () => {
        cp = [cp[3], cp[2], cp[5], cp[4], cp[7], cp[6], cp[1], cp[0]]
        co = [(co[3]+1)%3, (co[2]+2)%3, (co[5]+1)%3, (co[4]+2)%3, (co[7]+1)%3, (co[6]+2)%3, (co[1]+1)%3, (co[0]+2)%3]
        ep = [ep[2], ep[6], ep[8], ep[7], ep[3], ep[1], ep[9], ep[11], ep[10], ep[5], ep[0], ep[4]]
        eo = [(eo[2]+1)%2, eo[6], (eo[8]+1)%2, eo[7], eo[3], eo[1], eo[9], eo[11], (eo[10]+1)%2, eo[5], (eo[0]+1)%2, eo[4]]
        xp = [xp[2], xp[1], xp[5], xp[3], xp[0], xp[4]]
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
        ep = [ep[3], ep[0], ep[1], ep[2], ep[7], ep[4], ep[5], ep[6], ep[9], ep[10], ep[11], ep[8]]
        eo = [eo[3], eo[0], eo[1], eo[2], (eo[7]+1)%2, (eo[4]+1)%2, (eo[5]+1)%2, (eo[6]+1)%2, eo[9], eo[10], eo[11], eo[8]]
        xp = [xp[0], xp[2], xp[3], xp[4], xp[1], xp[5]]
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
        "Uw": uw,
        "Uw'": uwp,
        "Uw2": uw2,
        "Dw": dw,
        "Dw'": dwp,
        "Dw2": dw2,
        "Rw": rw,
        "Rw'": rwp,
        "Rw2": rw2,
        "Lw": lw,
        "Lw'": lwp,
        "Lw2": lw2,
        "Fw": fw,
        "Fw'": fwp,
        "Fw2": fw2,
        "Bw": bw,
        "Bw'": bwp,
        "Bw2": bw2,
        "u": uw,
        "u'": uwp,
        "u2": uw2,
        "d": dw,
        "d'": dwp,
        "d2": dw2,
        "r": rw,
        "r'": rwp,
        "r2": rw2,
        "l": lw,
        "l'": lwp,
        "l2": lw2,
        "f": fw,
        "f'": fwp,
        "f2": fw2,
        "b": bw,
        "b'": bwp,
        "b2": bw2,
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
        let currentState = [cp, co, ep, ep, xp]
        if (currentState.toString() == solvedState.toString()) {
            return `Solved! your solution was ${moveCount} moves long.`
        }
        else {
            for (let i = 0; i<4; i++) {
                y()
                let currentState = [cp, co, ep, eo, xp]
                if (currentState.toString() == solvedState.toString()) {
                    return `Solved! your solution was ${moveCount} moves long.`
                }
                else {
                    for (let i = 0; i<4; i++) {
                        z()
                        let currentState = [cp, co, ep, eo, xp]
                        if (currentState.toString() == solvedState.toString()) {
                            return `Solved! your solution was ${moveCount} moves long.`
                        }
                    }
                }
            } 
        }
    } return "Not Solved :("
}

console.log(isSolved3x3("R", "R' U U'"))