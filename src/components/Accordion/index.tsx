import * as React from 'react';
import { List } from 'react-native-paper';
import { Sheep } from '../../interface';
import SheepCard from '../SheepCard';
import { useNavigation } from '@react-navigation/native';

export interface IAccordion {
  dataSheeps?: {
    date: string;
    sheeps: Sheep[];
  }[]
}

const Accordion = ({ dataSheeps = [] }: IAccordion) => {
  const navigation = useNavigation();
  const [numberExpanded, setNumberExpanded] = React.useState<number>(-1);

  const handlePress = (number: number) => setNumberExpanded(number);

  function goEditSheep(sheep: Sheep) {
    navigation.navigate("EditSheep", sheep);
  }

  return (
    <List.Section title="Datas de pesagens">

      {dataSheeps.map((dataSheep, index) => {
        return (
          <List.Accordion
            title={dataSheep.date}
            key={dataSheep.date}
            left={(props: any) => <List.Icon {...props} icon="folder" />}
            expanded={numberExpanded === index}
            onPress={() => {
              if (numberExpanded === index)
                setNumberExpanded(-1);
              else
                setNumberExpanded(index);
            }}
          >
            {
              dataSheep.sheeps.map((item) => {
                return <SheepCard key={item.id} sheep={item} onPress={() => goEditSheep(item)} />
              })
            }
          </List.Accordion>
        )
      })}
    </List.Section>
  );
};

export default Accordion;