import React, { useState } from 'react';
import './itemCard.scss';

interface CardInfo {
  label: string;
  value: string;
}

export interface ItemCardProps {
  name: string;
  info: CardInfo[];
};

export const ItemCard = (props: ItemCardProps) => {
  return (
    <div className="card">
      <div className= "top-section">
        <span className="card-name">{props.name}</span>
      </div>
      <div className="middle-section">
        <ul>
          {props.info?.map(infoData => {
            return <li key={infoData.value}><span>{infoData.label}: {infoData.value}</span></li>
          })}
        </ul>
      </div>
    </div>
  );
};
