/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mark lutabi
 * Created on: Sep 2024
 * This program displays the current temperature
*/

// 
let currentTemperature = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)

basic.clearScreen()
input.onButtonPressed(Button.A, function () {
basic.showString( 'The temperatue is' )
    currentTemperature = input.temperature()
    basic.showNumber(currentTemperature)
})