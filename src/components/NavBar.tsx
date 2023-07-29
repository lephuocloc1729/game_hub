import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/bird-colorful-logo-gradient-vector_343694-1365.jpg.avif'
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding='10px'>
      <Image src={logo} boxSize='100px'/>
      <Text>NavBar</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar