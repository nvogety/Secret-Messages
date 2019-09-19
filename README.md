# Secret-Messages
A simple app that blurs the screen based on the users distance from the screen


__External parts__:
* Arduino Uno
* Ultrasonic Range Sensor

That's it!
The arduino program prints distance data from the sensor to the serial monitor, and then the node app reads each line of the serial monitor and emits that as an event with Socket.io. Based on this number (which is in cm), the screen with a specified message blurs accordingly. You can also pick the "sensitivity" of the blurring, so there is an option to only see the message once you are really close, or have it less sensitive and only blur when you are very far.

__Dependencies include__:
* EJS
* Express
* SerialPort
* Socket.io
