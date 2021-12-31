import * as React from 'react';
import { useHistory } from "react-router-dom";
import { LeftMenu, ItemCard } from '../../components';
import { PersonModel, AuthUser } from '../../model';
import { DataContainer } from '../../components/dataContainer';
import { HeaderBar } from '../../components';
import { PeopleProperties, LOGIN_URI, DASHBOARD_LABEL} from '../../constants';


export interface PeoplePageDataProps {
  people: PersonModel[];
  loggedUser: AuthUser,
}

export interface PeoplePageMethodsProps {
  fetchPeople: () => void;
}

type Props = PeoplePageDataProps & PeoplePageMethodsProps;

export const PeoplePage: React.FC<Props> = (props: Props): JSX.Element => {
  const history = useHistory();
  React.useEffect(() => {
    props.fetchPeople();
  }, []);

  React.useEffect(() => {
    if (!props.loggedUser?.name) {
      history.push(LOGIN_URI);
    }
  }, [props.loggedUser]);

  const buildPeopleInfo = (person: any): any[] => {

    const res = [];
    res.push({label: PeopleProperties.HEIGHT, value: person.height});
    res.push({label: PeopleProperties.BIRTH, value: person.birth});
    res.push({label: PeopleProperties.GENDER, value: person.gender});
    return res;
  }

  return (
    <div className="main-container">
      <HeaderBar userName={props.loggedUser?.name} />
      <div className="app-content">
        <LeftMenu />
        <DataContainer sectionName={DASHBOARD_LABEL}>
          {props.people?.map(person => 
            <ItemCard
              key={person.name} 
              name={person.name}
              info={buildPeopleInfo(person)}
            />
          )}
        </DataContainer>
      </div>
    </div>
  );
}
