fetch('https://opensheet.vercel.app/1lyFs15PACC8W7XWBOehzR3mmMZzezMxEAFQNUxtsFB4/Sheet1')
  .then(res => res.json())
  .then(data => {
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i]);
      const div2 =
        "<div> <div class=\"container description-box\">" + "<div class=\"title-style text-center\">" +
        "<h1 id=\"tex\">" + data[i].section + "</h1> </div>" + "<div class=\"menu " + data[i].category + "\"></div>" +
        "</div> </div>"

      if ($('.' + data[i].category).length === 0) {
        $('.random').append(div2)
      }
      const div =
        "<div class=\"menu-img text-center\">" + "<img src=" + data[i].PicURL + "></img>" +
        "<h3>" + data[i].title + "</h3>" +
        "<button type=\"button\" class=\"btn-buy\">" + data[i].price + "</button>" +
        "<div class=\"overlay\"> </div> </div> "
      $('.' + data[i].category).append(div)
    }
  })
 