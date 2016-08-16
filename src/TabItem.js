import React, {Component} from 'react';

class TabItem extends Component {
    componentWillMount() {
        this.props.tabs.addTabItem(this);
    }

    render() {
        return (
            <div>{this.props.selected && this.props.children}</div>
        )
    }
}

export default TabItem;