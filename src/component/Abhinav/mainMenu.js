import React, { Component } from 'react';
import { Button } from 'antd';

class MainMenu extends Component {

    render() {
        return (
            <div>
                <Button type="link" block disabled>
                    <h1>MainMenu</h1>
                 </Button>
                <Button type="link" block>
                    Create/Access Job(s)
                 </Button>
                <Button type="link" block onClick={()=>this.props.history.push("/scenarios")}>Create/Access Scenario(s)</Button>
                <Button type="link" block>
                    Access Execution Rules
                 </Button>
                <Button type="link" block>
                    Log Off
            </Button>
            </div>
        );
    }
}

export default MainMenu;