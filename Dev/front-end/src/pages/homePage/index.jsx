import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import PlaceOrder from './contents/PlaceOrder'
import MyRequest from './contents/MyRequest'
import MyAccept from './contents/MyAccept'
import Messages from './contents/Messages'
import './index.less'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 0
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClickTab = (index) => {
    this.setState({
      tabIndex: index
    })
  }

  render () {
    const { tabIndex } = this.state
    const tabList = ['发布订单','我发布的','我接受的','消息']
    const contentList = [
      <PlaceOrder />,
      <MyRequest />,
      <MyAccept />,
      <Messages />
    ]
    return (
      <View className='homePage'>
        <View className='tabSection'>
          {
            tabList.map((tab, index) => (
                <View
                  id={index}
                  className={tabIndex === index ? 'tab_active' : 'tab'}
                  onClick={()=>this.handleClickTab(index)}
                >
                  {tab}
                </View>
            ))
          }
        </View>
        <View className='contentSection'>
          {contentList[tabIndex]}
        </View>
      </View>
    )
  }
}
