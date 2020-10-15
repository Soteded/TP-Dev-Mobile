import { IonAlert, IonAvatar, IonCol, IonContent, IonHeader, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';

import './Profil.css';

const Profil: React.FC = () => {
  const [errorString, setErrorString] = useState<string>();
  const [ field, setField ] = useState<string>('');

  let profil: {
    name: string,
    bring: number,
    loanRate: number,
    insuRate: number,
    loanTime: number,
    notaryFees: number,
  } = {
    name: 'Bobby',
    bring: 5,
    loanRate: 5,
    insuRate: 5,
    loanTime: 5,
    notaryFees : 5,
  }

  const update = (clickedField: string) => {
    setField(clickedField);
    setErrorString(`Voulez vous changer votre ${document.getElementById(clickedField)!.childNodes[0].textContent!.toLowerCase()} ?`);
  }

  return (
    <>
      <IonAlert
        isOpen={!!errorString}
        onDidDismiss={() => setErrorString(undefined)}
        message={errorString}
        inputs={[
          {
            name: 'alertInput',
            type: 'text',
            label: `${document.getElementById(field)?.childNodes[0].textContent}`,
            value: `${document.getElementById(field)?.childNodes[1].textContent}`
          }
        ]}
        buttons={[
          {
            text: 'Abandonner',
            role: 'cancel',
            cssClass: 'secondary'
          },
          {
            text: 'Valider',
            cssClass: 'primary',
            handler: (data) => {
              console.log(data.alertInput);
            }
          }
        ]}
        
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonRow className="ion-margin">
            <IonCol>
              <IonList>

                <IonItem id='ouioui'>
                  <IonAvatar className='centerized'>
                    <IonImg class="imageResized" src="assets/imgs/cat.jpg" />
                  </IonAvatar>
                </IonItem>

                <IonItemSliding>
                  <IonItem id='name'>
                    <IonLabel>Nom</IonLabel>
                    <IonLabel className="ion-text-end">{profil.name}</IonLabel>
                  </IonItem>

                  <IonItemOptions side="end">
                    <IonItemOption color="success" onClick={() => update('name')}>Update</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
                
                <IonItemSliding>
                  <IonItem id='bring'>
                    <IonLabel>Apport</IonLabel>
                    <IonLabel className="ion-text-end">{profil.bring}€</IonLabel>
                  </IonItem>

                  <IonItemOptions side="end">
                    <IonItemOption color="success" onClick={() => update('bring')}>Update</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
                
                <IonItemSliding>
                  <IonItem id='loanRate'>
                    <IonLabel>Taux emprunt</IonLabel>
                    <IonLabel className="ion-text-end">{profil.loanRate}%</IonLabel>
                  </IonItem>

                  <IonItemOptions side="end">
                    <IonItemOption color="success" onClick={() => update('loanRate')}>Update</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
                
                <IonItemSliding>
                  <IonItem id='insuryRate'>
                    <IonLabel>Taux Assurance</IonLabel>
                    <IonLabel className="ion-text-end">{profil.insuRate}%</IonLabel>
                  </IonItem>

                  <IonItemOptions side="end">
                    <IonItemOption color="success" onClick={() => update('insuryRate')}>Update</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>

                <IonItemSliding>
                  <IonItem id='loanTime'>
                    <IonLabel>Durée de l'emprunt</IonLabel>
                    <IonLabel className="ion-text-end">{profil.loanTime}</IonLabel>
                  </IonItem>

                  <IonItemOptions side="end">
                    <IonItemOption color="success" onClick={() => update('loanTime')}>Update</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
                
                <IonItemSliding>
                  <IonItem id='notaryFees'>
                    <IonLabel>Frais de notaire</IonLabel>
                    <IonLabel className="ion-text-end">{profil.notaryFees}%</IonLabel>
                  </IonItem>

                  <IonItemOptions side="end">
                    <IonItemOption color="success" onClick={() => update('notaryFees')}>Update</IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              </IonList>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Profil;
