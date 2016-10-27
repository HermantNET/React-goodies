import { connect } from 'react-redux';
import { increaseTextSize, addName, toggleRemoveMode, removeName } from '../../Actions/actionCreators';
import NamesDisplay from '../Present/NamesDisplay.jsx';
 
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNameClick: (index) => { dispatch(increaseTextSize(index)) },
        addName: (name) => { dispatch(addName(name)) },
        toggleRemoveMode: () => { dispatch(toggleRemoveMode()) },
        removeName: (index) => { dispatch(removeName(index)) }
    }
}

const DisplayNames = connect(
    mapStateToProps,
    mapDispatchToProps
)(NamesDisplay);

export default DisplayNames;