/* eslint-disable react/react-in-jsx-scope */
import {FlatList, Modal, Pressable, StyleSheet} from 'react-native';
import {useState} from 'react';
import customStyle from '../../config/styles';
import AppText from './AppText';
import Icon from './Icon';
import Button from './Button';
import DropdownItem from './DropdownItem';

export default function Dropdown({
  placeholder,
  selectedItem,
  onSelectItem,
  options,
}: {
  placeholder?: string;
  selectedItem?: any;
  onSelectItem: (item: any) => void;
  options: Array<{
    title: string;
    id: number;
    icon: string;
    backgroundColor: string;
    color: string;
  }>;
}) {
  const [openModal, setOpenModal] = useState(false);

  const handelSelectItem = item => {
    setOpenModal(false);
    onSelectItem(item);
  };

  return (
    <>
      <Pressable style={styles.container} onPress={() => setOpenModal(true)}>
        <Icon icon="apps" color={customStyle.color.medium} />
        <AppText
          style={[!selectedItem ? styles.placeholder : styles.item, {flex: 1}]}>
          {selectedItem ? selectedItem.title : placeholder}
        </AppText>
        <Icon icon="chevron-down" color={customStyle.color.medium} />
      </Pressable>

      <Modal visible={openModal}>
        <FlatList
          data={options}
          numColumns={3}
          renderItem={({item}) => (
            <DropdownItem item={item} onPress={() => handelSelectItem(item)} />
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
        <Button
          type="default"
          title="Close"
          onPress={() => {
            setOpenModal(false);
          }}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...customStyle.inputContiner,
  },
  placeholder: {
    color: customStyle.color.medium,
    fontSize: 17,
  },
  item: {
    fontSize: 18,
  },
});
