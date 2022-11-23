import React, { useState, useEffect } from 'react';
import Login_navbar from '../components/Login_navbar';
import login_styles from '../static/css/login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const move_to_signup = () => {
    navigate('/Signup');
  };

  //   const [account, setAccount] = useState({
  //     id: "",
  //     pw: "",
  //   });
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  //   useEffect(() => {
  //     console.log(id, pw);
  //   }, [id, pw]);

  //   const onChangeAccount = (e) => {
  //     setAccount({
  //       ...account,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const onChangeid = e => {
    setId(e.target.value);
  };
  const onChangepw = e => {
    setPw(e.target.value);
  };
  const post_acount = async e => {
    e.preventDefault();
    let formData = new FormData();

    formData.append('id', id);
    formData.append('pw', pw);

    await axios
      .post('http://127.0.0.1:8080/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function(res) {
        console.log(res, 'post 성공');
      })
      .catch(function(err) {
        console.log(err, 'post 실패');

        for (let key of formData.keys()) {
          console.log(key);
        }

        /* value 확인하기 */
        for (let value of formData.values()) {
          console.log(value);
        }
      });
  };
  return (
    <div className={login_styles.login_page}>
      <Login_navbar />
      <div className={login_styles.container}>
        <div className={login_styles.input_container}>
          <div className={login_styles.one_input}>
            <label for="id" className={login_styles.label}>
              학번
            </label>
            <input
              type="number"
              id="id"
              name="id"
              className={login_styles.input}
              onChange={onChangeid}
            ></input>
          </div>

          <div className={login_styles.one_input}>
            <label for="pw" className={login_styles.label}>
              비밀번호
            </label>
            <input
              type="password"
              id="pw"
              name="pw"
              className={login_styles.input}
              onChange={onChangepw}
            ></input>
          </div>
        </div>
        <button className={login_styles.login_button} onClick={post_acount}>
          로그인
        </button>
      </div>
      <button className={login_styles.signup_button} onClick={move_to_signup}>
        회원가입
      </button>
    </div>
  );
}

export default Login;
