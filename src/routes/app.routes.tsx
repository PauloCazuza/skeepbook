import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EditSheep from "../screens/EditSheep";

import { User } from "../interface";
//SCREENS
import Home from "../screens/Home";
import Login from "../screens/Login";
import NewSheep from "../screens/NewSheep";
import Sheeps from "../screens/Sheeps";


const { Navigator, Screen } = createDrawerNavigator();

function AppRoutes() {
    const [user, setUser] = useState<User>();

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