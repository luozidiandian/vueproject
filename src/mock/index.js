import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers} from './data/user'

export default {
  init() {
    let mock = new MockAdapter(axios);


    /**
     * 登录页面测试
     */
    mock.onPost('/user/login').reply(
      arg => {
        let {username, password} = JSON.parse(arg.data);
        return new Promise((resolve, reject) => {
          let token = null;

          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              token = JSON.stringify(u);
              return true
            }
          });

          if (hasUser) {
            resolve([200, {code: 200, msg: '请求成功', token: token}])
          } else {
            resolve([200, {code: 500, msg: '账号或密码错误'}])
          }
        })
      })
  }
}
