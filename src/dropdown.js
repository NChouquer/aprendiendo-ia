import React from "react";
import ReactDOM from "react-dom";
import { Collapse } from "react-collapse";
import './css/dropdown.css'

export class DropdownItem extends React.Component {
  state = {
    isDropdownOpen: false,
    dropdownToggleIcon: "+"
  };

  onDropdownClicked = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen,
      dropdownToggleIcon: prevState.dropdownToggleIcon === "+" ? "-" : "+"
    }));
  };

  render() {
    return (
      <div
        className={
          this.props.theme === "dark"
            ? "accordionContainerDark"
            : "accordionContainerLight"
        }
        id={this.props.id}
      >
        <div
          className={
            this.props.theme === "dark" ? "headerBarDark" : "headerBarLight"
          }
        >
          <div>{this.props.title}</div>
          <button
            className={
              this.props.theme === "dark"
                ? "openAccordionToggleDark"
                : "openAccordionToggleLight"
            }
            onClick={this.onDropdownClicked}
          >
            {this.state.dropdownToggleIcon}
          </button>
        </div>
        <Collapse isOpened={this.state.isDropdownOpen}>
          <div className="displayText">{this.props.children}</div>
        </Collapse>
      </div>
    );
  }
}
