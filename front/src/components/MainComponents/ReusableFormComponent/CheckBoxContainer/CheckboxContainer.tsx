import React from "react";
import { IDataConstructor } from "../FormInterface";
import { ErrorMessage, Field } from "formik";
import ChecBoxForm from "./ChechBoxForm/ChecBoxForm";

const CheckboxContainer: React.FC<IDataConstructor> = ({
  LabelText,
  FieldType,
  containerCheckBox,
}) => {
  return (
    <div className="flex flex-col w-full gap-2 h-fit">
      <label className="text-lg font-bold text-customBlue">{LabelText}</label>
      <div className="flex flex-wrap items-center gap-2 p-2 bg-white rounded">
        {containerCheckBox?.map((checkBox, i) => {
          return <ChecBoxForm key={i} {...checkBox} />;
        })}
      </div>
    </div>
  );
};

export default CheckboxContainer;