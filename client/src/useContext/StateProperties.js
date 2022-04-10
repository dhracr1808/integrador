import { createContext, useContext, useEffect, useState } from "react";
import { getProperties, getProperty } from "../api/properties";

const PropertieState = createContext();

export const UseHookProperties = () => useContext(PropertieState);
const PropertieProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({});

  const showProperties = async () => {
    const result = await getProperties();
    setProperties(result.data);
  };

  const showProperty = async (id) => {
    const property = await getProperty(id);
    setProperty(property.data);
  };

  useEffect(() => showProperties, []);
  return (
    <PropertieState.Provider
      value={{
        properties,
        setProperties,
        property,
        showProperties,
        showProperty,
      }}
    >
      {children}
    </PropertieState.Provider>
  );
};

export default PropertieProvider;
