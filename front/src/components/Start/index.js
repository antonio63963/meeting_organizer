import style from './start.module.css'
import Logo from '../../images/Logo.svg';
import { Button } from 'antd';

function Start({ setContent }) {

console.log(setContent)
  return (
    <>
      <div className={style.logo}>
          <img src={Logo}/>
      </div>
      <div className={style.buttonsBlock}>
        <Button 
          onClick={() => setContent('login')}
          size={12} 
          style={{'backgroundColor': '#eb2f96', border: 'none', color: 'white', width: '80px'}}
        >
          Login
        </Button>
        <Button 
        onClick={() => setContent('signUp')}
        type="secondary" 
        size={12} 
        style={{'backgroundColor': '#9254de', border: 'none', color: 'white', width: '80px'}}
        >
          Sign Up
        </Button>
      </div>
    </>
  )
};

export default Start;