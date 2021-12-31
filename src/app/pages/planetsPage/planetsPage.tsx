import * as React from 'react';
import { useHistory } from "react-router-dom";
import { LeftMenu, ItemCard , DataContainer} from '../../components';
import { PlanetModel, AuthUser } from '../../model';
import { HeaderBar } from '../../components';
import { SETTINGS_LABEL, PlanetProperties } from '../../constants';


export interface PlanetsPageDataProps {
  planets: PlanetModel[];
  loggedUser: AuthUser,
}

export interface PlanetsPageMethodsProps {
  fetchPlanets: () => void;
}

type Props = PlanetsPageDataProps & PlanetsPageMethodsProps;

export const PlanetsPage: React.FC<Props> = (props: Props): JSX.Element => {
  const history = useHistory();
  React.useEffect(() => {
    props.fetchPlanets();
  }, []);

  React.useEffect(() => {
    if (!props.loggedUser?.name) {
      history.push('/');
    }
  }, [props.loggedUser]);

  const buildPlanetsInfo = (planet: any): any[] => {

    const res = [];
    res.push({label: PlanetProperties.CLIMATE, value: planet.climate});
    res.push({label: PlanetProperties.TERRAIN, value: planet.terrain});
    res.push({label: PlanetProperties.DIAMETER, value: planet.diameter});
    res.push({label: PlanetProperties.POPULATION, value: planet.population});
    return res;
  }

  return (
    <div className="main-container">
      <HeaderBar userName={props.loggedUser?.name} />
        <div className="app-content">
        <LeftMenu />
        <DataContainer sectionName={SETTINGS_LABEL}>
          {props.planets?.map(planet => 
              <ItemCard
                key={planet.name}
                name={planet.name}
                info={buildPlanetsInfo(planet)}
              />
            )}
        </DataContainer>
      </div>
    </div>
  );
}
