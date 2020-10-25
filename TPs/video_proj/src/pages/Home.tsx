import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonPage, IonRange, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { search } from 'ionicons/icons';

const Home: React.FC = () => {
  // COMMON SECTION
  const [display, setDisplay] = useState<string>('HD');
  const [priceRange, setPriceRange] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 400 });
  const [position, setPosition] = useState<string>("None");

  // SECTION FOR ROOF
  const [roofScreenSize, setRoofScreenSize] = useState<number>(0);

  // SECTION FOR FLOOR
  const [distance, setDistance] = useState<number>(0);
  const [floorScreenSize, setFloorScreenSize] = useState<number>(0);

  const [showResult, setShowResult] = useState<boolean>();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center ion-text-uppercase'>Video Projector</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList className='ion-margin'>
          <IonItem>
            <IonLabel>Quality :</IonLabel>
            <IonSelect okText="Okay" cancelText="Dismiss" onIonChange={e => setDisplay(e.detail.value)}>
              <IonSelectOption defaultChecked={true}>HD</IonSelectOption>
              <IonSelectOption>4K</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Price :</IonLabel>
            <IonRange dualKnobs={true} pin={true} min={0} max={400} color="secondary" onIonChange={e => setPriceRange(e.detail.value as any)}>
              <IonLabel slot="start">0</IonLabel>
              <IonLabel slot="end">400</IonLabel>
            </IonRange>
          </IonItem>

          <IonItem>
            <IonSegment onIonChange={e => setPosition(e.detail.value as any)}>
              <IonSegmentButton value="Floor">
                <IonLabel>Floor</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="Roof">
                <IonLabel>Roof</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonItem>

          <IonItemGroup hidden={position === 'Roof' ? false : true}>
            <IonItemDivider>Roof's Info :</IonItemDivider>
            <IonItem>
              <IonLabel>Screen size (Diagonal) :</IonLabel>
              <IonRange min={0} step={0.25} max={6} color="secondary" onIonChange={e => setRoofScreenSize(e.detail.value as any)}>
                <IonLabel slot="start">0</IonLabel>
                <IonLabel slot="end">6</IonLabel>
              </IonRange>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup hidden={position === 'Floor' ? false : true}>
            <IonItemDivider>Floor's Info :</IonItemDivider>
            <IonItem>
              <IonLabel>Distance from wall :</IonLabel>
              <IonRange min={0} max={20} pin={true} color="secondary" onIonChange={e => setDistance(e.detail.value as any)}>
                <IonLabel slot="start">0</IonLabel>
                <IonLabel slot="end">20</IonLabel>
              </IonRange>
            </IonItem>

            <IonItem>
              <IonLabel>Screen size (Diagonal) :</IonLabel>
              <IonRange min={0} step={0.25} max={6} color="secondary" onIonChange={e => setFloorScreenSize(e.detail.value as any)}>
                <IonLabel slot="start">0</IonLabel>
                <IonLabel slot="end">6</IonLabel>
              </IonRange>
            </IonItem>
          </IonItemGroup>

          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>Quality : {display}</IonItem>
          <IonItem>Price range : {priceRange.lower} to {priceRange.upper}</IonItem>
          <IonItem>Position : {position}</IonItem>
          <IonItemGroup hidden={position === 'Roof' ? false : true}>
            <IonItem>Screen size : {roofScreenSize}</IonItem>
          </IonItemGroup>
          <IonItemGroup hidden={position === 'Floor' ? false : true}>
            <IonItem>Distance : {distance}</IonItem>
            <IonItem>Screen size : {floorScreenSize}</IonItem>
          </IonItemGroup>

          <IonItem>
            <IonButton slot="end" size="large" color="success" onClick={() => setShowResult(true)}>
              <IonIcon size="large" icon={search}/>
            </IonButton>
          </IonItem>
        </IonList>

        <IonList hidden={showResult}>
          <IonItemGroup hidden={position === 'Floor' ? false : true}>
            <IonItem>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Le vidéoprojecteur</IonCardSubtitle>
                  <IonCardTitle>Nom#1</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Wow un superbe projecteur : Taille = { distance }</p>
                </IonCardContent>
              </IonCard>
            </IonItem>
          </IonItemGroup>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
