import { Redirect, Route } from 'react-router-dom';
import React from 'react';

import {
  IonApp,
  setupIonicReact,
  IonRouterOutlet,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonAlert
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, refreshOutline } from 'ionicons/icons'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { useState, useRef } from 'react';
import { BmiControls } from './components/BmiControls';
import { BmiResult } from './components/BmiResult';
import { InputControl } from './components/InputControl';

setupIonicReact()

const App: React.FC = () => {
  // const [height, setHeight] = useState()
  // const [weigth, setWeight] = useState()

  const [BMIresult, setBMIresult] = useState<number>()
  const [error, setError] = useState <string>('')

  const heightInputRef = useRef<HTMLIonInputElement>(null)
  const weightInputRef = useRef<HTMLIonInputElement>(null)

  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value
    const enteredWeight = weightInputRef.current!.value

    if (
      !enteredHeight 
      || !enteredWeight 
      || +enteredHeight <= 0 
      || +enteredWeight <= 0) {
        setError("Please input a valid (non-negative) number!")
      return
    }

    const BMI = +enteredWeight / (+enteredHeight * +enteredHeight)
    setBMIresult(BMI)
    console.log(BMIresult)

  }
  const resetBMI = () => {
    weightInputRef.current!.value = ''
    heightInputRef.current!.value = ''
  }
  const clearError = () =>{
    setError('')
  }




  return (
  <React.Fragment>

    <IonAlert isOpen={!!error} 
    message={error} 
    buttons={[{text: 'Okay', handler:clearError}]} />
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <InputControl />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput type='number' ref={heightInputRef} labelPlacement='floating' label='Your Height'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonInput type='number' ref={weightInputRef} labelPlacement='floating' label='Your Weight'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <BmiControls onCalculate={calculateBMI} onReset={resetBMI} />

          {BMIresult && (
            <BmiResult bmiResult={BMIresult} />
          )}
        </IonGrid>
      </IonContent>
    </IonApp>
    </React.Fragment>
    )
    
};

export default App;
