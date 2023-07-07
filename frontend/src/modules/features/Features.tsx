import Feature from '@/components/feature/Feature'
import React from 'react'


const featuresList =[ 
    {
        title : "You are our #1 priority",
        text : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        icon : "/images/icon-chat.png"
    },
    {
        title : "More savings means higher rates",
        text : "The more you save with us, the higher your interest rate will be!",
        icon : "/images/icon-money.png"
    },
    {
        title : "Security you can trust",
        text : "We use top of the line encryption to make sure your data and money is always safe.",
        icon : "/images/icon-security.png"
    }
]


export default function Features() {
  return (
    <div className='flex'>
        {featuresList.map((element,index)=> <Feature key={index} featureItem={element} className='w-1/3'/>)}
    </div>
  )
}
