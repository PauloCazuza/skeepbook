import { useState, useContext } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EditSheep from "../screens/EditSheep";
//SCREENS
import Home from "../screens/Home";
import Login from "../screens/Login";
import NewSheep from "../screens/NewSheep";
import Sheeps from "../screens/Sheeps";
import { AuthContext } from "../contexts/auth";


const { Navigator, Screen } = createDrawerNavigator();

function AppRoutes() {
    const { user } = useContext(AuthContext);

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
                        title: "Inicio"
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