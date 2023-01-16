import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonPage, IonRow, IonText, useIonRouter } from '@ionic/react';

import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';


// function validateEmail(email: string) {
//     const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
//     return re.test(String(email).toLowerCase());
//   }



const Login: React.FC = () => {
  const navigation = useIonRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleLogin= () =>{

    const loginData = {
        email: email,
        password: password,
       
    };


    axios.post(`http://todoapim.herokuapp.com/api/login`, loginData)
    .then((response: AxiosResponse) => {
        console.log('Response: login data ', response.data);
        localStorage.setItem('token', response.data.token);
        navigation.push('/home', 'root', 'replace')
    })
    .catch(error => {
        console.log('something went wrong');
    });
        
 

}
      

  return (
    <IonPage className='landing'>
      <IonContent className='ion-padding' fullscreen>

      <IonGrid fixed={true} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%'  }} >
         
         <IonRow>
            <IonText style={{ paddingBottom: '50px' }} >
                <h1 style={{ textAlign: 'left', fontSize: '2.5rem', fontWeight: '700', textTransform: 'capitalize' }}>Hello! <br/> Signup to <br/> get started </h1>
            </IonText>
         </IonRow>
         
         <IonRow style={{ paddingBottom: '50px' }}>
          
            <IonItem lines='none' style={{ paddingBottom: '10px', width: '100%' }}>
            <IonInput placeholder='Email' type='email' value={email} class='custom' onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
            </IonItem>
            <IonItem lines='none' style={{ paddingBottom: '10px', width: '100%' }}>
            <IonInput placeholder='Password' type="password" value={password}  class='custom' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
            </IonItem>
        
         </IonRow>
         <IonRow>
             <IonItem lines='none' style={{ width: '100%' }} >
                     <IonButton style={{ width: '100%' }}  size='default' fill='outline' expand="block" onClick={ handleLogin } >Login</IonButton>
             </IonItem>
             <IonItem lines='none' style={{ width: '100%', textAlign: 'center' }}  >
                   <IonText style={{ width: '100%', textAlign: 'center' }}  >
                    <p style={{ width: '100%', textAlign: 'center' }} >Don't have an account? <a href="/register"> Sign Up</a> </p>
                   </IonText>
             </IonItem>
         </IonRow>
     </IonGrid>
       
      </IonContent>
    </IonPage>
  );
};

export default Login
