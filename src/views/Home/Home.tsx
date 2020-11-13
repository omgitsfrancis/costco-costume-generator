import React from "react";
import GeneratorModal from "../../components/GeneratorModal";
import { FormContainer, HomeContainer, PreviewContainer } from "./styles";

function HomeView() {
  return (
    <HomeContainer>
      <FormContainer>
        <GeneratorModal />
      </FormContainer>
      <PreviewContainer>
        {/* TODO: Add Preview */}
      </PreviewContainer>
    </HomeContainer>
  )
}

export default HomeView;