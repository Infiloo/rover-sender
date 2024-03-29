input.onPinPressed(TouchPin.P0, function () {
    radio.sendNumber(7)
    basic.showString("show")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . # . . .
            # . . # .
            . . # . #
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . # . # .
            . . # # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    if (receivedNumber == 11) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Chessboard)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
    radio.sendNumber(5)
    basic.showNumber(1)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendNumber(12)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(13)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showString("Stop")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
    radio.sendNumber(6)
    basic.showNumber(2)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    radio.sendNumber(8)
    basic.showString("Batterie")
})
input.calibrateCompass()
basic.showArrow(ArrowNames.North)
basic.showArrow(ArrowNames.East)
basic.showArrow(ArrowNames.South)
basic.showArrow(ArrowNames.West)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    . # # # .
    . # . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # . .
    . # # # .
    . # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . . # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # . .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # # .
    . # # # .
    . . # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . # .
    . # # # .
    . . . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    # . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    # . # . .
    . . . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    # . # . #
    . . . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . . . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    . # . # .
    . . . . .
    `)
radio.setGroup(123)
basic.showIcon(IconNames.Yes)
