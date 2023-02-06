import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonMenuButton, IonFab,IonFabButton, IonModal, IonRow, IonCol, IonItem, IonInput, IonTextarea, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

// import Featured from '../components/Featured';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import { add } from 'ionicons/icons';
import { IonDatetime } from '@ionic/react';
import { Todo } from '../interfaces';



const Home: React.FC = () => {


  const [sheetOpen, setSheet] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);


  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  

  const submitTodo = () => {
    console.log('whats submitted', date, title, description);

    setSheet(false);
  }

    useEffect(() => {
      const newName = JSON.parse(localStorage.getItem('name') as string);
      setName(newName);
    }, []);

    useEffect(() => {
      const newId = JSON.parse(localStorage.getItem('userId') as string);
      setUserId(newId);
    }, []);


    useEffect(() => {
     
      async function fetchSearch(){
           await axios
           .get<Todo[]>(`http://localhost:8000/api/todo`)
           .then((response: AxiosResponse ) => {
             console.log('Response: from get todos', response.data);
            setTodos(response.data)
  
       
           }).catch(error => {
            
           });
      }
      fetchSearch();
     },[]);
  

     if(!todos) return null;
  

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

     {
      todos.map((todo) => {
        return (
        <IonCard key={todo.id}>
      <IonCardHeader>
      <IonCardTitle>{todo.title}</IonCardTitle>
      <IonCardSubtitle>Date</IonCardSubtitle>
      </IonCardHeader>
      
      <IonRow>
        <IonCol>
        <IonButton expand='block' fill="outline">View</IonButton>
        </IonCol>
        <IonCol>
        <IonButton expand='block'  fill="outline">Delete</IonButton>
        </IonCol>
      </IonRow>
    
     </IonCard>
      )})}
     

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
                <IonDatetime 
                presentation='date' 
                value={date}
                max='2027'
                min='2022'
                onIonChange={(e: CustomEvent) => setDate(e.detail.value)}
                />
              </IonCol>
             
            </IonRow>
            <IonCol>
                <IonButton 
                type='submit' 
                fill='outline' 
                expand="block" 
                onClick={submitTodo}
                >Submit</IonButton>
              </IonCol>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
