import { useState } from "react";
import { Button, Icon, Input, Pressable, Stack, Text, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { colors } from "../../Assets/GlobalStyles";

const FormLogin = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Stack
      space={4}
      w="100%"
      alignItems="center"
    >
      <Input
        w={{
          base: "75%",
          md: "25%"
        }}
        borderColor="blue.400"
        backgroundColor={colors.lightBlue}
        rounded={30}
        placeholderTextColor={colors.darkBlue}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" color="red" />}
            size={5}
            ml="2"
            color="blue.500"
          />
        }
        placeholder="Email" />
      <Input w={{
        base: "75%",
        md: "25%"
      }}
        type={show ? "text" : "password"}
        backgroundColor={colors.lightBlue}
        borderColor="blue.400"
        placeholderTextColor={colors.darkBlue}
        rounded={30}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="lock" color="red" />}
            size={5}
            ml="2"
            color="blue.500"
          />
        }
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={
              <MaterialIcons name={show ? "visibility" : "visibility-off"} />
            }
              size={5}
              mr="2"
              color="blue.500"
            />
          </Pressable>
        }
        placeholder="Password" />
      <Button
        backgroundColor={colors.lightOrange}
        alignItems="center"
        justifyContent="center"
        rounded={50}
        width="300"
        onPress={() => Alert.alert("Clicars-te aqui my friend")}
      >
        <Text
          textAlign="center"
          fontWeight="bold"
        >
          Login
        </Text>
      </Button>
    </Stack>
  )
};

export default FormLogin;