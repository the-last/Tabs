import React, { Component, PropTypes } from 'react'

module.exports = class TabNav extends Component {
    static propTypes = {
        
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number,
        onTabClick: PropTypes.func
    };

    getTabs = () => {
        const { panels, classPrefix, activeIndex } = this.props
    }
    
    render() {
        const { key, tab, contain, defaultActive, active } = this.state
        return <div active={key}>
            <span
                className={defaultActive ? "" : active ? "" : ""}
                onChange={this.props.onChange}
            >
                {tab}

            </span>

            <div>
                {contain}
            </div>

        </div>
    }

}