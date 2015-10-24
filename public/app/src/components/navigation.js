import React from 'react';
import classnames from 'classnames';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  click(e) {
    e.preventDefault();
    this.setState({
      active: !this.state.active
    });
  }
  render() {

    const navStyles = classnames({
      'navigation': true,
      'navigation--active': this.state.active
    })

    return <nav className={navStyles}>
      <div className="navigation__toggle" onClick={this.click.bind(this)}>
        Navigation
      </div>
      <fieldset className="navigation__set navigation__set--start">
        <input name="start" className="navigation__input navigation__input--start"/>
        <label className="navigation__label" for="start">Start Address</label>
      </fieldset>
      <div className="navigation__to-wrapper">
        <p className="navigation__to">to</p>
      </div>
      <fieldset className="navigation__set navigation__set--end">
        <input className="navigation__input navigation__input--end"></input>
        <label className="navigation__label">Destination Address</label>
      </fieldset>
      <input className="navigation__submit" type="submit" value="Go!"></input>
    </nav>
  }
}
