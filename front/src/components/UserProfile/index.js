import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editProfile, actionTest } from '../../Redux/actions';
import { Layout, Typography, Button, Avatar, Input, Switch } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './userProfile.module.css';

const {Title, Text} = Typography;
const { Header, Content, Footer } = Layout;

function UserProfile() {
  const [ isPhotoInput, setIsPhotoInput ] = useState(false);
  const [ isNameInput, setIsNameInput ] = useState(false);
  const [ isInputCountry, setIsInputCountry ] = useState(false);
  const [ isSelectTimezone, setIsSelectTimezone ] = useState(false);

  const [ isEdit, setIsEdit ]= useState(false);
  const state = useSelector(state => state.user);
  const { name, role, email, timezone, country, avatar } = state;
  const dispatch = useDispatch();



  const onCancel = () => {
    setIsEdit(!isEdit);
    setIsPhotoInput(false);
    setIsNameInput(false);
    setIsInputCountry(false);
    setIsSelectTimezone(false);
  };

// Handler
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    editProfile(formData, dispatch);
    onCancel();
  };


  return (
    <Layout className={style.profile}>
        <Title type="secondary" level={3} style={{'marginBottom': '20px'}}>Your profile:</Title>
      {/* AVATAR */}
      <form onSubmit={onSubmit}>
          <div className={style.titleBlock}>
            <Avatar src={avatar} size={64} icon={<UserOutlined />} style={{ cursor: 'pointer' }}/>
            { isEdit && <Switch
                size="small"
                checked={isPhotoInput}
                checkedChildren="Input photo"
                unCheckedChildren="Change photo"
                onChange={() => {
                  setIsPhotoInput(!isPhotoInput);
                }}
              />}
          </div>
          {isPhotoInput && ( <input type="file" name="picture" style={{ marginTop: '10px', marginBottom: '10px' }}/>
          )}
        {/* NAME */}
        <Title level={4} style={{'marginBottom': '0px'}}>
          {name}
        </Title>
        
        {/* ROLE */}
        <div>
          <Text style={{'marginBottom': '20px'}}>
            Role: {role} 
          </Text>
        </div>
        
        {/* EMAIL */}
        <Text>Email: {email}</Text> 
        
        {/* COUNTRY */}
          <div className={style.titleBlock}>
            <Text>Country: {country}</Text>
            { isEdit && <Switch
                      size="small"
                      checked={isInputCountry}
                      checkedChildren="Input country"
                      unCheckedChildren="Change country"
                      onChange={() => {
                        setIsInputCountry(!isInputCountry);
                      }}
                    />}
          </div>
          {isInputCountry && (
              <input name="country" style={{ marginTop: '10px', marginBottom: '10px' }} />
          )}
        
        {/* TIMEZONE */}
          <div className={style.titleBlock}>
            <Text>Timezone: {timezone}</Text>
            { isEdit && <Switch
                        size="small"
                        checked={isSelectTimezone}
                        checkedChildren="Input timezone"
                        unCheckedChildren="Change timezone"
                        onChange={() => {
                          setIsSelectTimezone(!isSelectTimezone);
                        }}
                      />}
          </div>
          {isSelectTimezone && (
            <select style={{ margin: '10px 0' }} name="timezone" placeholder={state.timezone}>
                <option value="+1">{state.timezone}</option>
                <option value="+1">UTC+1</option>
                <option value="+2"> UTC+2</option>
                <option value="+3"> UTC+3</option>
                <option value="+9:30"> UTC+9:30</option>
                <option value="+10">UTC+10</option>
                <option value="-9">UTC−9</option>
                <option value="-4"> UTC−4</option>
                <option value="+8">  UTC+8</option>
                <option value="-6"> UTC−6</option>
                <option value="-5"> UTC−5</option>
                <option value="0"> UTC</option>
                <option value="-10"> UTC−10</option>
                <option value="-7"> UTC−7</option>
                <option value="−3:30"> UTC−3:30</option>
            </select>
          )}
        
          {
            !isEdit ? 
            <Button 
              type="primary" 
              style={{'marginTop': '20px', width: '100%'}}
              onClick={() => setIsEdit(true)}
              >
                Edit profile
            </Button> :
        
            <>
              <Button 
                style={{'marginTop': '20px', width: '100%'}}      
                type="primary" 
                onClick={onCancel}
              >
              Cancel
              </Button>
              <Button 
                style={{'marginTop': '20px', width: '100%'}}      
                type="primary" 
                htmlType='submit'
              >
              Submit
              </Button>
            </>
          }
      </form>

    </Layout>
  )
};

export default UserProfile;