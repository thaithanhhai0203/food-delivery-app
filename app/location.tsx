import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const LocationScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Java", value: "Cần Thơ" },
    { label: "JavaScript", value: "HCM" },
    { label: "Python", value: "Vĩnh Long" },
  ]);
  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={true}
        placeholder="Your Location"
        placeholderStyle={{ width: 150, color: "#fff" }}
        searchContainerStyle={{ width: 150 }}
        searchTextInputStyle={{ width: 150 }}
        dropDownContainerStyle={{ width: 150 }}
        style={styles.headerDropdown}
        zIndex={999}
      />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  headerDropdown: {
    width: 150,
    backgroundColor: "none",
    borderColor: "transparent",
  },
});
