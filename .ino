// Código de ejemplo para Arduino
void setup() {
  // Inicializa el pin digital 13 como salida
  pinMode(13, OUTPUT);
}

void loop() {
  // Enciende el LED integrado en el pin 13
  digitalWrite(13, HIGH);
  delay(1000); // Espera 1 segundo
  // Apaga el LED
  digitalWrite(13, LOW);
  delay(1000); // Espera 1 segundo
}
