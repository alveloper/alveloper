var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  // loop: true,
  delay: 50,
});

typewriter
  .pauseFor(6500)
  .typeString("Hello there! 🙌 I'm Suyeon")
  .pauseFor(200)
  .deleteAll()
  // .typeString("I'm Suyeon")
  // .deleteAll()
  .typeString("a passionate <mark>frontend developer</mark> from Korea.")
  .pauseFor(1000)
  .start();