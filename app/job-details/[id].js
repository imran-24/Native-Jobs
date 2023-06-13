import { Stack, useRouter, useSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { ActivityIndicator, RefreshControl, View } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-native'
import { JobAbout, JobFooter, JobTabs, Specifics } from '../../components'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn'
import Company from '../../components/jobdetails/company/Company'
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch'

const JobDetails = () => {

  const params = useSearchParams()
  const router = useRouter()
  const [refreshing, setRefreshing] = useState(false)
  const tabs = ['Abouts', 'Qualifications', 'Responsibilities']
  const [activeTab, setActiveTab] = useState('Abouts')

  const onRefresh = () =>{

  }

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title='Qualifications'
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );

      case "About":
        return (
          <JobAbout info={data[0].job_description ?? "No data provided"} />
        );

      case "Responsibilities":
        return (
          <Specifics
            title='Responsibilities'
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );

      default:
        return null;
    }
  };

  const {data, isLoading, error} = useFetch('job-details',{
    job_id: params.id
  })

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,},
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: ()=>(
            <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={()=> router.back} />
          ),
          headerRight: ()=>(
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          )
        }}
      />
      <>
      <ScrollView showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {
          isLoading ? (<ActivityIndicator size='large' color={COLORS.primary} />)
          : error ? (<Text> Something went wrong</Text>)
          : (<View style={{flex: 1, padding: SIZES.medium}}> 
                <Company 
                companyLogo={data[0]?.employer_logo}
                jobTitle={data[0]?.job_title}
                Location={data[0]?.job_country} 
                companyName={data[0]?.employer_name}/>

                <JobTabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
                {displayTabContent()}
            </View>)
        }
      </ScrollView>
      <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'} />
      </>
      </SafeAreaView>
  )
}
 
export default JobDetails