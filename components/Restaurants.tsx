import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { restaurants } from "@/assets/data/home";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 15 }}
    >
      {restaurants.map((restaurant, index) => (
        <Link href={"/detail"} key={index} asChild>
          <TouchableOpacity>
            <View style={styles.categoryCard}>
              <Image source={restaurant.img} style={styles.image} />
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{restaurant.name}</Text>
                <Text style={styles.categoryText}>
                  {restaurant.rating} {restaurant.ratings}
                </Text>
                <Text
                  style={{
                    color: Colors.medium,
                    fontSize: 12,
                    fontWeight: "bold",
                    paddingLeft: 6,
                  }}
                >
                  {restaurant.distance}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 250,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    borderRadius: 4,
  },
  categoryText: {
    paddingVertical: 5,
    fontSize: 18,
    padding: 6,
    fontWeight: "bold",
  },
  image: {
    flex: 5,
    width: undefined,
    height: undefined,
  },
  imageContainer: {},
  categoryBox: {
    flex: 2,
    padding: 10,
  },
});

export default Restaurants;
