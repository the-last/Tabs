import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/tabs.scss'


function classnames(obj) {
    let classStr = ''

    Object.keys(obj).forEach(v => {
        if (obj[v]) {
            classStr += ` ${v}`
        }
    })
    return classStr
}

export default class TabPane extends Component {
    static propTypes = {
        tab: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,

        order: PropTypes.string.isRequired,
        disable: PropTypes.bool,
        isActive: PropTypes.bool
    }

    render() {
        const { classPrefix, className, isActive, children }  = this.props
        
        const classes = classnames({
            [className]: className,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: true,

        })

        return (
            <div
                role="tabpanel"
                className={classes}
                aria-hidden={!isActive}
            >
                {children}
            </div>
        )
    }
}