import React from 'react'
import { SMFtr, SMMain } from '../../Style/LayoutStyle'
import CheckoutHeader from './CheckoutHeader'
import Servicefooter from './Servicefooter'
import ServiceNameSub from './ServiceNameSub'
import ServiceOpt from './ServiceOpt'

export default function ServiceModelMain() {
  return (
    <>
    <SMMain>
    <CheckoutHeader />
    <ServiceNameSub />
    <ServiceOpt />
    </SMMain>
    <SMFtr>
    <Servicefooter />
    </SMFtr>
    
    </>
  )
}
