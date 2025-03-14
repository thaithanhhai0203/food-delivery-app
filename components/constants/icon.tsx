import React, { ComponentType } from "react";
import {
  Feather,
  Octicons,
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
  Entypo
} from "@expo/vector-icons";

type IconProps =
  | React.ComponentProps<typeof Feather>
  | React.ComponentProps<typeof Octicons>
  | React.ComponentProps<typeof Ionicons>
  | React.ComponentProps<typeof AntDesign>
  | React.ComponentProps<typeof FontAwesome>
  | React.ComponentProps<typeof FontAwesome5>
  | React.ComponentProps<typeof FontAwesome6>
  | React.ComponentProps<typeof MaterialIcons>     
  | React.ComponentProps<typeof Entypo>;      

const createIcon = (Component: ComponentType<IconProps>, name: string) => {
  const IconComponent = (props: IconProps) => (
    <Component name={name} size={props.size || 24} {...props} />
  );
  IconComponent.displayName = `Icon(${name})`;
  return IconComponent;
};

export const icons: Record<string, (props: IconProps) => JSX.Element> = {
  index: createIcon(Feather, "home"),
  order: createIcon(Feather, "shopping-cart"),
  chat: createIcon(Feather, "message-square"),
  profile: createIcon(Feather, "user"),
  next: createIcon(Feather, "arrow-right"),
  dash: createIcon(Octicons, "dash"),
  location: createIcon(Ionicons, "location-outline"),
  searchOutline: createIcon(Ionicons, "search-circle-outline"),
  search: createIcon(Ionicons, "search"),
  notifications: createIcon(Ionicons, "notifications-circle-outline"),
  down: createIcon(AntDesign, "down"),
  hearto: createIcon(AntDesign, "hearto"),
  heart: createIcon(AntDesign, "heart"),
  star: createIcon(AntDesign, "star"),
  starOutline: createIcon(AntDesign, "staro"),
  backOutline: createIcon(Ionicons, "chevron-back-circle-outline"),
  back: createIcon(Ionicons, "chevron-back"),
  dollar: createIcon(Feather, "dollar-sign"),
  time: createIcon(Ionicons, "time"),
  timesCircle: createIcon(FontAwesome, "times-circle"),
  add: createIcon(Ionicons, "add-circle-outline"),
  remove: createIcon(Ionicons, "remove-circle-outline"),
  cart: createIcon(AntDesign, "shoppingcart"),
  checkDone: createIcon(Ionicons, "checkmark-done"),
  phone: createIcon(Feather, "phone"),
  send: createIcon(MaterialIcons, "send"),
  emoticon: createIcon(MaterialIcons, "insert-emoticon"),
  upload: createIcon(Feather, "upload"),
  grid: createIcon(Ionicons, "grid"),
  cash: createIcon(Ionicons, "cash"),
  person: createIcon(Ionicons, "person"),
  percent: createIcon(FontAwesome, "percent"),
  checkCircle: createIcon(FontAwesome, "check-circle"),
  user: createIcon(FontAwesome, "user"),
  userOutline: createIcon(Feather, "user"),
  google: createIcon(FontAwesome, "google"),
  facebook: createIcon(FontAwesome, "facebook"),
  apple: createIcon(FontAwesome, "apple"),
  visibility: createIcon(MaterialIcons, "visibility"),
  visibilityOff: createIcon(MaterialIcons, "visibility-off"),
  dotsThree: createIcon(Entypo, "dots-three-horizontal"),
  camera: createIcon(MaterialIcons, "photo-camera"),
  sliders: createIcon(Feather, "sliders"),
  mapPin: createIcon(Feather, "map-pin"),
  hamburger: createIcon(FontAwesome5, "hamburger"),
  hotdog: createIcon(FontAwesome5, "hotdog"),
  cocktail: createIcon(FontAwesome5, "cocktail"),
  pizzaSlice: createIcon(FontAwesome5, "pizza-slice"),
  forward: createIcon(Ionicons, "chevron-forward"),
  logOut: createIcon(Feather, "log-out"),
  settings: createIcon(Feather, "settings"),
  creditCard: createIcon(Feather, "credit-card"),
  helpCircle: createIcon(Feather, "help-circle"),
  trash: createIcon(Feather, "trash-2"),
  userOther: createIcon(Feather, "user-plus"),
  close: createIcon(Ionicons, "close"),
  
};
