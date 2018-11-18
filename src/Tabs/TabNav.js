
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

export default class TabNav extends Component {
    static propTypes = {
        
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number,
        onTabClick: PropTypes.func
    };
    
    getTabs () {
        const { panels, classPrefix, activeIndex  } = this.props 
        return React.Children.map(panels, child => {
            
            if (!child || typeof child === 'string') {
                return ;
            }

            const order = parseInt(child.props.order, 10)

            let classes = classnames({
                [`${classPrefix}-tab`]: true,
                [`${classPrefix}-active`]: activeIndex === order,
                [`${classPrefix}-disabled`]: child.props.disabled                
            })

            let events = {}
            if(!child.props.disabled) {
                events = {
                    onClick: this.props.onTabClick.bind(this, order)
                }
            }

            const ref = {}
            if (activeIndex === order) {
                ref.ref = 'activeTab';
            }
            return (
                <li
                   role = 'tab'
                   aria-disabled={child.props.disabled ? 'true' : 'false'}
                   aria-selected={activeIndex === order ? 'true' : 'false'}
                   {...events}
                   className={classes}
                   key={order}
                   {...ref}
                >
                    {child.props.tab}
                </li>
            )

        })
    }
    
    render() {
        const { classPrefix } = this.props
        
        const rootClasses = classnames({
            [`${classPrefix}-bar`]: true
        })

        const classes = classnames({
            [`${classPrefix}-nav`]: true
        })
        
        return (
            <div
                className={rootClasses}
                role = "tablist"
            >
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </div>
        )
    }

}