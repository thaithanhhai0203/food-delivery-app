import React, { ComponentType } from "react";
import {
  Feather,
  Octicons,
  Ionicons,
  AntDesign,
  FontAwesome5,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";

type IconProps =
  | React.ComponentProps<typeof Feather>
  | React.ComponentProps<typeof Octicons>
  | React.ComponentProps<typeof Ionicons>
  | React.ComponentProps<typeof AntDesign>
  | React.ComponentProps<typeof FontAwesome5>
  | React.ComponentProps<typeof FontAwesome6>
  | React.ComponentProps<typeof MaterialIcons>;

const createIcon = (Component: ComponentType<IconProps>, name: string) => {
  const IconComponent = (props: IconProps) => (
    <Component name={name} size={props.size || 24} {...props} />
  );
  IconComponent.displayName = `Icon(${name})`;
  return IconComponent;
};

export const icon: Record<string, (props: IconProps) => JSX.Element> = {
  index: createIcon(Feather, "home"),
  order: createIcon(Feather, "shopping-cart"),
  chat: createIcon(Feather, "message-square"),
  profile: createIcon(Feather, "user"),
  next: createIcon(Feather, "arrow-right"),
  dash: createIcon(Octicons, "dash"),
  location: createIcon(Ionicons, "location-outline"),
  search: createIcon(Ionicons, "search-circle-outline"),
  _search: createIcon(Ionicons, "search"),
  notifications: createIcon(Ionicons, "notifications-circle-outline"),
  down: createIcon(AntDesign, "down"),
  hearto: createIcon(AntDesign, "hearto"),
  heart: createIcon(AntDesign, "heart"),
  star: createIcon(AntDesign, "star"),
  back: createIcon(Ionicons, "chevron-back-circle-outline"),
  dollar: createIcon(Feather, "dollar-sign"),
  time: createIcon(Ionicons, "time"),
  add: createIcon(FontAwesome6, "add"),
  minus: createIcon(FontAwesome5, "minus"),
  cart: createIcon(AntDesign, "shoppingcart"),
  checkDone: createIcon(Ionicons, "checkmark-done"),
  _back: createIcon(Ionicons, "chevron-back"),
  phone: createIcon(Feather, "phone"),
  send: createIcon(MaterialIcons, "send"),
  emoticon: createIcon(MaterialIcons, "insert-emoticon"),
  upload: createIcon(Feather, "upload"),
  grid: createIcon(Ionicons, "grid"),
  cash: createIcon(Ionicons, "cash"),
  person: createIcon(Ionicons, "person"),
};
