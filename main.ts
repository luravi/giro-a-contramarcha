basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    // Esperar 3 segundos
    basic.pause(3000)
    // Encender LED derecho
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    // Girar a la izquierda
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    // M2 gira en dirección contraria
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    // Tiempo para que gire
    basic.pause(1000)
    // Apagar LED derecho
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    // Avanzar a máxima velocidad
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    // Tiempo para avanzar
    basic.pause(2000)
})
