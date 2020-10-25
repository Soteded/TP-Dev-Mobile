import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenu side="start" type="push">
            <IonHeader>
              <IonToolbar color="danger">
                <IonTitle>End Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet></IonRouterOutlet>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
