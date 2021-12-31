import * as React from 'react';
import './dataContainer.scss';


export interface DataContainerProps {
  sectionName: string;
}

type Props = DataContainerProps & { children: React.ReactNode };

export const DataContainer: React.FC<Props> = (props: Props): JSX.Element => {

  return (
      <div className="data-container">
        <div className="header">
          <span className="header-title">{props.sectionName}</span>
        </div>
        <div className="items-container">
          {props.children}
        </div>
      </div>
  );
}
