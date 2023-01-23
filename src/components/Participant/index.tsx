import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactElement } from "react";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
};
export function Participant({ name, onRemove }: Props): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
