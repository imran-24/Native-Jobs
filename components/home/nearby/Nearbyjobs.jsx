import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList } from 'react-native'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { COLORS } from '../../../constants'
import useFetch from '../../../hook/useFetch'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  const { data, isLoading, error} = useFetch(
    'search', 
    {
      query: "React developer",
      page: '1',
      num_pages: 1
    }
  );
  const router = useRouter()
 
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />)
          : error ? (<Text> Something went wrong</Text>)
          : (data.map(item => (
            <NearbyJobCard 
            key={item?.job_id} 
            handleNavigate={()=> router.push(`/job-details/${item.job_id}`)}
            item={item} />
          )))
        }
      </View>

    </View>
  )
}

export default Nearbyjobs