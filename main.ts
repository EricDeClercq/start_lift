function Deur_Toe () {
    music.ringTone(262)
    basic.pause(2000)
    music.stopAllSounds()
    OLED.clear()
    OLED.writeStringNewLine("Coderdojo Zwijnaarde")
    OLED.drawRectangle(
    40,
    20,
    62,
    58
    )
    OLED.drawRectangle(
    66,
    20,
    88,
    58
    )
}
function Deur_Open () {
    OLED.clear()
    OLED.writeStringNewLine("Coderdojo Zwijnaarde")
    music.ringTone(262)
    basic.pause(500)
    music.stopAllSounds()
    OLED.drawRectangle(
    40,
    20,
    46,
    58
    )
    OLED.drawRectangle(
    82,
    20,
    88,
    58
    )
}
function Lees_Toestand () {
    Waarden = Bitwise.fn_aox(65528, bwop.xor, pins.i2cReadNumber(32, NumberFormat.Int8LE, false))
    Sel_Knoppen = Bitwise.fn_aox(Sel_Knoppen, bwop.or, Bitwise.fn_aox(Waarden, bwop.and, 16368))
    Sel_Verdiep = Bitwise.fn_aox(Waarden, bwop.and, 15)
}
input.onButtonPressed(Button.A, function () {
    Deur_Toe()
})
input.onButtonPressed(Button.AB, function () {
    Laat_Binnen()
})
input.onButtonPressed(Button.B, function () {
    Deur_Open()
})
function Laat_Binnen () {
    Deur_Open()
    basic.pause(1000)
    Deur_Toe()
}
let Sel_Verdiep = 0
let Sel_Knoppen = 0
let Waarden = 0
OLED.init(128, 64)
Deur_Toe()
