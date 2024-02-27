function validateHello(greetings) {
  return (
    {
      hello: true,
      ciao: true,
      salut: true,
      hallo: true,
      hola: true,
      ahoj: true,
      czesc: true,
      other: false,
    }[greetings] || false
  );
}
console.log(validateHello(ha));
