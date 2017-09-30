import { StyleSheet } from 'react-native';

import * as Theme from '../../constants/theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Theme.Colors.ACCENT,
    borderRadius: 12,
    flexDirection: 'row',
    minHeight: Theme.Grid.ROW * 2,
    justifyContent: 'center',
    paddingLeft: Theme.Grid.COLUMN,
    paddingRight: Theme.Grid.COLUMN,
  },
  text: {
    color: Theme.Colors.LIGHT_TEXT_PRIMARY,
    fontSize: Theme.Text.BODY,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});
