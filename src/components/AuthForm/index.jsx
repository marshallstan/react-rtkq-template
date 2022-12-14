import { useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '@/store/api/authApi'
import { useDispatch } from 'react-redux'
import { login } from '@/store/reducer/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const initialUserForm = {
  username: '',
  email: '',
  password: ''
}

const AuthForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.preLocation || '/'
  const [regFn, { error: regError }] = useRegisterMutation()
  const [loginFn, { error: loginError }] = useLoginMutation()

  const [isLoginForm, setIsLoginForm] = useState(true)
  const [userForm, setUserForm] = useState(initialUserForm)

  const submitHandler = e => {
    e.preventDefault()

    const { username, email, password } = userForm
    if (isLoginForm) {
      loginFn({ identifier: username, password })
        .then(res => {
          if (res.data) {
            const { jwt, user } = res.data
            dispatch(login({ token: jwt, user }))
            navigate(from, { replace: true })
          }
        })
    } else {
      regFn({ username, email, password })
        .then(res => {
          if (res.data) {
            setIsLoginForm(true)
            setUserForm({ ...initialUserForm })
          }
        })
    }
  }

  const changeForm = (e, key) => {
    setUserForm({ ...userForm, [key]: e.target.value })
  }

  const changeStatus = e => {
    e.preventDefault()
    setIsLoginForm(!isLoginForm)
  }

  return (
    <div>
      <p style={{ color: 'red' }}>
        {regError && regError.message}
      </p>
      <p style={{ color: 'red' }}>
        {loginError && loginError.message}
      </p>
      <h2>{isLoginForm ? '登录' : '注册'}</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={userForm.username}
            onChange={e => changeForm(e, 'username')}
            placeholder="用户名"
          />
        </div>
        {
          !isLoginForm && (
            <div>
              <input
                type="email"
                value={userForm.email}
                onChange={e => changeForm(e, 'email')}
                placeholder="电子邮箱"
              />
            </div>
          )
        }
        <div>
          <input
            type="password"
            value={userForm.password}
            onChange={e => changeForm(e, 'password')}
            placeholder="密码"
          />
        </div>
        <div>
          <button>{isLoginForm ? '登录' : '注册'}</button>
          <a href="#" onClick={changeStatus}>
            {isLoginForm ? '没有帐号，点击注册' : '已有帐号，点击登录'}
          </a>
        </div>
      </form>
    </div>
  )
}

export default AuthForm
