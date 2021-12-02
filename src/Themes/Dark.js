import { DarkTheme } from '@react-navigation/native';
const Dark = {
    dark: true,
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#171822',
        white: '#ffffff',
        black: '#000000',
        primary: '#FFAC30',
        secondary: '#03DAC5',
        grey: '#9d9fa3',
        success: '#38C2B7',
        error: '#E14161',
        text1: '#FFFFFF',
        text2: '#7B7F9E',
        text3: '#7B7F9E',
        boxBackground: '#212330',
    },
};

export default Dark;
