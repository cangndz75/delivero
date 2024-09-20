import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollview";
import { restaurant } from "@/assets/data/restaurant";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.roundButton}
        >
          <Ionicons name="chevron-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="heart-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <>
      <ParallaxScrollView
        style={{ flex: 1 }}
        parallaxHeaderHeight={250}
        backgroundColor="#fff"
        stickyHeaderHeight={100}
        contentBackgroundColor={Colors.lightGrey}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ height: 300, width: "100%" }}
          />
        )}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={{ height: 500 }}>
          <Text>Details</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  stickySection: {
    backgroundColor: "#fff",
    marginLeft: 70,
    height: 100,
    justifyContent: "flex-end",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  bar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  stickySectionText: {
    fontSize: 20,
    margin: 10,
  },
});

export default Details;
