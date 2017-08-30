import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      message: ''
    };
  }

  handleChange = event => {
    let split = event.target.value.split("\n")
    let row1 = split[0]
    let row2 = split[1]
    let row3 = split[2]
    if (split.length !== 3 ||
        row1.replace(/\s+/g, " ").trim().split(' ').length !== 5 ||
        row2.replace(/\s+/g, " ").trim().split(' ').length !== 3 ||
        row3.replace(/\s+/g, " ").trim().split(' ').length !== 5) {
          this.setState({
            message: <div
              id="poem-validation-error"
              style={{color: 'red'}}
              >
                This poem is not written in the right structure!
              </div>
          })
    } else {
      this.setState({
        message: ''
      })
    }
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <textarea value={this.state.text} onChange={this.handleChange}
          rows="3"
          cols="60"
        />
        {this.state.message}
      </div>
    );
  }
}

export default PoemWriter;
