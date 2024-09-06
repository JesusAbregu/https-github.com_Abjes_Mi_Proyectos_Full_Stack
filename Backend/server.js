// Ejemplo de autenticación en Express (Node.js)
const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
  secret: 'mi-secreto',
  resave: false,
  saveUninitialized: true
}));

app.post('/login', (req, res) => {
  // Verificar credenciales y establecer sesión
});
const { Builder, By, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

(async function example() {
  try {
    await driver.get('http://localhost:3000');
    let element = await driver.findElement(By.name('q'));
    await element.sendKeys('test');
    await element.submit();
    await driver.wait(until.titleIs('Expected Title'), 1000);
  } finally {
    await driver.quit();
  }
})();
