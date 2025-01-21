import { Feather, Octicons, Ionicons, AntDesign } from "@expo/vector-icons";

export const icon: { [key: string]: (props: any) => JSX.Element } = {
  index: (props: any) => <Feather name="home" size={24} {...props} />,
  cart: (props: any) => <Feather name="shopping-cart" size={24} {...props} />,
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
};
