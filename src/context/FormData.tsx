import React, { createContext, useContext, useState } from "react";

interface FormDataProviderProps {
  children: React.ReactNode;
}

type EmployeeBadgeDataType = {
  name: string;
  position: string;
  employeeSince: string;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
  setEmployeeSince: (employeeSince: string) => void;
};

let initialEmployeeBadgeData: EmployeeBadgeDataType = {
  name: "",
  position: "",
  employeeSince: "",
  setName: () => {},
  setPosition: () => {},
  setEmployeeSince: () => {},
};

const EmployeeBadgeDataContext = createContext<EmployeeBadgeDataType>(
  initialEmployeeBadgeData
);
// const PriceTagDataContext = createContext({});

function FormDataProvider({ children }: FormDataProviderProps) {
  const [name, setName] = useState(initialEmployeeBadgeData.name);
  const [position, setPosition] = useState(initialEmployeeBadgeData.position);
  const [employeeSince, setEmployeeSince] = useState(
    initialEmployeeBadgeData.employeeSince
  );

  return (
    <EmployeeBadgeDataContext.Provider
      value={{
        name,
        position,
        employeeSince,
        setName,
        setPosition,
        setEmployeeSince,
      }}
    >
      {/* <PriceTagDataContext.Provider> */}
      {children}
      {/* </PriceTagDataContext.Provider> */}
    </EmployeeBadgeDataContext.Provider>
  );
}

function useEmployeeBadgeData() {
  const context = useContext(EmployeeBadgeDataContext);

  if (context === undefined) {
    throw new Error("useCurrentStep must be used within a FormDataProvider");
  }

  return context;
}

export { FormDataProvider, useEmployeeBadgeData };
