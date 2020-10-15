import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import './Listing.css';

const Listing: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonThumbnail slot="start">
            <IonImg src="./imgs/cat.jpg" />
          </IonThumbnail>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Listing;
