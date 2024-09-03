import React from "react";
import styles from "./ProductOptions.module.css";

interface OptionGroupProps {
  title: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const OptionGroup: React.FC<OptionGroupProps> = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
}) => (
  <div className={styles.optionGroup}>
    <h3>{title}:</h3>
    <div className={styles.options}>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.option} ${
            selectedOption === option ? styles.selected : ""
          }`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default OptionGroup;
