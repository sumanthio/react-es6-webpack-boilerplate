import Colors from 'material-ui/lib/styles/colors';
import Spacing from 'material-ui/lib/styles/spacing';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

var theme = ThemeManager.getMuiTheme({
    spacing: Spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: Colors.grey900,
        primary2Color: Colors.indigo700,
        primary3Color: Colors.indigo100,
        accent1Color: Colors.lightGreenA200,
        accent2Color: Colors.lightGreenA400,
        accent3Color: Colors.lightGreenA100,
        textColor: Colors.fullWhite,
        canvasColor: '#303030',
        borderColor: ColorManipulator.fade(Colors.fullWhite, 0.3),
        disabledColor: ColorManipulator.fade(Colors.fullWhite, 0.3),
    }
});

theme.paper.backgroundColor = '#303030';
theme.menu.backgroundColor = '#303030'; // doesn't do anything
theme.dropDownMenu.backgroundColor = '#303030'; // doesn't do anything

export default theme;
