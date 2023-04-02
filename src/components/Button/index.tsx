import { Box, Button as ButtonNB } from "native-base";

interface IButton {
    title: string;
    onPress: () => void;
}

const Button = ({
    title,
    onPress
}: IButton) => {
    return (
        <Box alignItems="center" justifyContent="center" my="2" width="100%">
            <ButtonNB onPress={onPress} width="50%" textAlign="center">
                {title}
            </ButtonNB>
        </Box>
    );
};

export default Button;