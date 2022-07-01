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
    titulo='Dogs en React'
    detalle='Este proyecto es mi Proyecto Individual en el Bootcamp de "Henry". Puse en práctica lo aprendido. Utilice: Javascript, HTML, CSS, Postrges, Node, React, Redux y Sequelize. No teniamos permitido utilizar librerías de estilo y une consultas a API con el CRUD en DB'
    enlace='https://client-srjleedogs.herokuapp.com/'
    />
    <Proyecto 
    imagen='/atoch.jpg'
    tipo='ecommerce'
    titulo='Atoch Sanitarios'
    detalle='Corresponde al Proyecto Grupal del Bootcamp de "Henry". Desarrolle mis habilidades blandas. Utilizamos: Next.Js, Postgres(Migrations), Auth0, Redux, ChakraUI, MercadoPago, Algolia, Tailwind y EmailJs. Utilizamos metodología Scrum y profundizamos el uso de GIT'
    enlace='https://atoch.herokuapp.com/'
    
    />

    </Flex>

    <Footer/>

    </div>
  )
}
