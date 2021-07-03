import { ReactNode, useCallback, useRef, useState } from "react";
import ModelsContext, { CarModel } from "../ModelsContext";
import { Container,OverlaysRoot} from "./styles";
import ModelOverlay from '../ModelOverlay'

interface ModelsWrapperProps {
  children: ReactNode;
}

function ModelsWrapper({ children }: ModelsWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [registeredModels, setregisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setregisteredModels((state) => [...state, model]);
  }, []);

  const unregisterModel = useCallback((modelName: string) => {
    setregisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback((modelName: string) => {
    return (
      registeredModels.find((item) => item.modelName === modelName) || null
    );
  }, [registeredModels]);

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay model={item} key={item.modelName}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>
        
        {children}
        
        </Container>;
    </ModelsContext.Provider>
  );
}

export default ModelsWrapper;
