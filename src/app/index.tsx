
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

type Student = {
  name: string;
  group: string;
  specialty: string;
  avatar: string;
};

const students: Student[] = [
  {
    name: 'Нурболат Мурад',
    group: 'УС-ИС-24-2',
    specialty: 'Информационные системы',
    avatar: 'https://ui-avatars.com/api/?name=User&background=E2E8F0&color=173B65&size=200',
  },
  {
    name: 'Ардабаева Адель',
    group: 'ИС-23-2',
    specialty: 'Информационные системы',
    avatar: 'https://ui-avatars.com/api/?name=User&background=E2E8F0&color=173B65&size=200',
  },
  {
    name: 'Диана',
    group: 'ИС-23-2',
    specialty: 'Информационные системы',
    avatar: 'https://ui-avatars.com/api/?name=User&background=E2E8F0&color=173B65&size=200',
  },
  {
    name: 'Габбас Нурдаулет',
    group: 'УС-ИС-24-2',
    specialty: 'Информационные системы',
    avatar: 'https://ui-avatars.com/api/?name=User&background=E2E8F0&color=173B65&size=200',
  },
];

const menuItems = [
  { title: 'Профиль', icon: '👤', description: 'Личные данные' },
  { title: 'Новости', icon: '📰', description: 'Новости университета' },
  { title: 'Курсы', icon: '📚', description: 'Учебные материалы' },
  { title: 'Настройки', icon: '⚙️', description: 'Настройки приложения' },
];

type StudentCardProps = {
  student: Student;
};

function StudentCard({ student }: StudentCardProps) {
  return (
    <View style={styles.studentCard}>
      <Image source={{ uri: student.avatar }} style={styles.avatar} />
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{student.name}</Text>
        <Text style={styles.muted}>{student.group}</Text>
        <Text style={styles.muted}>{student.specialty}</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const [screen, setScreen] = useState('Главная');
  const [message, setMessage] = useState('');
  const { width } = useWindowDimensions();

  const cardWidth = width < 400 ? '100%' : '47%';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>STUDENT APP</Text>
        <Text style={styles.headerSubtitle}>Учебный кабинет</Text>
      </View>

      <View style={styles.navigation}>
        {['Главная', 'Профиль', 'Меню', 'Студенты'].map((item) => (
          <Pressable
            key={item}
            onPress={() => {
              setScreen(item);
              setMessage('');
            }}
            style={[
              styles.navButton,
              screen === item && styles.activeNavButton,
            ]}
          >
            <Text
              style={[
                styles.navText,
                screen === item && styles.activeNavText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {screen === 'Главная' && (
          <View style={styles.hero}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>T</Text>
            </View>
            <Text style={styles.title}>Turan-Astana University</Text>
            <Text style={styles.subtitle}>
              Лабораторная работа
            </Text>

            <View style={styles.infoCard}>
              <Text style={styles.infoLabel}>Студент</Text>
              <Text style={styles.infoValue}>Нурболат Мурад</Text>

              <Text style={styles.infoLabel}>Группа</Text>
              <Text style={styles.infoValue}>УС-ИС-24-2</Text>

              <Text style={styles.infoLabel}>Дисциплина</Text>
              <Text style={styles.infoValue}>
                Разработка мобильных приложений
              </Text>
            </View>

            <Text style={styles.description}>
              Мобильное приложение, созданное с использованием
              React Native, Expo и TypeScript.
            </Text>
          </View>
        )}

        {screen === 'Профиль' && (
          <View>
            <Text style={styles.title}>Профиль пользователя</Text>
            <View style={styles.profileCard}>
              <Image
                source={{ uri: 'https://ui-avatars.com/api/?name=User&background=E2E8F0&color=173B65&size=200' }}
                style={styles.profileAvatar}
              />
              <Text style={styles.profileName}>Нурболат Мурад</Text>
              <Text style={styles.muted}>Студент университета</Text>

              <View style={styles.infoCard}>
                <Text style={styles.infoLabel}>Дата рождения</Text>
                <Text style={styles.infoValue}>31.01.2006</Text>
                <Text style={styles.infoLabel}>Специальность</Text>
                <Text style={styles.infoValue}>Информационные системы</Text>
                <Text style={styles.infoLabel}>Телефон</Text>
                <Text style={styles.infoValue}>+7 700 000 00 00</Text>
                <Text style={styles.infoLabel}>E-mail</Text>
                <Text style={styles.infoValue}>student@example.com</Text>
              </View>

              <Pressable
                style={styles.primaryButton}
                onPress={() => setMessage('Редактирование профиля')}
              >
                <Text style={styles.primaryButtonText}>
                  Редактировать профиль
                </Text>
              </Pressable>
              {message !== '' && (
                <Text style={styles.successMessage}>{message}</Text>
              )}
            </View>
          </View>
        )}

        {screen === 'Меню' && (
          <View>
            <Text style={styles.title}>Главное меню</Text>
            <Text style={styles.subtitle}>
              Выберите нужный раздел
            </Text>
            <View style={styles.menuGrid}>
              {menuItems.map((item) => (
                <Pressable
                  key={item.title}
                  onPress={() => setMessage(`Вы открыли: ${item.title}`)}
                  style={[styles.menuCard, { width: cardWidth }]}
                >
                  <Text style={styles.menuIcon}>{item.icon}</Text>
                  <Text style={styles.menuTitle}>{item.title}</Text>
                  <Text style={styles.muted}>{item.description}</Text>
                </Pressable>
              ))}
            </View>
            {message !== '' && (
              <Text style={styles.successMessage}>{message}</Text>
            )}
          </View>
        )}

        {screen === 'Студенты' && (
          <View>
            <Text style={styles.title}>Список студентов</Text>
            {students.map((student) => (
              <StudentCard key={student.name} student={student} />
            ))}
          </View>
        )}
      </ScrollView>

      <Text style={styles.footer}>Expo • React Native • TypeScript</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    backgroundColor: '#173B65',
    paddingTop: 48,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
  brand: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  headerSubtitle: {
    color: '#D6E4F0',
    marginTop: 4,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  navButton: {
    paddingVertical: 9,
    paddingHorizontal: 9,
    borderRadius: 8,
  },
  activeNavButton: {
    backgroundColor: '#173B65',
  },
  navText: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '600',
  },
  activeNavText: {
    color: '#FFFFFF',
  },
  content: {
    padding: 18,
    paddingBottom: 28,
  },
  hero: {
    alignItems: 'center',
  },
  logo: {
    width: 82,
    height: 82,
    borderRadius: 24,
    backgroundColor: '#173B65',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 18,
  },
  logoText: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  title: {
    fontSize: 24,
    color: '#173B65',
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    color: '#64748B',
    marginBottom: 18,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 18,
    borderRadius: 16,
    marginVertical: 12,
  },
  infoLabel: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 9,
  },
  infoValue: {
    color: '#172B4D',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 3,
  },
  description: {
    textAlign: 'center',
    color: '#64748B',
    lineHeight: 22,
    marginTop: 8,
  },
  profileCard: {
    alignItems: 'center',
  },
  profileAvatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginVertical: 14,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#173B65',
  },
  primaryButton: {
    backgroundColor: '#173B65',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  successMessage: {
    color: '#167447',
    fontWeight: '600',
    marginVertical: 14,
    textAlign: 'center',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 16,
    minHeight: 145,
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 30,
    marginBottom: 10,
  },
  menuTitle: {
    color: '#173B65',
    fontWeight: '700',
    fontSize: 17,
    marginBottom: 6,
  },
  muted: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 3,
  },
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderRadius: 14,
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontWeight: '700',
    fontSize: 15,
    color: '#173B65',
  },
  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    paddingVertical: 10,
    fontSize: 11,
  },
});
