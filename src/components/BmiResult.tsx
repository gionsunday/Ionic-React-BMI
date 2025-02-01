import React from 'react'
import { 
    IonRow, 
    IonCol, 
    IonCard, 
    IonCardContent 
} from '@ionic/react'

export const BmiResult: React.FC<{ bmiResult: number }> = props => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className='ion-text-center'>
                        <h3>Your body-mass-index</h3>
                        <h2>{props.bmiResult.toFixed(4)}</h2>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}
