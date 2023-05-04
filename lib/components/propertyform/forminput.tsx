import { useState } from "react";

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);
  const {
    errorMessage,
    label,
    onChange,
    dollars,
    percentage,
    id,
    ...inputProps
  } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  const handleError = () => {
    if (focused) {
      setError(true);
    }
  };

  return (
    <label className="flex flex-col border-b border-neutral-700 p-3">
      {label}
      <div>
        {dollars && (
          <span className="inline-flex w-1/12 rounded-l border border-neutral-700 bg-black px-2 text-neutral-400">
            $
          </span>
        )}
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onInvalid={handleError}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
          className="rounded border border-neutral-700 bg-black text-white outline-none"
        />
        {percentage && (
          <span className="inline-flex rounded-r border border-neutral-700 bg-black px-2 text-neutral-400">
            %
          </span>
        )}
      </div>
      {error && <span className="text-xs text-red-500">{errorMessage}</span>}
    </label>
  );
}
