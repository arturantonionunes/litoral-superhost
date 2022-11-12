import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-6.svg";
import Icon4 from "../../images/svg-7.svg";
import Icon5 from "../../images/svg-8.svg";
import Icon6 from "../../images/svg-9.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="servicos">
        <ServicesH1>Nossos Serviços</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>GESTÃO DE RESERVAS</ServicesH2>
            <ServicesP>
              Respondemos a todos os pedidos de reserva e administramos o seu
              calendário de forma a garantir a mais elevada taxa de ocupação ao
              melhor preço.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>CHECK-IN</ServicesH2>
            <ServicesP>
              Garantimos um serviço de boas-vindas, 7 dias/semana, pontual, em
              várias línguas e sempre de acordo com as regras de conduta que
              pretender aplicar em sua casa.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>LIMPEZA E LAVANDERIA</ServicesH2>
            <ServicesP>
              Serviço de limpeza completo para sua comodidade. Lavandaria
              adequada, cuidada e delicada de modo a que a sua roupa fique bem
              tratada.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>OTIMIZAÇÃO DE PREÇO</ServicesH2>
            <ServicesP>
              Conhecemos o mercado e somos especializados no funcionamento das
              várias plataformas de aluguel por temporada, o que nos permite
              maximizar o rendimento do seu espaço.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>APOIO AO HÓSPEDE 24H</ServicesH2>
            <ServicesP>
              Estamos sempre à disposição de nossos hóspedes, seja para ajudar
              com dicas e sugestões ou para resolver eventuais problemas,
              garantimos o melhor atendimento.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>FOTOS E ANÚNCIO</ServicesH2>
            <ServicesP>
              Uma vez equipado e mobiliado, é hora de fotografar o seu espaço,
              criar o seu anúncio e colocá-lo nas maiores plataformas mundiais
              de aluguel por temporada.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
