import React from "react";
import { HeroContainer, HeroImageBackground, HeroGradient, ButtonsView } from "./styles"
import { colors } from "../../../styles/colors"
import { Text, Logo } from "../../atoms";
import { Tag, IconButton, PlayButton } from "~/components/molecules";

export const Hero = ({ item, onDetail }) => {

  const { image_url, title, subtitle, type} = item; 

    return (
        <HeroContainer>
      <HeroImageBackground source={{ uri: image_url,}}>
        <HeroGradient  colors={[colors.dark, 'transparent', colors.dark]}>
          { !onDetail && <Logo size="small"/> }
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>{title}</Text>
          <Text size={18}>{subtitle}</Text>
          <ButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline"/>
            <PlayButton /> 
             {!onDetail && (
               <IconButton label="Saiba mais" iconName="information-circle-outline"/>
             )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer> 
    )
}