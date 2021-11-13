import React from 'react';
class ClickCounter extends React.Component {
  state = {
    click: 0
  };

  handleChange(e) {
    // this.setState({
    //   element: e.target.className,
    //   time: Date.now(),
    //   module: this.props.event
    // })
    // this.state.click = this.state.click + 1;
  }

  render() {
    return (
      <>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            onClick: (e) => {
              this.handleChange(e);
            }
          })
        })}
      </>
    );
  }
}
export default ClickCounter;