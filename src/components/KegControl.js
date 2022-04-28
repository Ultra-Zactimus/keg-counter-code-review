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
      selectedKeg: null,
      soldPints: false
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
    this.setState(
      { 
        mainKegList: newMainKegList, 
        formVisibleOnPage: false 
      });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(keg => keg.id !== id);
    this.setState({
      mainKegList: newMainKegList,
      selectedKeg: null
    });
  }

  handleSoldPints = () => {
    this.setState({pintsSold: true})
  }

  handleDecrementingPints = (id) => {
    const addedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    if(addedKeg.pints - 1 < 0) {
      addedKeg.pints = 0;
    } else {
      addedKeg.pints -= 1;
    }

    const newMainKegList = this.state.mainKegList
    .filter(keg => keg.id === id);

    this.setState(
      {
        mainKegList: newMainKegList,  
        soldPints: false
      }
    );
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
        keg={this.state.selectedKeg} 
        onClickingDelete={this.handleDeletingKeg} 
      />
      buttonText = "Return to the list of Kegs";

    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewKegForm 
        onNewKegCreation={this.handleAddingNewKegToList} 
      />
      buttonText = "Return to the list of Kegs";

    } else {
      currentlyVisibleState = 
      <KegList 
        kegList={this.state.mainKegList} 
        onKegSelection={this.handleChangingSelectedKeg} 
        onSoldPints={this.handleDecrementingPints}
      />
      buttonText = "Add Keg";

    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;