import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) { // 1
    super(props);

    this.state = {
      count: 0
    }
  }

  componentDidMount() { // 3
    document.title = this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = this.state.count;
    }
  }

  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render() { // 2
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Adicionar +1</button>
      </div>
    )
  }
}