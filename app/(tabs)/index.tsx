import { Text, View } from "react-native";

//Each folder can have a index. This index still loads when open app bc folder wrapped in () are just a way to organize
// NO actual route is created. Technically, this is still app/index
export default function Index() {
  return (
    <View className={"flex-1 justify-center items-center"}>
      <Text className={"text-light-200 text-5xl"}>Welcome!!!</Text>
    </View>
  );
}
