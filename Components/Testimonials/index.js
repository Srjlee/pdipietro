import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link'

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'} align="center">
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text as={'a'} fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Quienes me conocen dicen:</Heading>
          <Text>El buen clima trae buenos resultados.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Proactivo en el aprendizaje</TestimonialHeading>
              <TestimonialText>
              "Ágil para adquirir conocimientos y aplicarlos en los proyectos y excepcional para entablar nuevas relaciones con otras personas, logrando que todo el equipo este de buen humor y centrado en el objetivo."
              </TestimonialText>
            </TestimonialContent>
           
            <TestimonialAvatar
              src={
                'https://media-exp2.licdn.com/dms/image/C5603AQH1zzDmqoJAsw/profile-displayphoto-shrink_100_100/0/1636650125183?e=1661990400&v=beta&t=vSVKCTsp-kdgkR7ItP7rA5fPdmAoTGyufeTdv320D4k'
              }
              name={'Juan Andres Macias '}
              title={'CEO Grupo Click SAS'}
              
              />
              
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Gran activo para el Equipo</TestimonialHeading>
              <TestimonialText>
              "Excelente persona, con gran capacidad para adquirir nuevos conocimientos técnicos acompañado de un espíritu de compañerismo que lo hace notar desde el momento 0"
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media-exp2.licdn.com/dms/image/C4D03AQFAiigzwGMECw/profile-displayphoto-shrink_100_100/0/1653030361713?e=1661990400&v=beta&t=d3LhOwVq0HNQRTnvIQT7Lqc_N1oEFLVhL-Gp-KMT2Ek'
              }
              name={'Franco Martinez '}
              title={'Front Developer en MELI'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Transmision de Conocimientos y buena comunicación</TestimonialHeading>
              <TestimonialText>
              "Gran habilidad de transmitir conocimiento. Es una persona con altas capacidades pedagógicas, tecnicas y sociales. Sin duda encuentra la solucion a las problematicas que se presentan"
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media-exp2.licdn.com/dms/image/C4D03AQGq3AEFi04zIw/profile-displayphoto-shrink_100_100/0/1636555626733?e=1661990400&v=beta&t=S73R8gFuGf1feM6dks8Ht5Hpo7yjqy_680vfskv3oDA'
              }
              name={'Tobias Piraino'}
              title={'Fullstack Developer'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}