import { Icon } from '@iconify/react'
import React from 'react'
import { HTitle, ServHeadMain, SHMainCol, SHMainRow, SPriceR } from '../../Style/LayoutStyle'

function CheckoutHeader() {
  return (
    <ServHeadMain>
    <SHMainRow>
    <SHMainCol>
      <HTitle>Customize "Men's Haircut"</HTitle>
      <SPriceR>₹140 - ₹1250</SPriceR>
      </SHMainCol>
      <SHMainCol>
      <Icon icon="carbon:close" color="#000" height={30} width={30} />
      </SHMainCol>
      </SHMainRow>
    </ServHeadMain>
  )
}

export default CheckoutHeader