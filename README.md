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

__Some Screenshots__:
<img width="1388" alt="Screen Shot 2019-09-18 at 10 45 26 PM" src="https://user-images.githubusercontent.com/23444739/65210435-2e9d6900-da69-11e9-8274-74a1691c5830.png">

<img width="1386" alt="Screen Shot 2019-09-18 at 10 45 37 PM" src="https://user-images.githubusercontent.com/23444739/65210458-4bd23780-da69-11e9-8518-23a76c1f4470.png">

<img width="1387" alt="Screen Shot 2019-09-18 at 10 45 45 PM" src="https://user-images.githubusercontent.com/23444739/65210483-5a205380-da69-11e9-8b71-391204ad48da.png">
