
import 'antd/dist/antd.css';
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import { Button } from 'antd';
 

 interface Props {
   name:
    string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
        <h1>
          Hello {name}
        </h1>
      </>
    );
  }
}

export default hot(App);
