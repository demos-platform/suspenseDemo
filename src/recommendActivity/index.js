import React, { Component } from 'react';

import HotActivity from './HotActivity';

class RecommendActivity extends Component {
  state = {
    isChartVisible: false,
  };

  handleShowChart = () => {
    this.setState({
      isChartVisible: true,
    });
  }

  render() {
    return (
      <div className="not-visible-container">
        {
          !this.state.isChartVisible ? (
            <h2 className="click-visible">
              <button
                onClick={this.handleShowChart
              }>查看热门活动</button>
            </h2>
          ) : (
            <HotActivity />
          )
        }
      </div>
    );
  }
}

export default RecommendActivity;
