import React from 'react'
import { FlatList } from 'react-native'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'

const Popularjobs = () => {
  const { data, isLoading, error} = useFetch(
    'search', 
    {
      query: "React developer",
      page: '1',
      num_pages: 1
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />)
          : error ? (<Text> Something went wrong</Text>)
          : (<FlatList 
            data={data} 
            renderItem={({item})=>(
              <PopularJobCard item={item} />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
            />)
        }
      </View>

    </View>
  )
}

export default Popularjobs