import axios from "axios";

import {getAuth
        ,GithubAuthProvider
        ,GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
class AuthLogic {
  constructor(){
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
    this.signOutProvider = new signOut();
  }
  getUserAuth = () =>{
    return this.auth;
  }
  getGoogleAuthProvider = () =>{
    return this.googleProvider;
  }
}//end of AuthLogic

export default AuthLogic;

export const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});

export const loginGoogle = (auth, googleProvider) => {
  console.log("loginGoogle 호출 성공");
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);
      console.log(JSON.stringify(result));
      const user = result.user;
      resolve(user);
    }).catch((error) => reject(error));
})
}

//파이어베이스 인증에서 등록해둔 이메일과 비번으로 로그인 하기
export const loginEail = (params) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
}

export const loginKakao = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url:"카카오토큰을 받아올  URL주소",
        params: params

      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}