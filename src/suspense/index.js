import React from 'react'

export default function MockSuspense() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <PromiseThrower />
    </Suspense>
  );
}

let cache = "";
let returnData = cache;
const fetch = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve("数据加载完毕");
    }, 1000);
  });

class PromiseThrower extends React.Component {
  getData = () => {
    return returnData;
  };

  componentDidMount() {
    const getData = fetch();
    getData.then(data => {
      returnData = data;
    });
    if (returnData === cache) {
      throw getData;
    }
  }

  render() {
    return <>{this.getData()}</>;
  }
}

class Suspense extends React.Component {
  state = {
    promise: null
  };

  componentDidCatch(e) {
    if (e instanceof Promise) {
      this.setState(
        {
          promise: e
        },
        () => {
          e.then(() => {
            this.setState({
              promise: null
            });
          })
        }
      );
    }
  }

  render() {
    const { fallback, children } = this.props;
    const { promise } = this.state;
    return <>{promise ? fallback : children}</>;
  }
}