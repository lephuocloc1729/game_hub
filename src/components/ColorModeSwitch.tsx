import { useColorMode, Button, HStack, Switch, Text } from "@chakra-ui/react"


const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack >
      <Switch isChecked= {colorMode === 'dark'} onChange={toggleColorMode}/>
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch