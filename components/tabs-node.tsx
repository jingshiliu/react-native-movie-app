import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
} from "react-native";
import { images } from "@/constants/images";
import React, { FunctionComponent } from "react";

interface TabsNodeProps {
  focused: boolean;
  source: ImageSourcePropType;
  label: string;
}

const TabsNode: FunctionComponent<TabsNodeProps> = ({
  focused,
  source,
  label,
}) => {
  return (
    <ImageBackground
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center gap-1 rounded-full overflow-hidden"
      source={focused ? images.highlight : undefined}
    >
      <Image source={source} className="size-5" />
      <Text>{label}</Text>
    </ImageBackground>
  );
};

export default TabsNode;
