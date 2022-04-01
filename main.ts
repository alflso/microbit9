function 시작표시 () {
    basic.showString("START")
}
function 에너지_사용도_2_LED () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
}
function 에너지_사용도_1_LED () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
}
function LED표시 () {
    if (에너지_사용도 == 0) {
        에너지_사용도_0_LED()
    } else if (에너지_사용도 == 1) {
        에너지_사용도_1_LED()
    } else {
        에너지_사용도_2_LED()
    }
}
function 에너지사용정도분류 () {
    온도측정()
    if (측정된_온도 > 300) {
        에너지_사용도 = 0
    } else if (측정된_온도 <= 300 && 측정된_온도 >= 295) {
        에너지_사용도 = 1
    } else {
        에너지_사용도 = 2
    }
}
function 온도측정 () {
    측정된_온도 = input.temperature() * 10
}
function 에너지_사용도_0_LED () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.pause(500)
    basic.clearScreen()
}
let 측정된_온도 = 0
let 에너지_사용도 = 0
시작표시()
basic.forever(function () {
    에너지사용정도분류()
    LED표시()
})
