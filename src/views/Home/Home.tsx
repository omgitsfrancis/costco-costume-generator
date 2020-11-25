import React from "react";
import GeneratorModal from "../../components/GeneratorModal";
import ExportView from "../Export";
import { HomeContainer } from "./styles";

function HomeView() {
  return (
    <HomeContainer>
      <GeneratorModal />
      <ExportView />
    </HomeContainer>
  );
}

export default HomeView;
