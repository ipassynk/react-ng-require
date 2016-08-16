import React, {Component} from 'react';

class Tabs extends Component {
    constructor() {
        super();
        this.panes = [];
        this.state = {panes: [], selected: null};
        this.selectTab = this.selectTab.bind(this);
    }

    getTabItems() {
        // we can pass the whole component to child
        return React.Children.map(this.props.children,
            (tab, index) => {
                return React.cloneElement(tab, {tabs: this, selected: index === this.state.selected})
            });
    }

    addTabItem(pane) {
        this.panes = [...this.panes, pane];
        this.setState({panes: this.panes},
            this.ifAllRegistered);
    }

    ifAllRegistered() {
        if (this.state.panes.length === this.props.children.length) {
            if (this.state.selected === null) {
                this.setState({selected: 0});
            }
        }
    }

    selectTab(index) {
        this.setState({selected: index});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.panes.map((pane, index) =>
                        <li onClick={()=>this.selectTab(index)} key={index-1}>{pane.props.name}</li>)}
                </ul>
                {this.getTabItems()}
            </div>
        )
    }
}

export default Tabs;