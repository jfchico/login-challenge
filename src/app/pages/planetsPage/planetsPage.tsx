import * as React from 'react';
import { LeftMenu, ItemCard , DataContainer} from '../../components';
import { PlanetModel } from '../../../model';


export interface PlanetsPageDataProps {
  planets: PlanetModel[];
}

export interface PlanetsPageMethodsProps {
  fetchPlanets: () => void;
}

type Props = PlanetsPageDataProps & PlanetsPageMethodsProps;

export const PlanetsPage: React.FC<Props> = (props: Props): JSX.Element => {
  React.useEffect(() => {
    props.fetchPlanets();
  }, []);

  const buildPlanetsInfo = (person: any): any[] => {

    const res = [];
    res.push({label: 'Climate', value: person.climate});
    res.push({label: 'Terrain', value: person.terrain});
    res.push({label: 'Diameter', value: person.diameter});
    res.push({label: 'Population', value: person.population});
    return res;
  }

  return (
    <div className="main-container">
      <LeftMenu />
      <DataContainer sectionName={'Planets'}>
        {props.planets?.map(person => 
            <ItemCard
            name={person.name}
            info={buildPlanetsInfo(person)}
            />
          )}
      </DataContainer>
    </div>
  );
}
