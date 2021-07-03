import React,{ReactNode} from 'react';

export interface CarModel {
    modelName:string;
    overlayNode:ReactNode;
    sectionRef:React.RefObject<HTMLElement>;
};

interface ModelsContext{
    wrapperRef:React.RefObject<HTMLElement> //Ref for "ModelWrapper"
    registeredModels: CarModel[] // What was registered within Context API when user starts the page
    registerModel: (model: CarModel) => void // Used when filling in the data
    unregisterModel: (modelName: string) => void // Used for delete the item from list
    getModelByName:(modelName: string) => CarModel | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)