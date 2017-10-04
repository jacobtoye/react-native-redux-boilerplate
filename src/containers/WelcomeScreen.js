import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { WelcomeScreen } from 'screens';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onPress: () => NavigationActions.navigate({ routeName: 'Profile' }),
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(WelcomeScreen);
