particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles.js config loaded');
  });

const instance = new Typewriter('#typewriter', {
    delay: 40,
    loop: true,
    deleteSpeed: 10,
});
const instance2 = new  Typewriter('#typewriter2', {
    delay: 10,
    loop: true,
    deleteSpeed: 10,
});
instance
    .typeString("Hi there! I\'m <span id=\"red\">Jugal</span>")
    .pauseFor(1500)
    .deleteAll()
    .typeString("I\'m a <span id=\"red\">Software Engineer</span>")
    .pauseFor(4000)
    .deleteAll()
    // .typeString("I\'m a Tech Enthusiast")
    // .pauseFor(1500)
    // .deleteAll()
    .typeString("Pursuing <span id=\"red\">Masters</span> Degree in <span id=\"red\">Computer Science</span>")
    .pauseFor(1600)
    .deleteAll()
    // .typeString("Reach out to <span id=\"red\">me</span>.")
    // .pauseFor(6900)
    // .deleteAll()
    // .pauseFor(0)
    .start();

instance2
.pauseFor(1500).
typeString('Nice to meet you!')
.pauseFor(1000)
.deleteAll()
.typeString("Full-Stack Web Development | Software Engineering | Cloud Computing")
.pauseFor(1500)
.deleteAll()
.typeString("At Northeastern University, Boston")
.pauseFor(3750)
.deleteAll()
// .typeString("LinkedIn: https://www.linkedin.com/in/jugalj05hi")
// .typeString("<br/> Email: joshi.ju@northeastern.edu")
// .pauseFor(2500)
// .deleteAll()
// .pauseFor(0)    
.start();

