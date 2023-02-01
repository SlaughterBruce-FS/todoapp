import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonMenuButton, IonFab,IonFabButton, IonModal, IonRow, IonCol, IonItem, IonInput, IonTextarea } from '@ionic/react';

// import Featured from '../components/Featured';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import { add } from 'ionicons/icons';
import { IonDatetime } from '@ionic/react';



const Home: React.FC = () => {


  const [sheetOpen, setSheet] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


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

        <IonModal
         isOpen={sheetOpen}
         onDidDismiss={() => setSheet(false)}
         breakpoints={[0, 0.7]}
         initialBreakpoint={0.7}
         >
          <IonContent>
            <IonRow>
              <IonCol size='12'>
                <IonItem lines='full'>
                  <IonInput 
                  placeholder='Todo Name'
                  value={title}
                  onIonChange={(e: CustomEvent) => setTitle(e.detail.value)}
                   />
                </IonItem>
              </IonCol>
              <IonCol size='12'>
                <IonItem lines='full'>
                <IonTextarea 
                placeholder='Description'
                rows={2}
                value={description}
                onIonChange={(e: CustomEvent) => setDescription(e.detail.value)}
                />
                </IonItem>
              </IonCol>
              <IonCol>
                <IonDatetime />
              </IonCol>
            </IonRow>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
