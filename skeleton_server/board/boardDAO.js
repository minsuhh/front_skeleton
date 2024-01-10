const getPool = require('../common/pool')

//이곳에 필요한 sql 등록
const sql = { 
    boardList: 'SELECT * FROM board', // 게시물 조회시 등록할 sql문 
}

const boardDAO = {
    //게시물 조회 요청이 들어왔을때, router에 의해 실행.. DBMS의 역할.
    boardList: async (callback) => {
        let conn = null
        try {
            conn = await getPool().getConnection()

            console.log('dao') //디버깅용

            const [rows] = await conn.query(sql.boardList)
            console.log('11', rows) //디버깅용 , 조회내용 확인 완
            
            callback ({status: 200, message: 'OK', 
            data: {rows}})
        } catch (error) {
            return { status: 500, message: '조회 실패', error: error }
        } finally {
            if (conn !== null) conn.release()
        }
    }
}

module.exports = boardDAO