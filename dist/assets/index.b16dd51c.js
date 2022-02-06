var rt=Object.defineProperty,at=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var be=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var Fe=(o,i,a)=>i in o?rt(o,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[i]=a,Ce=(o,i)=>{for(var a in i||(i={}))ut.call(i,a)&&Fe(o,a,i[a]);if(be)for(var a of be(i))dt.call(i,a)&&Fe(o,a,i[a]);return o},ye=(o,i)=>at(o,st(i));import{f as v,c as ct,R as lt,u as P,a as _,r,j as e,F as S,s as t,b as n,d as D,e as ie,g as re,h as ve,L as k,i as ae,k as pt,l as V,m as ht,n as se,o as mt,p as xt,q as gt,w as ue,t as ft,v as wt,B as bt,S as Ft,x as N,y as Ct,z as yt,P as vt}from"./vendor.9f227f43.js";const St=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const x of u.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&l(x)}).observe(document,{childList:!0,subtree:!0});function a(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(s){if(s.ep)return;s.ep=!0;const u=a(s);fetch(s.href,u)}};St();const Bt={apiKey:"AIzaSyBehENZGmPCb7IjGGaaJoZws8iAVvzHMQc",authDomain:"my-portfolio-986db.firebaseapp.com",databaseURL:"my-portfolio-986db",projectId:"my-portfolio-986db",storageBucket:"my-portfolio-986db.appspot.com",messagingSenderId:"1044178099208",appId:"1:1044178099208:web:6503ba091332208d6545bd",measurementId:"G-GLV1SQT78Z"};v.initializeApp(Bt);const Se=ct({name:"user",initialState:{user:{uid:"",displayName:""}},reducers:{login:(o,i)=>{o.user=i.payload},logout:o=>{o.user={uid:"",displayName:""}},updateUserProfile:(o,i)=>{o.user.displayName=i.payload.displayName}}}),{login:At,logout:Dt,updateUserProfile:de}=Se.actions,M=o=>o.user.user;var Et=Se.reducer;const Tt=lt.createContext({displayName:"",uid:""}),ce=({children:o})=>{const i=P(M),a=_();return r.exports.useEffect(()=>{const l=v.auth().onAuthStateChanged(s=>{a(s?At({uid:s.uid,displayName:s.displayName}):Dt())});return()=>{l()}},[a]),e(S,{children:e(Tt.Provider,{value:i,children:o})})};var kt="/assets/PR2_Img.87f2e1ad.png",zt="/assets/PR_Img.f8e9260d.png";const F=t.p`
  margin: 1rem 0;
  font-size: 1rem;
  font-weight: bold;
  @media (max-width: 420px) {
    margin: 0;
    font-size: 0.8rem;
  }
`,O=t(F)`
  margin: 1rem 0 0;
  text-align: left;
  @media (max-width: 420px) {
    margin: 10px 0 0 10px;
    font-size: 1rem;
    display: block;
  }
`,W=t.p`
  margin: 1rem 0 0 0;
  font-size: 1rem;
  font-weight: bold;
`,Z=t(F)`
  padding-top: 10px;
  @media (max-width: 420px) {
    padding: 10px;
    font-size: 1rem;
  }
`,le=t(O)`
  text-align: center;
`,K=t(F)`
  color: #ff4646;
  padding: 0.5rem 0 0 0;
  margin: 0;
`,It=t(F)`
  background-color: #fff;
  color: #33bfff;
  border: 5px solid #33bfff;
  width: 40%;
  padding: .3rem;
`,pe=t(F)`
  font-size: 14px;
  text-align: right;
  display: inline-block;
  font-weight: 300;
  color: #808080;
  padding-left: 1rem;
  @media (max-width: 420px) {
    margin: 0.5rem 3rem 0 0;
  }
`,Be=t(pe)`
  @media (max-width: 420px) {
    margin: 0.5rem 0.5rem 0 0;
  }
`,Pt=t.span`
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #ffd740;
  text-decoration: underline;
`,Mt=t(F)`
  margin-right: 1.2rem;
  display: inline-block;
`,Lt=t(F)`
  text-align: center;
  margin: 0;
  font-weight: 300;
`,Nt=t(F)`
  padding: 5px 10px;
  border-radius: 20px;
  margin: 1rem 0 0;
  color: #4fc3f7;
  font-size: 2rem;
  @media (max-width: 420px) {
    font-size: 1.5rem;
    margin: 0;
  }
`,$t=t(F)`
  font-size: 4rem;
  margin: 0;
  @media (max-width: 420px) {
    font-size: 3rem;
  }
`,Ae=t.span`
  font-size: 1rem;
  display: block;
  text-align: left;
  cursor: pointer;
  color: #0070f3;
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`,he=t.span`
  font-weight: 300;
  font-size: 1rem;
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`,De=t(he)`
  font-size: 0.8rem;
  @media (max-width: 420px) {
    font-size: 11px;
  }
`,me=t.img`
  @media (max-width: 420px) {
    height: 100%;
    width: 100%;
  }
`,xe=t.div`
  margin-top: 0.5rem;
  height: 200px;
  @media (max-width: 420px) {
    height: 100px;
    width: 80px;
  }
`,Ee=t.img`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`,U=t.button`
  font-size: 1rem;
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  outline: none;
  background-color: #ffd740;
  font-weight: bold;
  opacity: 0.8;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 420px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`,ge=t(U)`
  height: 50px;
  padding: 10px 15px;
  margin: 10px 20px 10px 0;
  background-color: #ff5252;
  @media (max-width: 420px) {
    height: 40px;
    margin: 10px 5px 0 0;
  }
`,Te=t(U)`
  font-size: 1.5rem;
  width: 445px;
  padding: 15px;
  margin: 1.5rem 0 0;
  @media (max-width: 420px) {
    width: 280px;
    padding: 10px;
    margin: 1.5rem 0 1rem;
  }
`,ke=t(ge)`
  background-color: #ffd740;
`,ze=t(U)`
  padding: 10px 20px 10px;
  border-radius: 0 20px 20px 0;
  opacity: 1;
  @media (max-width: 420px) {
    padding: 5px 10px;
  }
`,Ie=t(ze)`
  padding: 2px 10px;
  border: 1px solid #000;
  @media (max-width: 420px) {
    padding: 2px 10px;
    margin: 0;
  }
`,Y=t(U)`
  font-size: 0.8rem;
  border-radius: 0px;
  padding: 5px 30px;
  margin: 0;
  border: 1px solid #ffd740;
`,Rt=t(Y)`
  background-color: #0070f3;
  border: 1px solid #0070f3;
  color: #fff;
  @media (max-width: 420px) {
    font-size: .7rem;
    padding: 0 1rem;
  }
`,Ut=t.span`
  cursor: pointer;
  color: #a9a9a9;
`,Ht=t(Y)`
  background-color: #fff;
  border: 1px solid #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
`,Pe=t.span`
  padding: 5px 17px;
  font-size: 0.8rem;
  outline: none;
  cursor: pointer;
  @media (max-width: 420px) {
    font-size: .7rem;
    padding: 0 10px;
  }
`,Me=t(U)`
  font-size: 0.8rem;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid #ffd740;
  margin: 0;
  @media (max-width: 420px) {
    padding: 10px;
  }
`,Le=t.div`
  color: #000;
  font-weight: bold;
  position: relative;
  width: 70px;
  height: 65px;
  padding-top: 5px;
  background-color: #ffd740;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
  &::before {
    position: absolute;
    content: "";
    top: 32px;
    left: 16px;
    display: inline-block;
    width: 25px;
    height: 13px;
    border-top: 5px solid;
    transform: rotate(90deg);
  }
  &::after {
    position: absolute;
    top: 38px;
    left: 50%;
    content: "";
    display: inline-block;
    width: 26px;
    height: 13px;
    border-top: 5px solid;
    transform: translateX(-50%);
  }
  &:active {
    color: #000;
  }
  @media (max-width: 420px) {
    opacity: 0.5;
    width: 60px;
    height: 55px;
    &:hover {
      opacity: 1;
    }
    &::after {
      top: 36px;
      width: 23px;
    }
    &::before {
      width: 22px;
      top: 30px;
      left: 12px;
    }
  }
`,Ne=t(Te)`
  font-size: 1rem;
  padding: 10px;
  margin: 0;
  background-color: #ff3d00;
  color: #fff;
  width: 220px;
  border-radius: 5px;
  @media (max-width: 420px) {
    margin: 0.5rem 0 0;
  }
`,Gt=t(Ne)`
  background-color: #33bfff;
  margin: 0 0 0 0.5rem;
  @media (max-width: 420px) {
    margin: 0.5rem 0 0;
  }
`,Ot=t(Le)`
  @media (max-width: 420px) {
    opacity: 0.8;
  }
`,jt=t(U)`
  padding: 10px 15px;
`,H=t.h1`
  font-size: 3rem;
  margin 0;
  font-family:revert;
  @media(max-width:420px){
    font-size:2rem;
    margin: 1.5rem auto 0;
  }
`,$e=t(H)`
  font-family: Chalkboard SE;
  @media (max-width: 420px) {
    margin: 0 auto;
  }
`,Yt=t($e)`
  font-size: 4rem;
  color: #fff;
  text-shadow:5px 0 5px black;
}
`,qt=t(H)`
  margin: 2rem 0 1rem;
`,Re=t.div`
  width: 100%;
  position: absolute;
  right: 0;
`,_t=t.div`
  text-align: center;
`,Vt=t(Re)`
  top: 20%;
  right: 10%;
  width: 75vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    right: 0;
    width: 90%;
  }
`,Wt=t.div`
  text-align: left;
  @media (max-width: 420px) {
    text-align: center;
  }
`,Zt=t.div`
  width: 35vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 420px) {
    display: none;
  }
`,Kt=t.div`
  width: 200px;
`,Qt=t.div`
  height: 220px;
  width: 350px;
`;var Jt="/assets/Book_Img.ecab4c61.jpg";const j=t.div`
  height: 100%;
  width: 100%;
`,q=t.div`
  margin: 0 auto;
  padding: 2rem;
  max-width: 1000px;
  width: 100%;
  text-align: center;
  position: relative;
  @media (max-width: 420px) {
    width: 100%;
    padding: 10px 0;
  }
`,fe=t(j)`
  color: #fff;
  background-image: url(${Jt});
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 83.5vh;
  &:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  @media (max-width: 420px) {
    min-height: 90vh;
  }
`,Xt=o=>{const i=_(),a=async()=>{await v.auth().signInAnonymously().then(({user:s})=>{s==null||s.updateProfile({displayName:"\u30B2\u30B9\u30C8\u30E6\u30FC\u30B6\u30FC"})}),i(de({displayName:"\u30B2\u30B9\u30C8\u30E6\u30FC\u30B6\u30FC"})),o.history.push("/home")};return e(S,{children:e(fe,{children:n(Vt,{children:[n(Wt,{children:[e(W,{children:"\u8AAD\u66F8\u30A2\u30A6\u30C8\u30D7\u30C3\u30C8\u30A2\u30D7\u30EA"}),e(Yt,{children:"Read Out"}),e("p",{children:"\u8AAD\u66F8\u3057\u3066\u3082\u8AAD\u3093\u3060\u5185\u5BB9\u3001\u5FD8\u308C\u3066\u306F\u3044\u307E\u305B\u3093\u304B\uFF1F"}),e("p",{children:"\u8AAD\u3093\u3060\u672C\u3092\u30A2\u30A6\u30C8\u30D7\u30C3\u30C8\u3059\u308B\u3053\u3068\u3067\u8A18\u61B6\u306E\u5B9A\u7740\u5316\u306B\u7E4B\u3052\u3088\u3046\uFF01"}),n(ke,{onClick:()=>{o.history.push("/login")},children:[e(D,{icon:ie}),"login"]}),n(ge,{onClick:async()=>{await a()},children:[e(D,{icon:re}),"Guest"]})]}),n(Zt,{children:[e(Qt,{children:e(Ee,{src:`${zt}`})}),e(Kt,{children:e(Ee,{src:`${kt}`})})]})]})})})},G=t.input`
  font-size: 1rem;
  outline: none;
  width: 300px;
  @media (max-width: 420px) {
    font-size: 1rem;
    width: 200px;
  }
`,Q=t(G)`
  border-radius: 20px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 400px;
  position: relative;
  @media (max-width: 420px) {
    width: 250px;
    padding: 10px;
  }
`,en=t(G)`
  border-radius: 20px 0 0 20px;
  padding: 10px 20px;
  width: 500px;
  margin: 20px 0 10px;
  @media (max-width: 420px) {
    width: 250px;
    padding: 5px 10px;
  }
`,Ue=t(G)`
  text-align: center;
  font-size: 1rem;
`,He=t(G)`
  text-align: center;
  @media (max-width: 420px) {
    font-size: 0.8rem;
    width: 100%;
  }
`,Ge=t.textarea`
  font-size: 1rem;
  height: 100px;
  width: 100%;
  @media (max-width: 420px) {
    font-size: 0.9rem;
    height: 70px;
  }
`,tn=t(G)`
  border-bottom: 1px solid #a9a9a9;
  border-top: none;
  border-right: none;
  border-left: none;
  box-sizing: border-box;
  padding: 10px 10px 5px 10px;
  width: 100%;
  margin-bottom: 10px;
  &:focus {
    border-bottom: 1px solid #0070f3;
    transition: all 0.8s;
  }
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`,nn=t.div`
  padding: 20px 70px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    padding: 20px 10px;
    margin: 1rem 0 0 0;
  }
`,Oe=t.div`
  position: fixed;
  bottom: 20%;
  right: 25%;
  @media (max-width: 420px) {
    bottom: 35%;
    right: 5%;
  }
`,on=t(Oe)`
  bottom: 10%;
  right: 15%;
  @media (max-width: 420px) {
    top: 15%;
  }
`,rn=o=>{const i=ve.generate(),[a,l]=r.exports.useState(""),[s,u]=r.exports.useState(""),[x,h]=r.exports.useState(""),[m,w]=r.exports.useState(0),[b,c]=r.exports.useState(i),d=P(M),g=v.firestore().collection("text");return r.exports.useEffect(()=>{let f=new Date,L=f.getMonth()+1;function C(y){return y<=1?30:y<=2?60:y<=3?87:y<=4?117:y<=5?146:y<=6?177:y<=7?206:y<=8?236:y<=9?266:y<=10?295:y<=11?325:354}const E=f.getFullYear()+f.getMonth()+f.getDate()+C(L);w(E)},[]),e(S,{children:e(j,{children:n(q,{children:[e(H,{children:"Set Up"}),e(nn,{children:n("form",{onSubmit:async f=>{f.preventDefault();const L="https://www.googleapis.com/books/v1/volumes",C={q:a,maxResults:1},E=await ae.get(L,{params:C});try{const $=`https://books.google.com/books/content?id=${E.data.items[0].id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;g.doc(`${b}`).set({user:d.displayName,title:a,text:s,page:x,date:m,uid:d.uid,id:b,editing:!1,createAt:new Date().getTime(),image:$}),u(""),l(""),h(""),c(b),o.history.push("/home")}catch(y){alert(y.message)}},children:[n("div",{children:[e("p",{children:"\u8AAD\u3093\u3060\u672C\u306F\uFF1F"}),e(Ue,{id:"title",type:"text",placeholder:"\u30BF\u30A4\u30C8\u30EB\u540D",value:a,onChange:f=>l(f.target.value)}),e("p",{children:"\u4F55\u30DA\u30FC\u30B8\u8AAD\u3093\u3060\u304B\uFF1F"}),e("label",{children:e(Ue,{id:"page",type:"text",placeholder:"\u8AAD\u3093\u3060\u30DA\u30FC\u30B8\u6570",value:x,onChange:f=>h(f.target.value)})}),e("p",{children:"\u611F\u60F3"}),e(Ge,{id:"text",placeholder:"\u30B3\u30E1\u30F3\u30C8\u5165\u529B",value:s,onChange:f=>u(f.target.value)})]}),e(Mt,{children:e(k,{to:"/profile",style:{color:"#36622b"},children:"\u30AD\u30E3\u30F3\u30BB\u30EB"})}),e(U,{disabled:!s||!x||!a,children:"\u6295\u7A3F"})]})})]})})})},an=o=>{const[i,a]=r.exports.useState(""),[l,s]=r.exports.useState(""),[u,x]=r.exports.useState(""),[h,m]=r.exports.useState(!0),[w,b]=r.exports.useState(""),{register:c,handleSubmit:d,errors:g}=pt(),A=_(),f=new v.auth.GoogleAuthProvider,L=new v.auth.TwitterAuthProvider,C=async()=>{try{await v.auth().signInWithEmailAndPassword(l,i),o.history.push("/home")}catch{b("\u203B\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3068\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u78BA\u8A8D\u3057\u3066\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3044\u304F\u3060\u3055\u3044\u3002")}},E=async()=>{try{await v.auth().createUserWithEmailAndPassword(l,i).then(({user:B})=>{B==null||B.updateProfile({displayName:u})}),A(de({displayName:u})),o.history.push("/home")}catch{b("\u203B\u65B0\u898F\u4F5C\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u74B0\u5883\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002");return}},y=async()=>{await v.auth().signInWithPopup(f).then(()=>{o.history.push("/home")}).catch(B=>alert(B.message))},$=async()=>{await v.auth().signInWithPopup(L).then(()=>{o.history.push("/home")}).catch(B=>alert(B.message))};return e(S,{children:e(fe,{children:e(Re,{children:n(_t,{children:[e(qt,{children:h?"Login":"Sign In"}),n("form",{onSubmit:d(h?C:E),children:[n("div",{style:{display:h?"none":"block"},children:[e(Z,{children:"UserName"}),e(Q,{name:"name",placeholder:"name",value:u,type:"name",onChange:B=>{x(B.target.value)}})]}),e(Z,{children:"E-mail"}),e(Q,{name:"email",placeholder:"example@gmail.com",value:l,type:"email",onChange:B=>{s(B.target.value)},ref:c({required:!0,minLength:9})}),g.email&&e(K,{children:"\u203B\u30E1\u30FC\u30EB\u306F\u5FC5\u9808\u3067\u3059\u3002"}),e(Z,{children:"Password"}),e(Q,{name:"password",placeholder:"\uFF18\u6587\u5B57\u4EE5\u4E0A\u306E\u5165\u529B",value:i,type:"password",onChange:B=>{a(B.target.value)},ref:c({required:!0,minLength:8})}),g.password&&e(K,{children:"\u203B\u30D1\u30B9\u30EF\u30FC\u30C9\u306F\u5FC5\u9808\u3067\u3059\u3002"}),e("br",{}),e(Te,{children:h?"Login":"Sign Up"})]}),e(K,{children:w}),e("br",{}),e(Ne,{onClick:y,children:"Sign In with Google"}),e(Gt,{onClick:$,children:"Sign In with Twitter"}),n(W,{children:["\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u306F",e(k,{to:"/reset",style:{color:"#ffd740",textDecoration:"underline"},children:"\u3053\u3061\u3089"}),"\u3078"]}),n(W,{children:[e(Pt,{onClick:()=>{m(!h)},children:h?"Sign In":"Login"}),"\u3078"]})]})})})})},je=t.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    padding: 10px;
    margin: 5px;
  }
`,Ye=t.form`
  @media (max-width: 420px) {
    margin: 0.5rem 0;
  }
`,sn=t.form`
  width: 100%;
  text-align: right;
`,qe=t.div`
  text-align: left;
  padding-left: 2rem;
  @media (max-width: 420px) {
    padding: 0 1rem 0 0;
  }
`,un=t.div`
  position: relative;
  margin-left: 1rem;
  display: inline-block;
`,dn=t.div`
  position: absolute;
  top: 0;
  left: 10px;
  width: 50px;
`,_e=t.div`
  @media (max-width: 420px) {
    overflow-y: scroll;
    min-height: 440px;
    max-height: 65vh;
    margin-bottom: 3.5rem;
  }
`,Ve=t.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`,We=t.div`
  width: 45vw;
  text-align: left;
  margin-left: 2rem;
  @media (max-width: 420px) {
    width: 65vw;
    margin-left: 1rem;
  }
`,cn=o=>{const i=ve.generate(),[a,l]=r.exports.useState(""),[s,u]=r.exports.useState([]),[x,h]=r.exports.useState(!1),[m,w]=r.exports.useState(0),[b,c]=r.exports.useState(!1),[d,g]=r.exports.useState(i),A=P(M),f=v.firestore().collection("text").doc(`${o.list.id}`).collection("comments");return r.exports.useEffect(()=>{const C=f.orderBy("createAt","asc").onSnapshot(E=>{const y=E.docs.map($=>$.data());u(y)});return f.get().then(E=>{w(E.size)}),()=>{C()}},[]),n(S,{children:[e("div",{children:n(Ae,{onClick:()=>h(!x),children:["\u30B3\u30E1\u30F3\u30C8\uFF08",m,"\uFF09",e("span",{children:x?"\u975E\u8868\u793A":"\u8868\u793A"})]})}),n(sn,{onSubmit:C=>{C.preventDefault(),f.doc(`${d}`).set({user:A.displayName,uid:A.uid,text:a,createAt:new Date().getTime(),id:d}),l(""),w(m+1),g(d)},children:[e(tn,{type:"text",placeholder:"\u30B3\u30E1\u30F3\u30C8\u306E\u8FFD\u52A0...",value:a,onChange:C=>l(C.target.value)}),e(Pe,{onClick:()=>l(""),children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),e(Rt,{disabled:!a,children:"\u9001\u4FE1"})]}),x&&e("div",{children:s.map((C,E)=>n(qe,{children:[n("div",{children:[n(he,{children:["@",C.user]}),e(Be,{children:V(C.createAt).fromNow()}),n(un,{children:[C.uid===A.uid&&e(Ut,{onClick:()=>c(!b),children:e(D,{icon:ht})}),C.uid===A.uid&&e(S,{children:b&&e(dn,{children:e(Ht,{onClick:()=>f.doc(`${C.id}`).delete().then(()=>w(m-1)).then(()=>c(!b)),children:"\u524A\u9664"})})})]})]}),e(De,{children:C.text})]},E))})]})},ln=t(je)`
  padding: 20px 40px;
  position: relative;
  @media (max-width: 420px) {
    padding: 15px 10px;
  }
`,pn=t.div`
  text-align: right;
  @media (max-width: 420px) {
    text-align: left;
  }
`,hn=t.div`
  position: absolute;
  right: 20px;
  top: 20px;
  @media (max-width: 420px) {
    top: unset;
    right: 15px;
    bottom: 5px;
  }
`,mn=t.div`
  position: absolute;
  bottom: 18px;
  right: 20px;
  @media (max-width: 420px) {
    bottom: 5px;
  }
`,Ze=t.div`
  text-align: left;
  margin: 0 20px;
`,xn=t.div`
  margin: 0 auto;
  width: 90%;
`;t.div`
  width: 50vw;
  @media (max-width: 420px) {
    width: 70vw;
  }
`;const gn=t.div`
  margin: auto 0 auto 2rem;
  border: 1px solid #000;
  padding: 10px 30px;
  border-radius: 50%;
  @media (max-width: 420px) {
    width: 90px;
    padding: 10px;
    margin: 0 0 0 15rem;
  }
`,fn=t.div`
  display: flex;
  width: 80%;
  @media (max-width: 420px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`,wn=()=>{const[o,i]=r.exports.useState([]),[a,l]=r.exports.useState(""),[s,u]=r.exports.useState(!1),[x,h]=r.exports.useState(""),m=v.firestore().collection("text"),w=P(M);return r.exports.useEffect(()=>{h("...loading");let d=!0;return m.orderBy("createAt","desc").onSnapshot(g=>{const A=g.docs.map(f=>f.data());d&&(i(A),h(""))}),()=>{d=!1}},[]),e(S,{children:e(j,{children:n(q,{children:[e(H,{children:"Home"}),e(Ze,{children:s?e(Y,{onClick:d=>{d.preventDefault(),m.orderBy("createAt","desc").onSnapshot(g=>{const A=g.docs.map(f=>f.data());i(A),u(!s)})},children:"\u518D\u8868\u793A"}):n(Ye,{onSubmit:d=>{d.preventDefault(),a!==""&&(i(o.filter(g=>g.title===a||g.user===a)),u(!s),l(""))},children:[e(O,{children:"\u691C\u7D22"}),e(G,{type:"text",placeholder:"\u30BF\u30A4\u30C8\u30EB or \u30E6\u30FC\u30B6\u30FC\u540D",value:a,onChange:d=>l(d.target.value)}),e(Ie,{children:e(D,{icon:se})})]})}),n(_e,{children:[e(F,{children:x}),o.map((d,g)=>n(je,{children:[e(xe,{children:e(me,{src:d.image})}),n(Ve,{children:[n(We,{children:[n(F,{children:["\u30E6\u30FC\u30B6\u30FC\uFF1A",d.user]}),n(F,{children:["\u30BF\u30A4\u30C8\u30EB\uFF1A",d.title]}),n(F,{children:["\u8AAD\u3093\u3060\u30DA\u30FC\u30B8\u6570\uFF1A",d.page]}),n(F,{children:["\u611F\u60F3\uFF1A",d.text]})]}),e(Be,{children:V(d.createAt).format("A HH:mm YYYY/MM/DD")}),e(cn,{list:d})]})]},g))]}),w.uid&&e(on,{children:e(k,{to:"/setup",children:e(Le,{children:"\u6295\u7A3F"})})})]})})})},bn=()=>{const[o,i]=r.exports.useState(null),[a,l]=r.exports.useState(""),[s,u]=r.exports.useState(0),[x,h]=r.exports.useState(0),[m,w]=r.exports.useState(0),[b,c]=r.exports.useState(0),[d,g]=r.exports.useState(0),[A,f]=r.exports.useState(0),[L,C]=r.exports.useState(0),[E,y]=r.exports.useState(0),[$,B]=r.exports.useState(0),[Qe,Je]=r.exports.useState(0),T=P(M),z=v.firestore().collection("text");r.exports.useEffect(()=>{if(T){let R=new Date,oe=R.getMonth()+1;const it=p=>p<=1?30:p<=2?60:p<=3?87:p<=4?117:p<=5?146:p<=6?177:p<=7?206:p<=8?236:p<=9?266:p<=10?295:p<=11?325:354,I=R.getFullYear()+R.getMonth()+R.getDate()+it(oe);z.where("user","==",`${T.displayName}`).where("date","<=",I-9).get().then(p=>{u(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-8).get().then(p=>{h(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-7).get().then(p=>{w(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-6).get().then(p=>{c(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-5).get().then(p=>{g(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-4).get().then(p=>{f(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-3).get().then(p=>{C(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-2).get().then(p=>{y(p.size)}),z.where("user","==",`${T.displayName}`).where("date","<=",I-1).get().then(p=>{B(p.size)}),z.where("user","==",`${T.displayName}`).get().then(p=>{Je(p.size)})}let ee=new Date,we=[[new Date().getDate()+"\u65E5"]];for(let R=0;R<9;R++){ee.setDate(ee.getDate()-1);let oe=[ee.getDate()+"\u65E5"];we.unshift(oe)}i(we);let te=new Date,ne=new Date;ne.setDate(te.getDate()-9);let tt=ne.getMonth()+1,nt=ne.getDate();const ot=`${tt}\u6708${nt}\u65E5 \u301C ${te.getMonth()+1}\u6708${te.getDate()}\u65E5 `;l(ot)},[T]);const Xe={labels:o,datasets:[{borderColor:"#4fc3f7",lineTension:0,data:[s,x,m,b,d,A,L,E,$,Qe],label:"\u8AAD\u66F8\u30A2\u30A6\u30C8\u30D7\u30C3\u30C8\u91CF"}]},et={scales:{xAxes:[{scaleLabel:{display:!0,labelString:a}}],yAxes:[{ticks:{stepSize:1}}]},option:{responsive:!0}};return e(S,{children:e(mt.Line,{data:Xe,options:et})})},Fn=()=>{const[o,i]=r.exports.useState(0),a=P(M),l=v.firestore().collection("text");return r.exports.useEffect(()=>{a&&l.where("user","==",`${a.displayName}`).get().then(s=>{i(s.size)})},[a]),n(S,{children:[e(Nt,{children:"Total"}),e($t,{children:o})]})},Cn=()=>{const o=P(M);return e(S,{children:e(j,{children:n(q,{children:[e(H,{children:"Profile"}),n(O,{children:["\u30E6\u30FC\u30B6\u30FC\u540D\uFF1A",o==null?void 0:o.displayName]}),n(fn,{children:[e(bn,{}),e(gn,{children:e(Fn,{})})]}),n(O,{children:["\u30FB",e(k,{to:"/history",style:{textDecoration:"underline"},children:"\u6295\u7A3F\u5C65\u6B74"}),"\u3078"]}),o.uid&&e(Oe,{children:e(k,{to:"/setup",children:e(Ot,{children:"\u6295\u7A3F"})})})]})})})},yn=t.div`
  text-align: center;
`,vn=t.div`
  @media (max-width: 420px) {
    overflow-y: scroll;
    height: 66vh;
  }
`,Sn=t.div`
  display: flex;
  padding: 20px 40px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    padding: 10px;
    margin: 5px;
  }
`,Bn=t.div`
  text-align: left;
  margin-left: 3rem;
  @media (max-width: 420px) {
    margin: 0.5rem 0 0 1rem;
  }
`,An=()=>{const[o,i]=r.exports.useState(""),[a,l]=r.exports.useState(null),[s,u]=r.exports.useState(""),x=async m=>{u("...loading");const w="https://www.googleapis.com/books/v1/volumes",b={q:m,maxResults:20};try{const c=await ae.get(w,{params:b});return u(""),{isSuccess:!0,data:c.data,error:null}}catch(c){return u(""),{isSuccess:!1,date:null,error:c}}};return e(S,{children:e(j,{children:n(q,{children:[n(yn,{children:[e(H,{children:"Books Search"}),e("span",{children:"\u203B\u3055\u307E\u3056\u307E\u306A\u66F8\u7C4D\u3092\u691C\u7D22\u3067\u304D\u307E\u3059\u3002"}),n("form",{onSubmit:async m=>{m.preventDefault();const w=await x(o);w.isSuccess?l(w.data):window.alert(String(w.error))},children:[e(en,{type:"text",placeholder:"\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:m=>i(m.target.value),required:!0}),e(ze,{children:e(D,{icon:se})})]})]}),e(F,{children:s}),a&&e(vn,{children:e(S,{children:a.items.map(m=>n(Sn,{children:[e(xe,{children:e(me,{src:`https://books.google.com/books/content?id=${m.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`,alt:""})}),n(Bn,{children:[n(F,{children:["\u30BF\u30A4\u30C8\u30EB\u540D\uFF1A",m.volumeInfo.title]}),n(F,{children:["\u8457\u8005\u540D\uFF1A",m.volumeInfo.authors]}),n(F,{children:["\u767A\u884C\u65E5\uFF1A",m.volumeInfo.publishedDate]})]})]},m.id))})})]})})})},Dn=t.div`
  width: 100%;
  position: absolute;
  top: 10%;
  right: 0;
  `,En=t.div`
  max-width: 570px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: border-box;
`,Tn=()=>{const[o,i]=r.exports.useState(""),[a,l]=r.exports.useState(""),[s,u]=r.exports.useState("");return e(S,{children:e(fe,{children:e(Dn,{children:n(En,{children:[e(Z,{children:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"}),n("form",{onSubmit:h=>{h.preventDefault(),l(""),u(""),v.auth().sendPasswordResetEmail(o).then(()=>{l("\u30E1\u30FC\u30EB\u304C\u9001\u4FE1\u3055\u308C\u307E\u3057\u305F\uFF01"),i("")}).catch(()=>{u("\u203B\u9001\u4FE1\u306B\u5931\u6557\u307E\u3057\u305F\u3002\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u3057\u3001\u518D\u5EA6\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),i("")})},children:[e(Q,{type:"text",name:"E-mail",placeholder:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B",value:o,onChange:h=>i(h.target.value)}),e("br",{}),e(jt,{children:"\u9001\u4FE1"})]}),s&&e(K,{children:s}),a&&e(It,{children:a}),e("br",{}),n(W,{children:[e(k,{to:"/login",style:{color:"#ffd740",textDecoration:"underline"},children:"Login"}),"\u3078"]})]})})})})},kn=o=>{const[i,a]=r.exports.useState(o.list.title),[l,s]=r.exports.useState(o.list.text),[u,x]=r.exports.useState(o.list.page),h=v.firestore().collection("text");return e(S,{children:n(xn,{children:[n("div",{children:[e(le,{children:"\u30BF\u30A4\u30C8\u30EB"}),e(He,{id:"title",type:"text",value:i,onChange:c=>a(c.target.value)})]}),n("div",{children:[e(le,{children:"\u8AAD\u3093\u3060\u30DA\u30FC\u30B8"}),e(He,{id:"page",type:"text",value:u,onChange:c=>x(c.target.value)})]}),e(le,{children:"\u611F\u60F3"}),e(Ge,{id:"text",value:l,onChange:c=>s(c.target.value)}),e(mn,{children:e(Me,{onClick:()=>{h.doc(`${o.list.id}`).delete()},children:e(D,{icon:xt})})}),n(pn,{children:[e(Pe,{onClick:()=>{o.editChange(o.list.id,!o.list.editing)},children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),e(Y,{onClick:async()=>{const c="https://www.googleapis.com/books/v1/volumes",d={q:i,maxResults:1};try{const f=`https://books.google.com/books/content?id=${(await ae.get(c,{params:d})).data.items[0].id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;h.doc(`${o.list.id}`).update({title:i,page:u,text:l,image:f})}catch(g){alert(g.message)}},children:"\u66F4\u65B0"})]})]})})},zn=o=>{const[i,a]=r.exports.useState(0),[l,s]=r.exports.useState([]),[u,x]=r.exports.useState(!1),h=v.firestore().collection("text").doc(`${o.list.id}`).collection("comments");r.exports.useEffect(()=>{const w=h.orderBy("createAt","asc").onSnapshot(b=>{const c=b.docs.map(d=>d.data());s(c)});return h.get().then(b=>{a(b.size)}),()=>{w()}},[]);const m=()=>{o.editChange(o.list.id,!o.list.editing)};return n(S,{children:[e(xe,{children:e(me,{src:o.list.image,alt:""})}),n(Ve,{children:[n(We,{children:[n(F,{children:["\u30BF\u30A4\u30C8\u30EB\uFF1A",o.list.title]}),n(F,{children:["\u8AAD\u3093\u3060\u30DA\u30FC\u30B8\u6570\uFF1A",o.list.page]}),n(F,{children:["\u611F\u60F3\uFF1A",o.list.text]})]}),e(pe,{children:V(o.list.createAt).format("A HH:mm YYYY/MM/DD")}),e("div",{children:n(Ae,{onClick:()=>x(!u),children:["\u30B3\u30E1\u30F3\u30C8\uFF08",i,"\uFF09",u?"\u975E\u8868\u793A":"\u8868\u793A"]})}),u&&e("div",{children:l.map((w,b)=>n(qe,{children:[n("div",{children:[n(he,{children:["@",w.user]}),e(pe,{children:V(w.createAt).fromNow()})]}),e(De,{children:w.text})]},b))})]}),e(hn,{children:e(Me,{onClick:m,children:e(D,{icon:gt})})})]})},In=()=>{const[o,i]=r.exports.useState([]),[a,l]=r.exports.useState(!1),[s,u]=r.exports.useState(""),x=P(M),h=v.firestore().collection("text");r.exports.useEffect(()=>{x&&h.orderBy("createAt","desc").onSnapshot(c=>{const d=c.docs.map(g=>g.data());i(d)})},[x]);const m=c=>{c.preventDefault(),i(o.filter(d=>d.title===s)),l(!a),u("")},w=c=>{c.preventDefault(),h.orderBy("date","desc").onSnapshot(d=>{const g=d.docs.map(A=>A.data());i(g)})},b=(c,d)=>{i(o.map(g=>g.id===c?ye(Ce({},g),{editing:d}):g))};return e(S,{children:e(j,{children:n(q,{children:[n(Ze,{children:[e(H,{children:"\u6295\u7A3F\u5C65\u6B74"}),n(O,{children:["\u30FB",e(k,{to:"/profile",style:{textDecoration:"underline"},children:"Profile"}),"\u3078"]}),a?e(Y,{onClick:w,children:"\u518D\u8868\u793A"}):n(Ye,{onSubmit:m,children:[e(O,{children:"\u691C\u7D22"}),e(G,{type:"text",placeholder:"\u30BF\u30A4\u30C8\u30EB\u540D",value:s,onChange:c=>u(c.target.value)}),e(Ie,{children:e(D,{icon:se})})]})]}),e(_e,{children:o.map((c,d)=>e("div",{children:c.user===x.displayName&&e(ln,{children:c.editing?e(kn,{list:c,editChange:b},d):e(zn,{list:c,editChange:b},d)})},d))})]})})})},J=t.p`
  font-size: 1.5rem;
  margin: 30px 20px 20px 0;
  @media (max-width: 420px) {
    font-size: 1rem;
    margin: 10px 20px;
  }
`,X=t.span`
  margin-left: 10px;
  @media (max-width: 420px) {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
    display: block;
  }
`,Pn=t.div`
  display: flex;
  @media (max-width: 420px) {
    z-index: 1;
    background-color: #fff;
    width: 100%;
    justify-content: center;
    padding-bottom: env(safe-area-inset-bottom);
  }
`,Mn=o=>{const i=P(M),a=_(),l=async()=>{await v.auth().signInAnonymously().then(({user:u})=>{u==null||u.updateProfile({displayName:"\u30B2\u30B9\u30C8\u30E6\u30FC\u30B6\u30FC"})}),a(de({displayName:"\u30B2\u30B9\u30C8\u30E6\u30FC\u30B6\u30FC"}))},s=()=>{v.auth().signOut(),o.history.push("/home")};return n(Pn,{children:[e(J,{children:n(k,{to:"/home",children:[e(X,{children:e(D,{icon:ft})}),"Home"]})}),e(J,{children:n(k,{to:"/books",children:[e(X,{children:e(D,{icon:wt})}),"Books"]})}),i.uid?e(J,{children:n(k,{to:"/profile",children:[e(X,{children:e(D,{icon:re})}),"Profile"]})}):e(J,{children:n(k,{to:"/login",children:[e(X,{children:e(D,{icon:ie})}),"Login"]})}),i.uid?n(ke,{onClick:s,children:[e(D,{icon:ie}),"Log out"]}):n(ge,{onClick:l,children:[e(D,{icon:re}),"Guest"]})]})};var Ke=ue(Mn);const Ln=t.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  position: fixed;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.5);
  width: 97vw;
  z-index: 1;
  @media (max-width: 420px) {
    padding: 10px;
  }
`,Nn=t.div`
  margin-right: 2rem;
  @media (max-width: 420px) {
    display: none;
  }
`,$n=t.footer`
  background-color: #fff;
  padding: 10px 0;
  @media (max-width: 420px) {
    display: none;
  }
`,Rn=t.footer`
  display: none;
  @media (max-width: 420px) {
    width: 100%;
    background-color: #c6e377;
    display: block;
    position: fixed;
    bottom: 0;
  }
`,Un=()=>n(Ln,{children:[e($e,{children:e(k,{to:"/home",children:"Read Out"})}),e(Nn,{children:e(Ke,{})})]});var Hn=ue(Un);const Gn=()=>n(S,{children:[e($n,{children:e(Lt,{children:"@2021 suzuki.k / portfolio"})}),e(Rn,{children:e(Ke,{})})]});var On=ue(Gn);const jn=t.div`
  background-color: #f9f3f3;
  height: 100%;
  min-height: 83.5vh;
  padding-top: 7rem;
  @media (max-width: 420px) {
    min-height: 84.5vh;
    max-height: 800px;
    padding-top: 4rem;
  }
`,Yn=()=>e(S,{children:n(bt,{children:[e(ce,{children:e(Hn,{})}),e(jn,{children:e(Ft,{children:n(ce,{children:[e(N,{exact:!0,path:"/",component:Xt}),e(N,{exact:!0,path:"/login",component:an}),e(N,{exact:!0,path:"/setup",component:rn}),e(N,{exact:!0,path:"/books",component:An}),e(N,{exact:!0,path:"/home",component:wn}),e(N,{exact:!0,path:"/profile",component:Cn}),e(N,{exact:!0,path:"/reset",component:Tn}),e(N,{exact:!0,path:"/history",component:In})]})})}),e(ce,{children:e(On,{})})]})}),qn=Ct({reducer:{user:Et}});yt.render(e(vt,{store:qn,children:e(Yn,{})}),document.getElementById("root"));
//# sourceMappingURL=index.b16dd51c.js.map
