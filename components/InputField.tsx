import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface InputFieldProds {
 placeholder?: string;
 id: string;
 type: string;
 value: string;
 onChange:(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
 error?: string;
 size?: string;
 sizeY?: string;
 asTextArea?: boolean;
 iconName?: IconProp;
}


const InputField: React.FC<InputFieldProds> =({
  placeholder,
  id,
  type='text',
  value,
  onChange,
  error,
  size = "w-full",
  sizeY = "py-2",
  asTextArea = false,
  iconName,
}) => (
    <div className="mt-1 mb-4 ">
    {asTextArea ? (
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`mt-1 block ${size} px-3 ${sizeY} border rounded-md shadow-sm focus:outline-none sm:text-sm ${
          error ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        }`}
      />
    ) : (
      <div className= {`relative flex item-center border rounded-md  focus:outline-none sm:text-sm text-gray-500 ${
        error ? 'border-red-500' : 'border-dark-300 focus:ring-blue-500 focus:border-blue-500'
      }`}>
        {iconName && (
          <FontAwesomeIcon icon={iconName}  className="absolute left-3 text-dark-500 size-5"/>
        )}
        
        <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`block ${size} px-3 ${sizeY} pl-10 focus:outline-none border rounded-md ${
          error ? 'border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        }`}
      />
      </div>
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default InputField;