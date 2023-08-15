import {
  HStack, Text, Switch, useColorMode,
} from '@chakra-ui/react';

function ColourModeSwitch() {
  const { colorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} />
      <Text
        whiteSpace="nowrap"
      >
        Dark Mode
      </Text>
    </HStack>
  );
}

export default ColourModeSwitch;
