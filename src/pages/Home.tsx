import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonMenuButton,  } from '@ionic/react';

// import Featured from '../components/Featured';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from "react";
import React from 'react';



const Home: React.FC = () => {



    

  
  

  return (
    <IonPage>
    <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
      <IonContent className='ion-padding' fullscreen>
  
     <h1>testing home</h1>


      </IonContent>
    </IonPage>
  );
};

export default Home;
