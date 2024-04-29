import React from "react";
import { FlatList } from "react-native";
import { Card } from "../../molecules"
import { Text } from "../../atoms"

const FAKE_DATA = [
    {
        id: 0,
        image_url: "https://6vezes7.com.br/wp-content/uploads/2023/06/Captura-de-tela-2023-06-23-143036.jpg",
    },
    {
        id: 1,
        image_url: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info&w=1024",
    }
]

export const HomeList = () => {
    return (
        <FlatList 
        horizontal
          data={FAKE_DATA}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => String(item.id)}
        />
    )
}