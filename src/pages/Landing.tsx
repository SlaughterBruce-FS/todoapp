import { IonButton, IonCol, IonContent, IonGrid, IonItem, IonPage, IonRow, IonText, useIonRouter  } from '@ionic/react';
import './Main.css';

import landingimg from '../assets/img/landing.png';

const Landing: React.FC = () => {
    const navigation = useIonRouter();


    const handleNext = () =>{
        navigation.push('/login', 'root', 'replace')
        console.log('clecked');
    }
  return (
    <IonPage>
      <IonContent fullscreen className='ion-padding' style={{ paddingTop: '100px !important' }}>
        
        <IonGrid fixed={true} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'  }} >
         
            <IonRow>
                <IonItem lines='none' >
                    <IonCol >
                        <IonRow   >
                        <IonText  style={{ width: '100%', paddingBottom: '20px' }}>
                        <h5 style={{ textAlign: 'center' }}>App Name</h5>
                    </IonText>
                        </IonRow>
                        <IonRow>
                        <IonText>
                        <h3>Hi Welcome to</h3>
                        <h2>App Name</h2>
                        <p>Explore the app. Lets make to do list and get organized</p>
                    </IonText>
                        </IonRow>
                        <IonRow style={{ paddingTop: '100px' }}>
                        <img src={landingimg} alt="" />
                        </IonRow>
                    
                    </IonCol>

                </IonItem>
            </IonRow>
            <IonRow>
                <IonItem lines='none' style={{ width: '100%' }} >
                        <IonButton style={{ width: '100%' }}  size='default' fill='outline' expand="block" onClick={ handleNext } >Get Started</IonButton>
                </IonItem>
            </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Landing;
