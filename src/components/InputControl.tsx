import React from 'react'
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react'

export const InputControl: React.FC = () => {
  return (
    <IonSegment value='mkg'>
        <IonSegmentButton value='mkg'>
            <IonLabel>
                m/kg
            </IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value='ftlbs'>
            <IonLabel>
                ft/lbs
            </IonLabel>
        </IonSegmentButton>
    </IonSegment>
  )
}
