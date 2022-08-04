import styled, { css } from "styled-components";

export const InputsContainers = styled.div``;

export const SelectButton = styled.select(
  ({
    error = false,
    disabled = false,
    borderColor = error ? "var(--color-border-red-answer)" : "var(--color-grey-disabled)",
    color = error ? "var(--color-border-red-answer)" : "var(--color-dark)",
    bgColor = disabled ? "var(--color-grey-light)" : "#fff",
  }) => css`
    color: ${color};
    cursor: pointer;
    border: 1px solid ${borderColor};
    background-color: ${bgColor};
    width: 100%;
    height: 38px;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 4px;
    margin-top: 0.2em;
    transition: all ease 0.5s;
    padding-left: 10px;
    &:focus {
      border: 1px solid var(--color-brand);
      color: var(--color-brand);
      transition: all ease 0.5s;
    }
  `,
);

export const SelectOption = styled.option`
  color: var(--color-dark);
  width: 100%;
  height: 1rem;
  font-size: 1em;
`;

export const SectionsLabel = styled.label`
  font-size: 12px;
  color: var(--color-grey-contrast);
`;

export const FieldAndIconContainer = styled.div`
  position: relative;
  width: 100%;
  transition: all ease 0.5s;
  margin-top: ${props => (props.margintop ? props.margintop : "0px")};
  & .inner-icon {
    position: absolute;
    right: 10px;
    top: 2px;
    bottom: 0px;
    margin: auto;
  }
  & .inner-icon-left {
    position: absolute;
    left: 10px;
    top: 2px;
    bottom: 0px;
    margin: auto;
  }
  & .inner-icon:hover,
  .inner-icon-left:hover {
    cursor: pointer;
  }
`;

export const InnerText = styled.p`
  position: absolute;
  right: 15px;
  top: 0.7em;
  color: ${props => (props.error ? "var(--color-border-red-answer)" : "var(--color-grey-contrast)")};
  font-size: 20px;
`;
