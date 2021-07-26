import React, {useState} from 'react';
import './ExploreContainer.css';

import {IonButton,IonInput} from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [text,setText] = useState("Value...");
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p><br />

      <IonButton>Default Button</IonButton><br />
      <IonButton expand="block">Block Button</IonButton><br />
      <IonButton expand="full">Full Button</IonButton><br />
      <button className="native-button">Native Button</button><br /><br />
      <IonInput value={text} onIonChange={e => setText(e.detail.value!)} placeholder="Type to see issue" />
    </div>
  );
};

export default ExploreContainer;
