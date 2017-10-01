import { StyleSheet } from 'react-native';

import * as Theme from 'constants/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.BACKGROUND,
    flex: 1,
    paddingLeft: Theme.Grid.COLUMN,
    paddingRight: Theme.Grid.COLUMN,
  },
});
