import React, { useState } from "react";
import styles from "./ProductOptions.module.css";
import OptionGroup from "./OptionGroup";
import ColorOptions from "./ColorOptions";

interface ProductOptionsProps {
  product: {
    conditions: string[];
    capacities: string[];
    colors: string[];
  };
}

const ProductOptions: React.FC<ProductOptionsProps> = ({ product }) => {
  const [selectedCondition, setSelectedCondition] = useState(product.conditions[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacities[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className={styles.productOptions}>
      <OptionGroup
        title="Condition"
        options={product.conditions}
        selectedOption={selectedCondition}
        setSelectedOption={setSelectedCondition}
      />
      <OptionGroup
        title="Capacity"
        options={product.capacities}
        selectedOption={selectedCapacity}
        setSelectedOption={setSelectedCapacity}
      />
      <ColorOptions
        options={product.colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
};

export default ProductOptions;
