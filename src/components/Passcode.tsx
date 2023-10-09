import { useState } from "react";

export default function Passcode() {
  const [arrayValue, setArrayValue] = useState<(string | number)[]>(['', '', '', '']);
  const [currentFocusedIndex, setCurrentFocusedIndex] = useState(0);

  return (
    <>
      <div> currentFocusedIndex: {currentFocusedIndex}</div>

      {arrayValue.map((value: string | number, index: number) => (
        <input
          key={`index-${index}`}
          inputMode="numeric"
          pattern="\d{1}"
          maxLength={1}
          type="text"
          value={String(value)}
        />
      ))}
    </>
  );
}
