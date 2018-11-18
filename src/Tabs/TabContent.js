import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style/tabs.scss'

function classnames (obj) {
    let classStr= ''
    
    Object.keys(obj).forEach((v) => {
        if(obj[v]){
            classStr += ` ${v}`
        }
    })
    return classStr
}

export default class TabContent extends Component {
    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number
    }

    getTabPanes() {
        const { activeIndex, panels } = this.props
        
        return React.Children.map(panels, (child) => {
            if (!child || typeof child === 'string') {
                return ;
            }
            
            const order = parseInt(child.props.order, 10)
            const isActive = activeIndex === order
            
            return isActive ? (
                <div

                    key={`tabpane-${order}`}
                >
                    {child.props.children}
                </div>
            ): null
        })
    }

    render() {
        const { classPrefix } = this.props
        const classes = classnames({
            [`${classPrefix}-content`]: true
        })

        return  (
            <div className={classes}>
                {this.getTabPanes()}
            </div>
        )
    }

}