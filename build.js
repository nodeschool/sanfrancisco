var handlebars = require('handlebars')
var fs = require('fs')
var path = require('path')

// handlebars needs to register each partial before the template is compiled
var processPartials = (partials) => {
  partials.forEach(function (elt, i) {
    let filename = path.basename(elt, '.hbs')
    let fileContents = fs.readFileSync(`./partials/${elt}`, 'utf8')
    handlebars.registerPartial(filename, fileContents)
  })
}

fs.readdir('./partials/', (err, partials) => {
  if (err) console.log(err, 'error with partials')

  // register all the partials
  processPartials(partials)

  fs.readFile('./index.hbs', 'utf8', (err, template) => {
    if (err) console.log(err, 'error with main template')

    // get the main template
    let templateHtml = template

    // read in the data json file
    fs.readFile('./data.json', 'utf8', (err, results) => {
      if (err) console.log(err, 'error with data.json')

      let data = results

      // smush the templates and data together
      let template = handlebars.compile(templateHtml.toString())
      let html = template(JSON.parse(data))

      // write the file, now you're done!
      fs.writeFile('./index.html', html, (err) => {
        if (err) console.log(err, 'error with writing index.html')

        console.log('all done!')
      })
    })
  })
})

