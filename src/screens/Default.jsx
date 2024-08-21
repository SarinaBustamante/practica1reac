import React from 'react'

import Logo from './Default/_components/Logo'
import Description from './Default/_components/Description'
import Contador from './Default/_components/Contador'
import OpenLink from '../components/OpenLink'
import LessonInfo from './Default/_components/LessonInfo'

const Default = () => {
  return (
    <>
    <Contador/>
    <Logo/>
    <Description/>
    <OpenLink title="Learn React" url="https://react.dev/"  />
       <OpenLink title="Mi proyecto react (github)" url="https://github.com/danielchalcobarrera/desarrollo-frontend-react"  />
       <LessonInfo number="1" desc="Introducción a react y estructura de proyecto"/>
       <LessonInfo number="2" desc="Context API para la gestión del estado global en aplicaciones react"/>
    </>
    
  )
}

export default Default