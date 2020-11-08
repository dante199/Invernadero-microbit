def on_button_pressed_a():
    if input.temperature() >= 8 and input.temperature() <= 30:
        basic.show_number(input.temperature())
        basic.show_leds("""
            # . # # .
            . # . . #
            . # . . .
            . # . . #
            . . # # .
            """)
        basic.clear_screen()
        basic.pause(1000)
        if pins.analog_read_pin(AnalogPin.P0) >= 200 and pins.analog_read_pin(AnalogPin.P0) <= 600:
            basic.show_number(pins.analog_read_pin(AnalogPin.P0))
        else:
            basic.show_icon(IconNames.NO)
            basic.clear_screen()
    else:
        basic.show_icon(IconNames.NO)
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)
