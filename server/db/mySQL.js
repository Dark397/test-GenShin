//  创建sql语句对象
var sqlMap = {
    usersql: {
        add: 'insert into user (username, userpassword) values (?,?)',
        select: 'select * from user'
    }
}

module.exports = sqlMap;