import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
        <FocusedStatusBar background={COLORS.primary}/>

<<<<<<< HEAD
        <View style={{ flex:1 }}>
          <View style={{ zIndex: 0}}>
            <FlatList 
              data={NFTData}
              renderItem={({ item }) => <Text>{item.name}</Text>}
              keyExtractor = {(item) => item.id}
              showsVerticalScrollIndicator = {false}
              ListHeaderComponent={<HomeHeader />}
            />
          </View>
=======
        <View style={{ flex : 1 }}>
            <View style={{ zIndex:0 }}>
                <FlatList
                    data={NFTData}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator = {false}
                    ListHeaderComponent = {<HomeHeader />}
                />
            </View>
>>>>>>> a0d93dbdf2aeff954629a12dcb7cbc2058d44c6a
        </View>
    </SafeAreaView>
  )
}

export default Home