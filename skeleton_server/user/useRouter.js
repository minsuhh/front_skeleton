const express = require('express')
const router = express.Router()
const userDAO = require('./userDAO')

// 유저업무와 관련된 요청이 들어왔을때 그 요청을 처리하는 역할
// http://localhost:8000/users/signup
router.post('/signup', async (req, res, next) => {
    console.log('user router, signup.....')
    //front 전달 데이터 획득
    const data = req.body
    userDAO.signup(data, (resp) => {
        res.send(resp)
    })
})

router.post('/signin', (req, res, next) => { //url이 signin으로 들어온다면 실행
    console.log('login router....')
    const data = req.body
    userDAO.login(data, (resp) => {
        // client에 응답
        res.json(resp)
    })
}) 

module.exports = router