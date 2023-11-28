type BasicInputType = {
  labelText: string;
  placeholderText: string;
  className?: string;
};

const BasicInput = ({
  labelText,
  placeholderText,
  className,
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
      />
    </div>
  );
};

export default BasicInput;
