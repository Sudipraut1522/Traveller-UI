import React, { useState } from "react";

const FilterByBudget = ({ setFilteredHotels }) => {
  const [selectedBudget, setSelectedBudget] = useState("");

  const budgets = [
    { range: "$0-$200", min: 0, max: 200 },
    { range: "$200-$400", min: 200, max: 400 },
    { range: "$400-$600", min: 400, max: 600 },
    { range: "$600-$800", min: 600, max: 800 },
    { range: "$800+", min: 800, max: Infinity },
  ];

  const handleRadioChange = (value) => {
    setSelectedBudget(value);
    setFilteredHotels(value);
  };

  return (
    <div className="p-4 ">
      {budgets.map((budget, index) => (
        <div key={index} className="flex items-center gap-3 mb-2">
          <input
            type="radio"
            id={`budget${index}`}
            name="budget"
            checked={selectedBudget === budget.range}
            onChange={() => handleRadioChange(budget.max)}
          />
          <label
            htmlFor={`budget${index}`}
            className="flex justify-between w-full text-sm"
          >
            <span>{budget.range}</span>
            <span>{budget.max}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterByBudget;
