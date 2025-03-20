import React from "react";
import Select from "react-select";

function CurrencySelector({ selectedCurrency, onChange, currencyList = {} }) {
  // Dropdown options format
  const options = Object.keys(currencyList).map((code) => ({
    value: code,
    label: currencyList[code], // ✅ "USD - US Dollar" format dikhayega
  }));

  return (
    <Select
      value={options.find((option) => option.value === selectedCurrency)}
      onChange={(selectedOption) => onChange({ target: { value: selectedOption.value } })}
      options={options}
      isSearchable={true}
      placeholder="Select a currency"
      className="w-1/4 flex-1 border border-gray-300 rounded-lg shadow-lg" // ✅ Tailwind classes
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "6px",
          border: "1px solid #ccc",
          boxShadow: "none",
          "&:hover": {
            borderColor: "#335847",
          },
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "white",
          zIndex: 10,
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected ? "#335847" : "white",
          color: state.isSelected ? "white" : "black",
          "&:hover": {
            backgroundColor: "#d6f7e6",
          },
        }),
      }}
    />
  );
}

export default CurrencySelector;
