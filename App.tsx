import { BottomSheet, BottomSheetView } from '@expo/ui/community/bottom-sheet';
import { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.screen}>
      <Button title="1. Open the bottom sheet" onPress={() => setIsSheetOpen(true)} />
      <Text testID="press-count">Presses inside the Modal: {pressCount}</Text>

      <BottomSheet
	index={isSheetOpen ? 0 : -1}
	enablePanDownToClose
	onClose={() => setIsSheetOpen(false)}>
	<BottomSheetView style={styles.sheet}>
	  <Text>A row here would open a menu or a confirmation.</Text>
	  <Button title="2. Open a React Native Modal" onPress={() => setIsModalOpen(true)} />

	  <Modal transparent visible={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
	    <View style={styles.backdrop}>
	      <View style={styles.card}>
		<Text>3. Press a button in this Modal.</Text>
		<Button title="Press me" onPress={() => setPressCount((count) => count + 1)} />
		<Button title="Close Modal" onPress={() => setIsModalOpen(false)} />
	      </View>
	    </View>
	  </Modal>
	</BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  sheet: { padding: 24, gap: 16 },
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  card: { backgroundColor: 'white', padding: 24, borderRadius: 12, gap: 12 },
});
