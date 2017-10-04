import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { ProfileScreen } from 'screens';

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onPress: () => NavigationActions.back(),
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ProfileScreen);
