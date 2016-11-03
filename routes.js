
module.exports = {
  index: foo,
  message: message
}

function foo(req, res) {
  res.send('<h1 style="text-align: center;">Welcome Mr. Kynd</h1>')
}

function message(req, res) {
  res.render('index', {
    title: "Mr. Kynd",
    navLinks: ["Home", "About", "Contact", "Blog"]
  })
}
