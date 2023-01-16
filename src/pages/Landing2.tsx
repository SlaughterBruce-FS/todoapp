import { IonButton, IonCol, IonContent, IonGrid, IonItem, IonPage, IonRow, IonText, useIonRouter } from '@ionic/react';

import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';


import landingimg from '../assets/img/landing2.png';


const Landing2: React.FC = () => {
  const navigation = useIonRouter();

  const handleNext = () =>{
    navigation.push('/login', 'root', 'replace')
    console.log('clecked');
}
      

  return (
    <IonPage >
      <IonContent className='ion-padding' fullscreen>

      <IonGrid fixed={true} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'  }} >
         
         <IonRow>
             <IonItem lines='none' >
                 <IonCol >
                     <IonRow   >
                     <IonText  style={{ width: '100%', paddingBottom: '20px' }}>
                     <h5 style={{ textAlign: 'center' }}>App Name</h5>
                 </IonText>
                     </IonRow>
                     <IonRow style={{ paddingTop: '100px' }}>
                     <img src={landingimg} alt="" />
                     </IonRow>
                     <IonRow>
                     <IonText>
                     <h3>What we do</h3>
                     <p>Thousands of people are using App Name to make todo list for better productivity</p>
                 </IonText>
                     </IonRow>
                 
                 </IonCol>

             </IonItem>
         </IonRow>
         <IonRow>
             <IonItem lines='none' style={{ width: '100%' }} >
                     <IonButton style={{ width: '100%' }}  size='default' fill='outline' expand="block" onClick={ handleNext } >Sign Up</IonButton>
             </IonItem>
             <IonItem lines='none' style={{ width: '100%', textAlign: 'center' }}  >
                   <IonText style={{ width: '100%', textAlign: 'center' }}  >
                    <p style={{ width: '100%', textAlign: 'center' }} >Already have an account? <a href="/"> Log In</a> </p>
                   </IonText>
             </IonItem>
         </IonRow>
     </IonGrid>
       
      </IonContent>
    </IonPage>
  );
};

export default Landing2
