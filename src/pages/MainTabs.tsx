import React from "react";
import { IonTabs, IonRouterOutlet, IonTabButton, IonTabBar, IonIcon, IonLabel,  } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { personOutline, newspaperOutline, documentTextOutline, notificationsOutline, peopleOutline, options } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';

import Home from './Home';
import Todo from './Todo';


const Maintabs: React.FC = () => {
    return(

      <IonTabs>
        <IonRouterOutlet>
          <Route exact path='/home/home' component={Home} />
          <Route exact path='/home/home/todo/:id' component={Todo} />
          {/* <Route exact path='/home/search' component={Search} />
          <Route exact path='/home/movies' component={Search} />
          <Route exact path='/home/home/moviesingle/:id/:type' component={MovieSingle} />
          <Route exact path='/home/home/tvsingle/:id/:type' component={TvSingle} /> */}
          <Route exact path='/home'>
            <Redirect to='/home/home' />
          </Route>
        </IonRouterOutlet>


        <IonTabBar slot="bottom">

          <IonTabButton tab="Home" href="/home/home">
             <IonIcon icon={personOutline} />
            <IonLabel>Home</IonLabel>
           </IonTabButton>
           
        

        </IonTabBar>
      </IonTabs>

    );
};

export default Maintabs;