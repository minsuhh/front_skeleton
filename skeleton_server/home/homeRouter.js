var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    //index.html이 출력되면서 그곳에 {} 정보를 넘긴 것.
    //nunjucks 설정이 app.js에 되어있어야 하고
    res.render('index', {title: 'Express'})
})

module.exports = router