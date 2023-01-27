import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonMenuToggle, IonIcon, IonLabel, IonItem, IonListHeader, useIonRouter  } from "@ionic/react";

import { homeOutline } from 'ionicons/icons';
import axios, { AxiosResponse } from 'axios';
import { useHistory  } from "react-router-dom";

const SideMenu: React.FC = () => {
    const navigation = useIonRouter();

    const history = useHistory();

    const logout = () => {
        axios.post(`http://todoapim.herokuapp.com/api/logout`)
        .then((response: AxiosResponse) => {
            console.log('Response: logout data ', response.data);
            navigation.push('/', 'back', 'replace')
        })
        .catch(error => {
            console.log('something went wrong');
        });

     
   
    }

   
    return (
        <IonMenu content-id="main-content">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
    
        <IonContent>
          <IonList>
            <IonListHeader>
              Navigate
            </IonListHeader>
            <IonMenuToggle auto-hide="false" >
              <IonItem button lines='none' detail={false} routerLink={'/home'} >
                <IonIcon slot="start" icon={homeOutline} />
                <IonLabel>
                  Home
                </IonLabel>
              </IonItem>
              <IonItem button lines='none' detail={false} onClick={logout} >
                <IonIcon slot="start" icon={homeOutline} />
                <IonLabel>
                  Logout
                </IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
}

export default SideMenu