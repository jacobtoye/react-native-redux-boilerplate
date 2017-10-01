import { StyleSheet } from 'react-native';

import * as Theme from 'constants/theme';

export default StyleSheet.create({
  text: {
    color: Theme.Colors.LIGHT_TEXT_PRIMARY,
    fontSize: Theme.Text.DISPLAY,
    lineHeight: 32,
    marginTop: Theme.Grid.COLUMN,
    marginBottom: Theme.Grid.COLUMN,
    textAlign: 'center',
  },
});
