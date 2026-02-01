enum bwop {
    //% block="AND"
    and,
    //% block="OR"
    or,
    //% block="XOR"
    xor,
    //% block=">>"
    rshs,
    //% block="<<"
    lshz,
    //% block=">>>"
    rshz
}

//% weight=100 color=#0fbc11 icon="\uf10c"
namespace Bitwise {
    //% blockId="id_aox" block="%op1 | %op | %op2"
    export function fn_aox(op1: number, op: bwop, op2: number): number {
        if (op == bwop.and)
            return op1 & op2
        else if (op == bwop.or)
            return op1 | op2
        else if (op == bwop.xor)
            return op1 ^ op2
        else if (op == bwop.rshs)
            return op1 >> op2
        else if (op == bwop.lshz)
            return op1 << op2
        else
            return op1 >>> op2
    }
    
    //% blockId="id_not" block="NOT | %op1"
    export function fn_not(op1: number): number {
        return op1 ^ 0xffff
    }
}