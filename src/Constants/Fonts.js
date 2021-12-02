/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
    'avenir-next-regular': require('Assets/fonts/avenir-next-regular.ttf'),
    'avenir-next-medium': require('Assets/fonts/avenir-next-medium.ttf'),
    'avenir-next-demi': require('Assets/fonts/avenir-next-demi.ttf'),
    'avenir-next-bold': require('Assets/fonts/avenir-next-bold.ttf'),
    'Ubuntu-Medium': require('Assets/fonts/Ubuntu-Medium.ttf'),
    'Montserrat-Italic': require('Assets/fonts/Montserrat-Italic.ttf'),
    'GreatVibes-Regular': require('Assets/fonts/GreatVibes-Regular.ttf'),
};
const type = {
    primary: 'avenir-next-regular',
    secondary: 'Ubuntu-Medium',
    medium: 'avenir-next-medium',
    bold: 'avenir-next-bold',
    semi: 'avenir-next-demi',
    stylish: 'GreatVibes-Regular',
    italic: 'Montserrat-Italic',
};

const Fonts = { customFonts, type };

export default Fonts;
