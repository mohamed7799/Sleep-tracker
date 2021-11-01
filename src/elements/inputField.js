const InputField = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      name={name}
      className={`mt-1 border-2 border-opacity-50 border-gray-400 rounded p-2 w-full focus:outline-none focus:border-primary ${className}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
