import React from "react";
import {
  Feather,
  Octicons,
  Ionicons,
  AntDesign,
  FontAwesome6,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export const icon: { [key: string]: (props: any) => JSX.Element } = {
  index: (props: any) => <Feather name="home" size={24} {...props} />,
  order: (props: any) => <Feather name="shopping-cart" size={24} {...props} />,
  chat: (props: any) => <Feather name="message-square" size={24} {...props} />,
  profile: (props: any) => <Feather name="user" size={24} {...props} />,
  next: (props: any) => (
    <Feather name="arrow-right" size={props.size || 24} {...props} />
  ),
  dash: (props: any) => (
    <Octicons name="dash" size={props.size || 24} {...props} />
  ),
  location: (props: any) => (
    <Ionicons name="location-outline" size={props.size || 24} {...props} />
  ),
  search: (props: any) => (
    <Ionicons name="search-circle-outline" size={props.size || 24} {...props} />
  ),
  notifications: (props: any) => (
    <Ionicons
      name="notifications-circle-outline"
      size={props.size || 24}
      {...props}
    />
  ),
  down: (props: any) => (
    <AntDesign name="down" size={props.size || 24} {...props} />
  ),
  hearto: (props: any) => (
    <AntDesign name="hearto" size={props.size || 24} {...props} />
  ),
  heart: (props: any) => (
    <AntDesign name="heart" size={props.size || 24} {...props} />
  ),
  star: (props: any) => (
    <AntDesign name="star" size={props.size || 24} {...props} />
  ),
  back: (props: any) => (
    <Ionicons
      name="chevron-back-circle-outline"
      size={props.size || 24}
      {...props}
    />
  ),
  dollar: (props: any) => (
    <Feather name="dollar-sign" size={props.size || 24} {...props} />
  ),
  time: (props: any) => (
    <Ionicons name="time" size={props.size || 24} {...props} />
  ),
  add: (props: any) => (
    <FontAwesome6 name="add" size={props.size || 24} {...props} />
  ),
  minus: (props: any) => (
    <FontAwesome5 name="minus" size={props.size || 24} {...props} />
  ),
  cart: (props: any) => (
    <AntDesign name="shoppingcart" size={props.size || 24} {...props} />
  ),
  checkDone: (props: any) => (
    <Ionicons name="checkmark-done" size={props.size || 24} {...props} />
  ),
  _back: (props: any) => (
    <Ionicons name="chevron-back" size={props.size || 24} {...props} />
  ),
  phone: (props: any) => (
    <Feather name="phone" size={props.size || 24} {...props} />
  ),
  send: (props: any) => (
    <MaterialIcons name="send" size={props.size || 24} {...props} />
  ),
  emoticon: (props: any) => (
    <MaterialIcons name="insert-emoticon" size={props.size || 24} {...props} />
  ),
  upload: (props: any) => (
    <Feather  name="upload" size={props.size || 24} {...props} />
  ),
};
