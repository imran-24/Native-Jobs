import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SIZES } from '../../../constants'

import styles from './tabs.style'

const TabButton = ({name, activeTab, onHandleSearchType})=>(
  <TouchableOpacity 
  onPress={onHandleSearchType}
  style={styles.btn(name, activeTab)}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
)

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList data={tabs} renderItem={({item})=>(
        <TabButton 
        name={item} activeTab={activeTab} onHandleSearchType={()=> setActiveTab(item)}
        />
        
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item=> item}
      contentContainerStyle={{ columnGap: SIZES.small/2}}
      />
    </View>
  )
}

export default Tabs