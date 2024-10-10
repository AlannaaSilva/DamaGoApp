import { Pencil } from "@phosphor-icons/react";
import { Image, Pressable, Text, View } from "react-native";

export function Profile(){
  return(
    <View>
      <View>
        <Text>Perfil</Text>
        <View>
          <Image source={require("../../assets/images/Avatar.png")}/>
          <Pressable>
            <Pencil size={32} />
          </Pressable>
        </View>
      </View>
      <View>

      </View>
    </View>
  )
}