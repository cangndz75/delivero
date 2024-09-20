import { Text, StyleSheet, ScrollView } from "react-native";
import Categories from "@/components/Categories";
import Restaurants from "@/components/Restaurants";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighborhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    top: 80,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});

export default Page;
