import { useState, useContext } from "react";
import { Button, Icon, Text } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EditSheep from "../screens/EditSheep";
//SCREENS
import Home from "../screens/Home";
import Login from "../screens/Login";
import NewSheep from "../screens/NewSheep";
import Sheeps from "../screens/Sheeps";
import { AuthContext } from "../contexts/Auth/auth";
import { MaterialIcons } from "@expo/vector-icons";


const { Navigator, Screen } = createDrawerNavigator();

function AppRoutes() {
    const { user, LogOut } = useContext(AuthContext);

    if (user) {
        return (
            <Navigator
                screenOptions={{

                }}
            >
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Inicio",
                        headerRight: () => (
                            <Icon
                                as={<MaterialIcons name="logout" color="red" />}
                                size={7}
                                mx="3"
                                onPress={LogOut}
                                ml="2"
                                color="green.700"
                            />
                        ),
                    }}
                />
                <Screen
                    name="NewSheep"
                    component={NewSheep}
                    options={{
                        title: "Nova pesagem"
                    }}
                />
                <Screen
                    name="EditSheep"
                    component={EditSheep}
                    options={{
                        drawerItemStyle: { display: "none" }
                    }}
                />
                <Screen
                    name="Sheeps"
                    component={Sheeps}
                    options={{
                        title: "Pesagens"
                    }}
                />
            </Navigator>
        );
    } else {
        return (
            <Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: "Login"
                    }}
                />
            </Navigator>
        )
    }

}

export default AppRoutes;