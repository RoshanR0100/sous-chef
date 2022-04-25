import React from "react";
import { Platform, View } from "react-native";
import {AdMobBanner} from 'expo-ads-admob';

const MyBannerAd = () => {

    const unitID = Platform.select({
        ios: "ca-app-pub-3940256099942544/2934735716",
        android: "ca-app-pub-5750711746491614/5984590042",
    });
 
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AdMobBanner 
        bannerSize="fullBanner"
        adUnitId="ca-app-pub-3940256099942544/6300978111"
        onAdFailedToLoad={error => console.error(error)}
      />
    </View>
  );
};
 
export default MyBannerAd;