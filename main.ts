input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        basic.showNumber(input.temperature())
        basic.showLeds(`
            # . # # .
            . # . . #
            . # . . .
            . # . . #
            . . # # .
            `)
        basic.clearScreen()
        basic.pause(1000)
        if (pins.analogReadPin(AnalogPin.P0) >= 200 && pins.analogReadPin(AnalogPin.P0) <= 600) {
            basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        } else {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
        }
        
    } else {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
    
})
