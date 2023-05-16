import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const VERSION = 1

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Live Updates</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={`This is version ${VERSION}`} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
