import React, { Component, PropTypes, cloneElement } from 'react'
import style from './style/tabs.scss'
import TabNav from './TabNav.js'
import TabContent from './TabContent.js'

module.exports = class Tabs extends Component {
    static propTypes = {
        className: PropTypes.string,
        // 统一样式前缀
        classPrefix: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        defaultActiveIndex: PropTypes.number,
        activeIndex: PropTypes.number,
        onChange: PropTypes.func
    };
    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => { }
    };

    constructor(props) {
        super(props)
        
        // 方法banding
        this.handleTabClick = this.handleTabClick.bind(this)
        const { activeIndex, defaultActiveIndex } = this.props
        let activeIndex_;
        if(activeIndex) {
            activeIndex_ = activeIndex
        } else if (defaultActiveIndex) {
            activeIndex_ = defaultActiveIndex
        }
        
        this.state = {
            activeIndex: activeIndex_,
            prevIndex: activeIndex_,

        }

    };
    
    componentWillReceiveProps = (nextProps) => {
      if ('activeIndex' in nextProps) {
        this.setState({
            activeIndex: nextProps.activeIndex
        })
      }
    }

    handleTabClick(activeIndex) {
        const prevIndex = this.state.activeIndex
        
        if (this.state.activeIndex !== activeIndex && 'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex
            });

            this.props.onChange({activeIndex, prevIndex})
        }

    }

    renderTabNav() {
        const { classPrefix, children } = this.props;
        return (
            <TabNav
                key="tabBar"
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}   
            >
            </TabNav>
        )
    }

    renderTabContent() {
        const { classPrefix, children } = this.props;
        return (
            <TabContent
                key="tabBar"
                classPrefix={classPrefix}
                panels={children}
                activeIndex={this.state.activeIndex}
            >
            </TabContent>
        )
    }
    
    render() {
        const { className } = this.props;
        const classes = className + ' ui-tabs';

        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        )
    }
}
