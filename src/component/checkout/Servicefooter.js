import React from 'react'
import { AddButton, SFCol, SFMain, SFRow } from '../../Style/LayoutStyle'
import QuantityBar from './QuantityBar'

export default function Servicefooter() {
  return (
    <SFMain>
        <SFRow>
            <SFCol>
                 <QuantityBar />   
            </SFCol>
            <SFCol>
                 <AddButton>Add $ 72</AddButton>
            </SFCol>
        </SFRow>
    </SFMain>
  )
}
