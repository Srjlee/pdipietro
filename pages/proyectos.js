import React from 'react'
import Proyecto from '../Components/Proyectos'
import Timeline from '../Components/Linetime'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {Flex} from '@chakra-ui/react';

export default function proyectos() {
  return (
    <div>
    <Navbar
    enlaces={[{name:'Volver', ir: '/'}]}
    />    
    <Flex
    direction={{ base: 'column', md: 'row' }}
    gap={'2rem'}
    justifyContent={'center'}    
    >
    <Proyecto 
    imagen='/webSmart.jpg' 
    tipo='Web de Contacto' 
    titulo='Smart Way Seguros' 
    detalle= 'Este fue mi primer proyecto realizado realizado con conocimientos básicos. Utilice HTML, CSS, BOOTSTRAP y PHP. La web corresponde a mi emprendimiento personal como Asesor de Seguros'
    enlace='https://www.smartwayseguros.com'/>

    <Proyecto 
    imagen='/pi-dogs.jpg'
    tipo='web'
    titulo='Bootcamp - PI'
    detalle='Este proyecto lo hice durante mi aprendizaje en el Bootcamp de "Henry". Puse en práctica lo aprendido. Utilice: Javascript, HTML, CSS, Postrges, Node, React, Redux y Sequelize. No teniamos permitido utilizar librerías de estilo y une consultas a API con el CRUD en DB'
    enlace='https://client-srjleedogs.herokuapp.com/'
    />
    <Proyecto />

    </Flex>

    <Footer/>

    </div>
  )
}
