let distance = 0
input.onButtonPressed(Button.A, function () {
    distance = 9
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showNumber(distance)
    basic.pause(2000)
    distance = sonar.ping(
    DigitalPin.P9,
    DigitalPin.P12,
    PingUnit.Centimeters
    )
    basic.showIcon(IconNames.Square)
    basic.pause(2000)
    basic.showNumber(distance)
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
})
