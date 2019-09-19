#include <NewPing.h>

#define TRIGGER_PIN  12  
#define ECHO_PIN     11 
#define MAX_DISTANCE 200 // In cm

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE); // Create NewPing object.

void setup() {
  Serial.begin(9600); // Open serial monitor at 115200 baud to see ping results.
}

void loop() {
  delay(1000); // Wait a second before each collection, easier for js to handle?
  Serial.println(sonar.ping_cm()); // Printed to serial, also will be read by node
}
