import React from "react";
import { AddressProps } from "../../interfaces/components/CardAddress";
import { Title } from "../Title";
import { PANEL } from "../../constants/constants";

const CardAddress = ({ address, editAddress, removeAddress }: AddressProps) => {
  const icons = PANEL.icons;
  const handleEditAddress = () => {
    if(editAddress){
      editAddress()
    }
  }
  const handleRemoveAddress = () => {
    if(removeAddress) {
      removeAddress()
    }
  }
  return (
    <div className="card-address">
      <div className="cont-card-items">
        <div className="card-actions">
          <span onClick={handleEditAddress}>
            <icons.edit />
          </span>
          <span onClick={handleRemoveAddress}>
            <icons.trash />
          </span>
        </div>
        <Title className="card-title" title={`${address.street}`} />
        <Title
          className="card-subtitle"
          title={`Ext. ${
            address.external_number ? address.external_number : "S/N"
          }   Int. ${
            address.internal_number ? address.internal_number : "S/N"
          }`}
        />
        <Title className="card-subtitle" title={address.settlement} />
        <Title
          className="card-subtitle"
          title={`${address.municipality}, ${address.city}, ${address.state}`}
        />
        <Title className="card-subtitle" title={`${address.country}`} />
      </div>
    </div>
  );
};

export default CardAddress;
