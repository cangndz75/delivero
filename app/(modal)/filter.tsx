import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import categories from "@/assets/data/filter.json";
import { Ionicons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { AnimatedView } from "react-native-reanimated/lib/typescript/reanimated2/component/View";
interface Category {
  name: string;
  count: number;
  checked?: boolean;
}

const ItemBox = () => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <View style={styles.item}>
          <Ionicons
            name="arrow-down-outline"
            size={20}
            color={Colors.primary}
          />
          <Text style={{ flex: 1 }}>Sort</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={styles.item}>
          <Ionicons name="fast-food-outline" size={20} color={Colors.primary} />
          <Text style={{ flex: 1 }}>Hygiene rating</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={styles.item}>
          <Ionicons name="pricetag-outline" size={20} color={Colors.primary} />
          <Text style={{ flex: 1 }}>Offers</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={styles.item}>
          <Ionicons name="nutrition-outline" size={20} color={Colors.primary} />
          <Text style={{ flex: 1 }}>Dietary</Text>
          <Ionicons name="chevron-forward" size={22} color={Colors.primary} />
        </View>
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Categories</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = React.useState<Category[]>(categories);
  const [selected, setSelected] = React.useState<Category[]>([]);
  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked);
    const newSelected = selectedItems.length > 0;

    if (hasSelected !== newSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : 0);
      scale.value = withTiming(newSelected ? 1 : 0);
    }
    setSelected(selectedItems);
  }, [items]);
  const handleClearAll = () => {
    const updatedItems = items.map((item) => {
      item.checked = false;
      return item;
    });
    setItems(updatedItems);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        isChecked={items[index].checked}
        fillColor={Colors.primary}
        unfillColor="#fff"
        iconStyle={{
          borderColor: Colors.primary,
          borderRadius: 4,
          borderWidth: 2,
        }}
        innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
        onPress={() => {
          const isChecked = items[index].checked;

          const updatedItems = items.map((item) => {
            if (item.name === items[index].name) {
              item.checked = !isChecked;
            }
            return item;
          });
          setItems(updatedItems);
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={{ height: 76 }} />
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <Animated.View style={[animatedStyles, styles.outlinedButton]}>
            <TouchableOpacity
              style={styles.outlinedButton}
              onPress={handleClearAll}
            >
              <Animated.Text style={[animatedText, styles.outlinedButtonText]}>
                Clear all
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity
            style={styles.fullButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.footerText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -10 },
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 10,
    height: 56,
    flex: 1,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingVertical: 10,
    gap: 20,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  itemText: {
    flex: 1,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  outlinedButton: {
    borderColor: Colors.primary,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 56,
  },
  outlinedButtonText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Filter;
