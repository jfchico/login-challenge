import * as React from 'react';
import { LeftMenu, ItemCard } from '../../components';
import { PersonModel } from '../../../model';
import './peoplePage.scss';


export interface PeoplePageDataProps {
  people: PersonModel[];
}

export interface PeoplePageMethodsProps {
  fetchPeople: () => void;
}

type Props = PeoplePageDataProps & PeoplePageMethodsProps;

export const PeoplePage = (props: Props): JSX.Element => {
  React.useEffect(() => {
    props.fetchPeople();
  }, []);

  const buildPeopleInfo = (person: any): any[] => {

    const res = [];
    res.push({label: 'Height', value: person.height});
    res.push({label: 'Birth year', value: person.birth});
    res.push({label: 'Gender', value: person.gender});
    return res;
  }

  return (
    <div className="main-container">
      <LeftMenu />
      <div className="data-container">
        <div className="header">
          <span className="header-title">People</span>
        </div>
        <div className="items-container">
          {props.people?.map(person => 
            <ItemCard
            name={person.name}
            info={buildPeopleInfo(person)}
            />
          )}
          </div>
      </div>
    </div>
  );
}
