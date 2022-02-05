import { useRef, useEffect } from "react";

const Input = ({ id, placeholder }) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const label = labelRef.current;

    const onFocus = () => {
      label.classList.add("input-field-focused");
    };

    const onBlur = () => {
      if (!input.value) {
        label.classList.remove("input-field-focused");
      }
    };

    if (input && label) {
      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);
    }

    return () => {
      if (input && label) {
        input.removeEventListener("focus", onFocus);
        input.removeEventListener("blur", onBlur);
      }
    };
  }, []);

  return (
    <div className="relative text-[17px] font-medium">
      <label
        htmlFor={`input-${id}`}
        className="block translate-y-5 transition w-full text-[#555555] cursor-pointer"
        id={`label-${id}`}
        ref={labelRef}
      >
        {placeholder}
      </label>
      <input
        className="outline-none border-b border-[#777777] block w-full pb-2 text-[#333333] font-medium"
        type={"text"}
        id={`input-${id}`}
        ref={inputRef}
        name={id}
      />
    </div>
  );
};

export default Input;
