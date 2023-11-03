import React, {useState} from 'react'
import {SMFtr, SMMain} from '../../Style/LayoutStyle'
import CheckoutHeader from './CheckoutHeader'
import Servicefooter from './Servicefooter'
import ServiceNameSub from './ServiceNameSub'
import ServiceOpt from './ServiceOpt'

export default function ServiceModelMain() {
    const [data, setData] = useState([
        {
            type: "radioButton",
            title: 'Men`s HairCut',
            data: [{
                _id: 0,
                title: "Men`s HairCut",
                price: 40,
            },
                {
                    _id: 4,
                    title: "Women`s HairCut",
                    price: 50,
                }
            ]
        },
        {
            type: "checkBox",
            title: 'Select Style',
            data: [
                {
                    _id: 1,
                    title: "Beard Trim",
                    price: 32,
                },
                {
                    _id: 2,
                    title: "Head save",
                    price: 40,
                },
                {
                    _id: 3,
                    title: "Deluxe cut",
                    price: 80,
                },
            ]
        }
    ])
    return (
        <>
            <SMMain>
                <CheckoutHeader/>
                {
                    data?.map((item, index) => {
                        return <div>
                            {
                                item.type === "radioButton" && <ServiceNameSub data={item.data} title={item.title}/>
                            }
                            {
                                item.type === "checkBox" && <ServiceOpt data={item.data} title={item.title}/>
                            }
                        </div>
                    })
                }


            </SMMain>
            <SMFtr>
                <Servicefooter/>
            </SMFtr>

        </>
    )
}
