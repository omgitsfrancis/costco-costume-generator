import React, { createContext, useContext, useState } from "react";

interface FormDataProviderProps {
  children: React.ReactNode;
}

// Context Data Types

type EmployeeBadgeDataType = {
  name: string;
  position: string;
  employeeSince: string;
  setName: (name: string) => void;
  setPosition: (position: string) => void;
  setEmployeeSince: (employeeSince: string) => void;
};

type PriceTagDataType = {
  productId: string;
  productName: string;
  sellPrice: string;
  showPricePerEach: boolean;
  quantity?: string;
  unit?: string;
  setProductId: (productId: string) => void;
  setProductName: (productName: string) => void;
  setSellPrice: (sellPrice: string) => void;
  setShowPricePerEach: (showPricePerEach: boolean) => void;
  setQuantity: (quantity: string) => void;
  setUnit: (unit: string) => void;
};

// Initial Context data

let initialEmployeeBadgeData: EmployeeBadgeDataType = {
  name: "",
  position: "",
  employeeSince: "",
  setName: () => {},
  setPosition: () => {},
  setEmployeeSince: () => {},
};

let intialPriceTagData: PriceTagDataType = {
  productId: "",
  productName: "",
  sellPrice: "",
  showPricePerEach: false,
  quantity: undefined,
  unit: undefined,
  setProductId: () => {},
  setProductName: () => {},
  setSellPrice: () => {},
  setShowPricePerEach: () => {},
  setQuantity: () => {},
  setUnit: () => {},
};

// Form Data Context intialization

const EmployeeBadgeDataContext = createContext<EmployeeBadgeDataType>(
  initialEmployeeBadgeData
);
const PriceTagDataContext = createContext<PriceTagDataType>(intialPriceTagData);

function FormDataProvider({ children }: FormDataProviderProps) {
  // Employee Badge data state
  const [name, setName] = useState(initialEmployeeBadgeData.name);
  const [position, setPosition] = useState(initialEmployeeBadgeData.position);
  const [employeeSince, setEmployeeSince] = useState(
    initialEmployeeBadgeData.employeeSince
  );

  // Price tag data state
  const [productId, setProductId] = useState(intialPriceTagData.productId);
  const [productName, setProductName] = useState(
    intialPriceTagData.productName
  );
  const [sellPrice, setSellPrice] = useState(intialPriceTagData.sellPrice);
  const [showPricePerEach, setShowPricePerEach] = useState(
    intialPriceTagData.showPricePerEach
  );
  const [quantity, setQuantity] = useState(intialPriceTagData.quantity);
  const [unit, setUnit] = useState(intialPriceTagData.unit);

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
      <PriceTagDataContext.Provider
        value={{
          productId,
          productName,
          sellPrice,
          showPricePerEach,
          quantity,
          unit,
          setProductId,
          setProductName,
          setSellPrice,
          setShowPricePerEach,
          setQuantity,
          setUnit,
        }}
      >
        {children}
      </PriceTagDataContext.Provider>
    </EmployeeBadgeDataContext.Provider>
  );
}

// Form Data Hooks

function useEmployeeBadgeData() {
  const context = useContext(EmployeeBadgeDataContext);

  if (context === undefined) {
    throw new Error("useCurrentStep must be used within a FormDataProvider");
  }

  return context;
}

function usePriceTagData() {
  const context = useContext(PriceTagDataContext);

  if (context === undefined) {
    throw new Error("useCurrentStep must be used within a FormDataProvider");
  }

  return context;
}

export { FormDataProvider, useEmployeeBadgeData, usePriceTagData };
