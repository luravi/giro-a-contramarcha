basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)

def on_forever():
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
    basic.pause(5000)
    maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
    maqueen.motor_stop(maqueen.Motors.M1)
    basic.pause(5000)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 255)
    basic.pause(2000)
basic.forever(on_forever)
