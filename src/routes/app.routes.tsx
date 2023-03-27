import { createDrawerNavigator } from "@react-navigation/drawer";
import EditSheep from "../screens/EditSheep";

//SCREENS
import Home from "../screens/Home";
import NewSheep from "../screens/NewSheep";
import Sheeps from "../screens/Sheeps";


const { Navigator, Screen } = createDrawerNavigator();

function AppRoutes() {

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
}

export default AppRoutes;