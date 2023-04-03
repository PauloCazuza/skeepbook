import { Box, Heading, HStack, Stack, Text } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Sheep } from "../../interface";
import { formatDateBR } from "../../util/formatDate";

interface ISheepCard {
  sheep: Sheep;
  onPress: () => void;
}

function SheepCard({ sheep, onPress }: ISheepCard) {

  return (
    <TouchableOpacity onPress={onPress}>
      <Box alignItems="center" my="1" width="full" >
        <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700"
        }} _web={{
          shadow: 2,
          borderWidth: 0
        }} _light={{
          backgroundColor: "gray.50"
        }}>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                Ovelha Nº{sheep.numero}
              </Heading>
              <Text fontSize="xs" _light={{
                color: "violet.500"
              }} _dark={{
                color: "violet.400"
              }} fontWeight="500" ml="-0.5" mt="-1">
                {sheep.variedade}
              </Text>
            </Stack>
            <Text fontWeight="400" textAlign="justify">
              Pesagem realizada dia {formatDateBR(sheep?.dataDaPesagem)}{"\n"}Peso registrado: {sheep.peso} KG{"\n"}Score: {sheep.ECC}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }} fontWeight="400">
                  Famacha {sheep.famacha}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

export default SheepCard;