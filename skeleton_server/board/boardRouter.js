const express = require('express')
const router = express.Router()
const boardDAO = require('./boardDAO')

// 유저 요청 url이 http://localhost:8000/boards/boardList 들어오면 실행
router.get('/boardList', function (req, res, next) {
    console.log('boardList...')
    const data = req.query
    boardDAO.boardList(data, (resp) => {
        res.send(resp)
    })
})

module.exports = router