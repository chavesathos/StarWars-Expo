import React from "react";
import { ScreenScrollContainer, HomeList, Hero } from "../../components"

const FAKE_DATA_CHARACTERES = [
   {
       id: 0,
       image_url: "https://6vezes7.com.br/wp-content/uploads/2023/06/Captura-de-tela-2023-06-23-143036.jpg",
       title: "Darth Vader",
       type: "Personagem",
       subtitle: "Anakin Skywalker",
       description: "Darth Vader, também conhecido como Anakin Skywalker, é um personagem fictício da franquia Star Wars. O personagem é o antagonista central da trilogia original e, como Anakin Skywalker, é o principal protagonista de toda a trilogia prequela. O criador de Star Wars, George Lucas, se referiu coletivamente aos seis primeiros filmes episódicos da franquia como a tragédia de Anakin Skywalker. Ele se tornou um dos vilões mais icônicos da cultura popular e foi listado entre os maiores vilões e personagens fictícios de todos os tempos.",
   },
   {
       id: 1,
       image_url: "https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info&w=1024",
   }
]

export const Home = () => {
   return (
    <ScreenScrollContainer>
      <Hero item={{
        title: "Episódio I",
        subtitle: "A Ameaça Fantasma",
        type: "Filme",
        image_url: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
      }} /> 
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer> 
   )

}