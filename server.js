var express = require("express")
var bodyParser = require("body-parser")

var app = express()

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With", "Content-Type, Accept")
  res.header("Access-control-Allow-Methods", "POST, GET");
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var tutorials = [
  {
    id: 1,
    title: "Ultra Miami 2017 (Official 4K Aftermovie)",
    description: "Tickets for Ultra Music Festival’s 20th Anniversary are on sale now!",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/p6N-ad52Z60" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
    thumbnail: "https://s3.eu-central-1.amazonaws.com/octaviansuniversalbucket/Artists.png"
  },
  {
    id: 2,
    title: "Ultra Miami 2016 Aftermovie (4K)",
    description: "ULTRA MIAMI 2016 - OFFICIAL AFTERMOVIE. Explore memories of Ultra Music Festival 2016 in 4K with this cinematic aftermovie from Final Kid!",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/cvFdFAr_7po" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
    thumbnail: "https://s3.eu-central-1.amazonaws.com/octaviansuniversalbucket/Home.png"
  },
  {
    id: 3,
    title: "RELIVE ULTRA MIAMI 2015 (Official 4K Aftermovie)",
    description: "RELIVE ULTRA MIAMI 2015 Official 4K Aftermovie",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/F0xoBUDUYyo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
    thumbnail: "https://s3.eu-central-1.amazonaws.com/octaviansuniversalbucket/Lineup.png"
  },
  {
    id: 4,
    title: "RELIVE ULTRA MIAMI 2012 (Official Aftermovie)",
    description: "*2013 TICKETS ON SALE NOW! http://www.ultramusicfestival.com .OFFICIAL AFTERMOVIE MIAMI 2012 \\ Final Kid and the UMFTV team trawl through over 300 hours ",
    iframe: '<div class="container"><iframe class="video" src="https://www.youtube.com/embed/3TlJWoM69ww" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>',
    thumbnail: "https://s3.eu-central-1.amazonaws.com/octaviansuniversalbucket/Merch.png"
  }
]

var comments = [
  {
    username: "octi2011",
    comment: "This video was really cool."
  }
]

app.post('/comments', (req, res) => {
  var comment = req.body

  if (comment) {
    if (comment.username && comment.comment) {
      comments.push(comment)
    } else {
      res.send("You posted invalid data")
    }
  } else {
    res.send("Your post has no body!")
  }
  console.log(comments)
  res.send("You successfully posted a comment")
})

app.get('/tutorials', (req, res) => {
  console.log("GET from server")
  res.send(tutorials)
})

app.listen(6069)
