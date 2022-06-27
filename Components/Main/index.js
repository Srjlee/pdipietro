import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    HStack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  import {IoLogoJavascript, IoLogoHtml5} from 'react-icons/io'
  import {SiPostgresql, SiRedux, SiVercel} from 'react-icons/si'
  import {DiReact} from 'react-icons/di'
  
  
  const Feature = ({ text, Image, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'lg'}
          bg={iconBg}
          border={'1px solid'}
          borderColor={'#ccc'}
          padding={2}
          >

          {Image}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} align={'center'} justifyContent='center'>
            
            <Heading>Fullstack Developer</Heading>
            <Text color={'gray.500'} fontSize={'lg'} align='center' justifyContent='center' margin='2rem'>
              Autonomia en el trabajo para cumplimiento de objetivos individuales y grupales. 
            </Text>
            <HStack spacing={16} mt={'12rem'} padding={'0.5rem'} align='center' justifyContent='center'>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                Image={<Icon as={DiReact} color={'dark.500'} w={5} h={5} />}
                
                // iconBg={'white'}
                text={'React.Js'}
                
              />
              <Feature
                Image={<Icon as={IoLogoJavascript} color={'dark.500'} w={5} h={5} />}
                iconBg={useColorModeValue('yellow.0', 'yellow.900')}
                text={'Javascript'}
              />
              <Feature
                Image={
                  <Icon as={IoLogoHtml5} color={'whiteAlpha.900'} w={5} h={5} />
                }
                iconBg={useColorModeValue('orange.0', 'orange.900')}
                text={'HTML'}
              />
            </Stack>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                Image={
                  <Icon as={SiPostgresql} color={'blue.500'} w={5} h={5}  />
                }
                iconBg={'white'}
                text={'Postgress'}
                
              />
              <Feature
                Image={<Icon as={SiRedux} color={'purple.500'} w={5} h={5} />}
                iconBg={'#ccc'}
                text={'Redux'}
              />
              <Feature
                Image={
                  <Icon as={SiVercel} color={'#fff'} w={5} h={5} />
                }
                iconBg={'#000'}
                text={'Next'}
              />
            </Stack>
            </HStack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'https://number8.com/wp-content/uploads/2021/01/2021-software-development-salary-trends.png'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }