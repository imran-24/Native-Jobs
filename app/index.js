
import { View, ScrollView, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { Text } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";




export default function Home() {
  const router = useRouter();

  return (
    // safeareaview show the content safely without any nautches, home buttons or anything
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,},
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: ()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: ()=>(
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          )
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1, padding: SIZES.medium}}> 
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}