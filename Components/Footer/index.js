import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaGithub,  FaMailBulk, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
  
  
  const Logo = () => {
    return (
      <>
            <Image src='/perfil.jpg'  w={'7rem'} borderRadius='full'  />
      </>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={'3rem'}
        h={'3rem'}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithLogoLeft() {
    return (
      <Box
        bg={'#242858'}
        color={'#C8C9D5'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>SI LO PUEDES SOÑAR, LO PUEDES LOGRAR</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Linkdin'} target="_blank" href={'https://www.linkedin.com/in/pablo-di-pietro-66180925/'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'GitHub'} target="_blank" href={'https://github.com/Srjlee'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Mail'} target="_blank" href={'https://mail.google.com/mail/?view=cm&fs=1&to=pablod.dipietro@gmail.com&su=Vi Tu Portfolio en la web&body=Hola Pablo, vi tu portfolio en internet y me gustaría conversar contigo.'}>
              <FaMailBulk />
            </SocialButton>
            <SocialButton label={'FaWhatsapp'}  href={'https://wa.me/5491138805569?text=Hola, vi tu porfolio y me interesa hacerte una propuesta'}>
              <FaWhatsapp target="_blank"/>
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }