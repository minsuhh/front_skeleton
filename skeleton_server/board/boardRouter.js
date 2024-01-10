const express = require('express')
const router = express.Router()
const boardDAO = require('./boardDAO')

// 유저 요청 url이 http://localhost:8000/boards/boardList 들어오면 실행
router.get('/boardList', function (req, res, next) {
    console.log('boardList...')
    // const data = req.query
    boardDAO.boardList((resp) => { // DAO에서 넘기는게 json 데이터기 때문에 . 매개변수 맞추기
        console.log('router result :', resp)
        res.json(resp)
    })
})

module.exports = router