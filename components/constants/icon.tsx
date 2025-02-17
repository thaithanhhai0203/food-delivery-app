import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

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
};
