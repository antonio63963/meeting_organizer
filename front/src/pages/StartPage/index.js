import { useState } from 'react';
import SignUp from '../../components/auth/SignUp';
import Login from '../../components/auth/Login';
import Start from '../../components/Start';
import style from './startPage.module.css';
import { Layout, Button } from 'antd';

function StartPage() {
  const [ content, setContent ] = useState('start');
  function showContent() {
    switch(content) {
      case 'login': return <Login setContent={setContent}/>
      case 'signUp': return <SignUp setContent={setContent}/>
      default: return <Start setContent={setContent}/>;
    };
  };
  return (
    <Layout className={style.startPage}> 
      { showContent() }
    </Layout>
  )
};

export default StartPage;