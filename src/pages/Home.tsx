import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonMenuButton, IonFab,IonFabButton, IonModal } from '@ionic/react';

// import Featured from '../components/Featured';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import { add } from 'ionicons/icons';



const Home: React.FC = () => {


  const [sheetOpen, setSheet] = useState(false)

  const [name, setName] = useState('');

    useEffect(() => {
      const newName = JSON.parse(localStorage.getItem('name') as string);
      setName(newName);
    }, []);
  

  return (
    <IonPage id='main-content'>
    <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
      <IonContent className='ion-padding' fullscreen>
  
     <h1>Welcome {name}</h1>

     <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={() => setSheet(true)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
