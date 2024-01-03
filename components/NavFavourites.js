import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useDispatch } from "react-redux";
import { setOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Atinmo Street, Lagos, Nigeria",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Omole Phase 1, ikeja, Nigeria",
  },
  {
    id: "789",
    icon: "school",
    location: "School",
    destination: "Caleb University, Ibadan-Ijebu Ode Rd, Imota, Nigeria",
  },
];

const NavFavourites = () => {
  const dispatch = useDispatch();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            dispatch(
              setOrigin({
                location: item.destination,
              })
            );
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            size={18}
            color="white"
          />

          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
