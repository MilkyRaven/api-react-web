import { createContext, useContext } from "react";

export const ConAmigoContext = createContext();

const conAmibo = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default conAmibo;
export const useAmibo = () => useContext(ConAmigoContext);


