type BasicInputType = {
  labelText: string;
  placeholderText: string;
  className?: string;
  name: string;
  handleChange: (e: any) => void;
  value: string;
  type: string;
};

const BasicInput = ({
  labelText,
  placeholderText,
  className,
  name,
  handleChange,
  value,
  type,
}: BasicInputType) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label style={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}>
        {labelText}
      </label>
      <input
        className="border-2 border-[#ddd] py-2 px-3 focus:outline-0 focus:border-[#0096ff] transition-all rounded-sm w-full"
        placeholder={placeholderText}
        style={{ fontSize: "14px", lineHeight: "22px", fontWeight: 400 }}
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        required
      />
    </div>
  );
};

export default BasicInput;
