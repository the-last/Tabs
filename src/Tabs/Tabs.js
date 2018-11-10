import React, { Component } from 'react'

class TabPane extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultActive: props.defaultActive,
            active: props.active,
            tab: props.tab,
            key: props.key
        }
    }
    onActive = (v) => {
        this.setState({
            key: v
        })
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