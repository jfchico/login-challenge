import * as React from 'react';
import { LeftMenu, ItemCard } from '../../components';
import { PersonModel } from '../../../model';
import { DataContainer } from '../../components/dataContainer';


export interface PeoplePageDataProps {
  people: PersonModel[];
}

export interface PeoplePageMethodsProps {
  fetchPeople: () => void;
}

type Props = PeoplePageDataProps & PeoplePageMethodsProps;

export const PeoplePage: React.FC<Props> = (props: Props): JSX.Element => {
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
      <DataContainer sectionName={'People'}>
        {props.people?.map(person => 
          <ItemCard
          name={person.name}
          info={buildPeopleInfo(person)}
          />
        )}
      </DataContainer>
    </div>
  );
}
