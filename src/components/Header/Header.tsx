import React, { FunctionComponent } from 'react';
import { Wrapper } from './Header.css';
import moonIcon from '../../img/moonIcon.png';
import sunIcon from '../../img/sunIcon.png';
import { Logo, Datetime, DarkMode } from '../index';
import { appState } from '../../data/reducers/appReducer';
import { AppState } from '../../data/store';
import { Action } from '../../data/actions/appAction';
import { toggleMode } from '../../data/actions/appAction';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { keys, storeValue } from '../../data/localStorage';
//type Props = appState & LinkDispatchProps;

const Header: FunctionComponent<any> = (props) => {
  const dispatch = useDispatch();
  const isMode = useSelector((state: AppState) => state.mode.isMode);
  const options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const today = new Date();
  const currentDate = today.toLocaleDateString('en-US', options);
  const changeMode = () => {
    const modeState = isMode;
    console.log(!modeState);
    dispatch(toggleMode(!modeState));
  };
  console.log(isMode);
  return (
    <Wrapper margin={true} padding={true} mode={isMode}>
      <Logo mode={isMode} />
      <Wrapper margin={false} padding={false} mode={isMode}>
        <Datetime mode={isMode}>{currentDate}</Datetime>
        <DarkMode img={isMode ? sunIcon : moonIcon} onClick={changeMode} />
      </Wrapper>
    </Wrapper>
  );
};

// interface LinkDispatchProps {
//   toggleMode: (isMode: any) => void;
// }

// const mapStateToProps = (state: appState) => ({
//   isMode: state.isMode,
// });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<any, any, Action>
// ): LinkDispatchProps => ({
//   toggleMode: bindActionCreators(toggleMode, dispatch),
// });

export default Header;
