import * as React from 'react';
import './headerBar.scss';


export interface Props {
  userName: string;
}

export const HeaderBar: React.FC<Props> = (props: Props): JSX.Element => {

  return (
      <div className="header-bar">
        <span className="user-name">{props.userName}</span>
      </div>
  );
}
