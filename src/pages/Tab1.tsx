import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonCard, 
  IonCardHeader, 
  IonCardContent, 
  IonCardTitle,
} from '@ionic/react';
import { useState } from 'react';
import { sync, reload, SyncResult } from '@capacitor/live-updates';
import './Tab1.css';

const Tab1: React.FC = () => {
  const VERSION: number = 3

  const [syncResp, setSyncResp] = useState<string>('')

  const liveUpdateSync = async () => {
    const resp: SyncResult = await sync()
    const formatted: string = JSON.stringify(resp, null, 2)
    setSyncResp(formatted)
  } 

  const liveUpdateReload = async () => {
    await reload()
    setSyncResp('')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Version {VERSION}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Version {VERSION}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Sync</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            { syncResp && <pre>{syncResp}</pre>}
            <IonButton onClick={(e) => liveUpdateSync()} style={{ display: 'flex', justifyContent: 'center'}}>
              Sync
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Reload</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton onClick={(e) => liveUpdateReload()} style={{ display: 'flex', justifyContent: 'center'}}>
              Reload
            </IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
