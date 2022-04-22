import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({ mainKegList: newMainKegList, formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({ mainKegList: newMainKegList, selectedKeg: null });
  }

  render() {
    let currentlyVisableState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisableState = <KegDetail
        keg={this.state.selectedKeg} onClickingDelete={this.handleDeletingKeg}
      />
      buttonText = "Return to the list of Kegs";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisableState = <NewKegForm
        onNewKegCreation={this.handleAddingNewKegToList}
      />
      buttonText = "Return to the list of Kegs";
    } else {
      currentlyVisableState = <KegList
        kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg}
      />
    }
    return (
      <React.Fragment>
        {currentlyVisableState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;