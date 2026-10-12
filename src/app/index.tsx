import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>TU</Text>
        </View>

        <Text style={styles.university}>
          Университет «Туран-Астана»
        </Text>

        <Text style={styles.title}>
          Лабораторная работа №1
        </Text>

        <Text style={styles.subtitle}>
          Создание первого мобильного приложения
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Студент</Text>
        <Text style={styles.value}>Нурболат Мурад</Text>

        <Text style={styles.label}>Группа</Text>
        <Text style={styles.value}>УС-ИС-24-2</Text>

        <Text style={styles.label}>Дисциплина</Text>
        <Text style={styles.value}>
          Разработка приложений для мобильных устройств
        </Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            TypeScript · React Native · Expo
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
  },
  logo: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: '#173f70',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  university: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#173f70',
    textAlign: 'center',
    marginBottom: 22,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#dbe3ed',
    width: '100%',
    marginVertical: 22,
  },
  label: {
    color: '#64748b',
    fontSize: 13,
    marginTop: 12,
  },
  value: {
    color: '#1f2937',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 4,
  },
  footer: {
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#dbe3ed',
    width: '100%',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#64748b',
  },
});