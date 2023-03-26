import { createDrawerNavigator } from "@react-navigation/drawer";

//SCREENS
import Home from "../screens/Home";
import NewSheep from "../screens/NewSheep";


const { Navigator, Screen } = createDrawerNavigator();

function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="NewSheep"
                component={NewSheep}
            />
        </Navigator>
    );
}

export default AppRoutes;