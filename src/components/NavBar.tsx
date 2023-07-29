import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/bird-colorful-logo-gradient-vector_343694-1365.jpg.avif'


const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize='100px'/>
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar