import { useState, useEffect } from 'react'
import { View, Text, Form, Button, Picker, Input, Radio } from '@tarojs/components'
import './style.less'

const PlaceOrder = props => {

  const sizeList = ['小', '中', '大']
  const countList = [1,2,3,4,5,6,7,8,9,10,'> 10']
  const genderList = ['无要求', '仅限男性', '仅限女性']
  const typeList = ['食品', '书本', '日用品', '服装', '电子产品', '器具', '活物', '其他']

  const [sizeIdx, setSizeIdx] = useState(0)
  const [countIdx, setCountIdx] = useState(0)
  const [genderIdx, setGenderIdx] = useState(0)
  const [typeIdx, setTypeIdx] = useState(0)
  const [dateExpect, setDateExpect] = useState('')
  const [timeExpect, setTimeExpect] = useState('')

  const selectSize = e => {
    setSizeIdx(e.detail.value)
    console.log(e)
  }

  const selectCount = e => {
    setCountIdx(e.detail.value)
    console.log(e)
  }

  const selectGender = e => {
    setGenderIdx(e.detail.value)
    console.log(e)
  }

  const selectType = e => {
    setTypeIdx(e.detail.value)
    console.log(e)
  }

  const changeDateExpect = e => {
    setDateExpect(e.detail.value)
    console.log(e)
  }

  const changeTimeExpect = e => {
    setTimeExpect(e.detail.value)
    console.log(e)
  }

  const formSubmit = e => {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }

  const formReset = e => {
    console.log(e)
  }

  return <View className='placeOrder_page'>
    <Form onSubmit={formSubmit} onReset={formReset}>
      <View className='basicInfoSec'>
        <View className='sectionTitle'>快递基本信息</View>
        <Picker name='size' value={sizeIdx} mode='selector' range={sizeList} onChange={selectSize}>
          <View className='picker'>
           快递大小：{sizeList[sizeIdx]}
          </View>
        </Picker>
        <Picker name='count' value={countIdx} mode='selector' range={countList} onChange={selectCount}>
          <View className='picker'>
           快递数量：{countList[countIdx]}{'\n件'}
          </View>
        </Picker>
        <Text>取件地址：</Text>
        <Input name='start_addr' value='' type='text' placeholder='请输入取件地址'/>
        <Text>收件地址：</Text>
        <Input name='end_addr' value='' type='text' placeholder='请输入收件地址'/>
        <Text>取件信息：</Text>
        <Input name='code' value='' type='text' placeholder='请输入取件码或上传截图'/>
      </View>

      <View className='detailInfoSec'>
        <View className='sectionTitle'>更多信息</View>
        <Picker name='gender' value={genderIdx} mode='selector' range={genderList} onChange={selectGender}>
          <View className='picker'>
           性别要求：{genderList[genderIdx]}
          </View>
        </Picker>
        <Picker name='type' value={typeIdx} mode='selector' range={typeList} onChange={selectType}>
          <View className='picker'>
           物品类别：{typeList[typeIdx]}
          </View>
        </Picker>
        <Text>期望送达：</Text>
        <Picker name='dateExpect' value={dateExpect} mode='date' onChange={changeDateExpect}>
          <View className='picker' style={{height: '20px'}}>
           {dateExpect}
          </View>
        </Picker>
        <Picker name='timeExpect' value={timeExpect} mode='time' onChange={changeTimeExpect}>
          <View className='picker' style={{height: '20px'}}>
           {timeExpect}
          </View>
        </Picker>
        <Text>其他备注：</Text>
        <Input name='note' value='' type='text' placeholder='其他信息'/>

        <Radio name='userCheck' value='选中' checked={false} >我已如实填写快递信息，并确认备注信息无误。如有与事实不符或不可抗力导致的订单问题将无法申诉与退款。</Radio>
      </View>

      <View className='submitSec'>
        <View></View>

        <View></View>

    <Button size='mini' type='warn' formType='submit' >提交</Button>
      </View>

    </Form>
  </View>
}

export default PlaceOrder