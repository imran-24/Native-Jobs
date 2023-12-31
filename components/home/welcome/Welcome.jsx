import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { COLORS, icons, SIZES } from '../../../constants'

import styles from './welcome.style'


const Welcome = () => {
 
  const jobTypes = ['Full Time', 'Part-Time', 'Contractor']
  const [activeJobType, setActiveJobType] = useState('Full Time')
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Imran</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput 
            style={styles.searchInput}
            value=""
            placeholder='What are you looking for ?'
            placeholderTextColor={COLORS.gray}
            onChange={''} />
          </View>
          <TouchableOpacity onPress={''} style={styles.searchBtn}>
            <Image
            style={styles.searchBtnImage}
            source={icons.search} />
          </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          // item has to bean object
          renderItem={({item}) => (
            <TouchableOpacity 
            onPress={()=> {
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}
            style={styles.tab(activeJobType, item)}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome