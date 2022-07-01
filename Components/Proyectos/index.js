import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue, Link
    //Image
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function blogPostWithImage({ tipo, titulo, imagen, detalle, enlace }) {
    return (
        <Center py={6}>
            <Box
                 
                 height={'30rem'}
                // maxH={'40rem'}

                w={'20rem'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={
                            imagen
                        }
                        //fit={'cover'}
                        layout={'fill'}

                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'0.8rem'}
                        letterSpacing={1.1}>
                        {tipo}
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'1.5rem'}
                        fontFamily={'body'}>
                        {titulo}
                    </Heading>
                    <Text color={'gray.500'} fontSize={'0.8rem'}>
                        {detalle}
                    </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    {/* <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          /> */}
                    <Link href={enlace} color='#C8C9D5' isExternal>
                        Ver Proyecto<ExternalLinkIcon mx='2px' />
                    </Link>
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>

                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}