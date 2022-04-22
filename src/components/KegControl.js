import React, { Component } from "react";

class KegControl extends Component {
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
    const newKegList = this.state.beers.concat(newKeg);
    this.setState({beers: newKegList, formVisibleOnPage: false})
  }

  handleUpdatingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg})
  }

  render() {
    return (
      <React.Fragment>
        
      </React.Fragment>
    );
  }
}