import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons name="search" size={20} color={Colors.medium} style={styles.searchIcon} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <Link href={"/"} asChild />
      <TouchableOpacity style={styles.optionButton}>
        <Ionicons name="options" size={20} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  </View>
);

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require("@/assets/images/bike.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title}>Delivery | Now</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subtitle}>Kartal, İstanbul</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    marginTop: 20,
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 14,
  },
  titleContainer: {
    flex: 1,
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: { 
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    padding: 10,
    borderRadius: 8,
    color:Colors.mediumDark,
  },
  searchIcon:{
    paddingLeft:10,
  }
});

export default CustomHeader;
