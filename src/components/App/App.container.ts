import App from './App';
import { connect } from 'react-redux';

import { Generic } from '../../assets/types';
import dummySelectors from '../../store/selectors';

function mapStateToProps(state: Generic) {

    const { getDummyData } = dummySelectors;

    const dummyData = getDummyData(state);
    return { dummyData };
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
