import React from 'react';

import { listOutline, personCircle } from 'ionicons/icons';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import Listing from '../pages/Listing';
import Profil from '../pages/Profil';

interface ContainerProps { }

const MainRouteur: React.FC<ContainerProps> = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/listing" component={Listing} exact/>
          <Route path="/profil" component={Profil} exact/>
          <Redirect exact from="/" to="/listing" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
  
          <IonTabButton tab="Listing" href="/listing">
            <IonIcon icon={listOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Profil" href="/profil">
            <IonIcon icon={personCircle} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default MainRouteur;