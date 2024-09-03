import React from "react";
import styles from "./ProductOptions.module.css";

interface ColorOptionsProps {
  options: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const ColorOptions: React.FC<ColorOptionsProps> = ({
  options,
  selectedColor,
  setSelectedColor,
}) => (
  <div className={styles.optionGroup}>
    <h3>Colour:</h3>
    <div className={styles.options}>
      {options.map((color) => (
        <button
          key={color}
          className={`${styles.colorOption} ${
            selectedColor === color ? styles.selectedColor : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => setSelectedColor(color)}
        />
      ))}
    </div>
  </div>
);

export default ColorOptions;
