class NewsController {
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.render("newsDetails");
  }

 
}

module.exports = new NewsController();
