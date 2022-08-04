/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import React, { forwardRef } from "react";
import { When } from "react-if";
import {ValidationText} from "../ValidationText";
import { SectionLabel } from "../SectionLabel";
import { InputSelectProps } from "../../interfaces/components/InputSelect";
import { IconText } from "../IconText";

const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
  (
    {
      field,
      options,
      iconLeft,
      iconRight,
      error,
      iconError,
      disabled = false,
      onChange,
    },
    ref
  ) => (
    <div className="select-container">
      <When condition={field.label}>
        <SectionLabel name={field.name} label={field.label} />
      </When>
      <div className="field-select-container">
        <When condition={iconLeft && iconLeft !== undefined}>
          <IconText
            className="inner-icon-left"
            error={field.hasError}
            icon={iconLeft}
          />
        </When>
        <When condition={iconRight && iconRight !== undefined}>
          <IconText
            className="inner-icon-right"
            error={field.hasError}
            icon={iconRight}
          />
        </When>
        <select
        className={`${field.hasError ? "error" : ""} ${iconLeft!==undefined ? "pad-left" : ""} ${iconRight!==undefined ? "pad-right" : ""}`}
          ref={ref}
          id={field.name}
          name={field.name}
          value={
            field.type === "bool" ? field.value : field.value ? field.value : 0
          }
          disabled={disabled}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
        >
          <option
            key="0"
            value="0"
            // hidden={option.hidden}
            disabled
          >
            Selecciona una opción
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <When condition={error}>
        <ValidationText
          className="validation-text"
          icon={iconError}
          text={error !== "" ? error : "Campo requerido"}
        />
      </When>
    </div>
  )
);

export default InputSelect;
