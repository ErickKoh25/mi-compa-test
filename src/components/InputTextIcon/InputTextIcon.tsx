/* eslint-disable no-nested-ternary */
import React, { forwardRef } from "react";
import { When } from "react-if";
import { InputTextIconProps } from "../../interfaces/components/InputTextIcon";
import { IconText } from "../IconText";
import { SectionLabel } from "../SectionLabel";
import { ValidationText } from "../ValidationText";

const InputTextIcon = forwardRef<HTMLInputElement, InputTextIconProps>(
  (
    {
      field,
      iconLeft,
      iconRight,
      error = "",
      iconError,
      disabled = false,
      onChange,
      setFunction,
    },
    ref
  ) => (
    <div className="input-container">
      <When condition={field.label}>
        <SectionLabel name={field.name} label={field.label} />
      </When>
      <div className="field-icon-container">
        <When condition={iconLeft !== undefined}>
          <IconText
            className="inner-icon-left"
            error={field.hasError}
            icon={iconLeft}
          />
        </When>
        <When condition={iconRight !== undefined}>
          <IconText
            className="inner-icon-right"
            error={field.hasError}
            icon={iconRight}
          />
        </When>
        <input
          className={`field-input ${field.hasError ? "error" : ""} ${iconLeft!==undefined ? "pad-left" : ""} ${iconRight!==undefined ? "pad-right" : ""}`}
          ref={ref}
          id={field.name}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={field.value ? field.value : ""}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
              if (setFunction) {
                setFunction(e.target.value);
              }
            }
          }}
          disabled={disabled}
        />
        <When condition={error}>
          <ValidationText className="validation-text" icon={iconError} text={error !== "" ? error : "Campo requerido"} />
        </When>
      </div>
    </div>
  )
);
export default InputTextIcon;
