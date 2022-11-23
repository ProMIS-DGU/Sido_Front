import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../static/css/login.module.css';
function Signup() {
  const [inputs, setInputs] = useState({
    name: '',
    id: '',
    pw: '',
    semester: '',
    dept: '',
    years: '',
  });

  useEffect(() => {
    // console.log(inputs);
  }, [inputs]);

  const { name, id, pw, semester, dept } = inputs;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      <div className={styles.aco2}>
        <div className={styles.navbar_section}>
          <img className={styles.aco_image2} src="images/aco2.png" />
          <h4 className={styles.signup}>회원가입</h4>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <br />
          <br />
          <div className={styles.one_input}>
            <label for="name" className={styles.label}>
              이름
            </label>
            <input
              type="text"
              name="name"
              className={styles.input}
              value={name}
              onChange={onChangeInput}
            ></input>
          </div>
          <div className={styles.one_input}>
            <label for="dept" className={styles.label}>
              학과
            </label>
            <input
              type="text"
              name="dept"
              className={styles.input}
              onChange={onChangeInput}
              value={dept}
            ></input>
          </div>
          <div className={styles.one_input}>
            <label for="id" className={styles.label}>
              학번
            </label>
            <input
              type="number"
              name="id"
              className={styles.input}
              onChange={onChangeInput}
              value={id}
            ></input>
          </div>
          <div className={styles.one_input}>
            <label for="semester" className={styles.label}>
              이수학기
            </label>
            <input
              type="number"
              name="semester"
              className={styles.input}
              onChange={onChangeInput}
              value={semester}
            ></input>
          </div>
          <div className={styles.one_input}>
            <label for="pw" className={styles.label}>
              비밀번호
            </label>
            <input
              type="password"
              name="pw"
              className={styles.input}
              onChange={onChangeInput}
              value={pw}
            ></input>
          </div>
        </div>
      </div>
      <button className={styles.signup_button}>가입하기</button>
    </>
  );
}

export default Signup;
