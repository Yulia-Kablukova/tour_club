import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  login: yup.string().required('Введите логин'),
  password: yup.string().required('Введите пароль'),
});

const phoneRegExp = /^8-([0-9]{3})-([0-9]{3})-([0-9]{4})$/;

export const signUpSchema = yup.object().shape({
  login: yup.string().required('Введите логин'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(6, 'Минимальная длина пароля 6 символов'),
  passwordRepeat: yup
    .string()
    .oneOf([yup.ref('password')], 'Пароли не совпадают')
    .required('Повторите пароль'),
  name: yup.string().required('Введите имя'),
  surname: yup.string().required('Введите фамилию'),
  patronymic: yup.string(),
  birthday: yup.date(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Введите номер телефона в формате 8-XXX-XXX-XXXX'),
  email: yup.string().email('Некорректный e-mail').required('Введите e-mail'),
  gender: yup.string(),
});

export const tripSchema = yup.object().shape({
  name: yup.string().required('Введите название'),
  date: yup.date().required('Выберите дату'),
  category: yup.string().required('Выберите категорию'),
  routeId: yup.number().required('Выберите маршрут'),
  daysCount: yup.number().required('Введите количество дней'),
  difficulty: yup.number().required('Введите сложность'),
  maxParticipants: yup
    .number()
    .required('Введите максимальное число участников'),
  type: yup.string().required('Выберите тип'),
  physicalLevel: yup.string().required('Введите уровень физ. подготовки'),
  gid: yup.number().required('Выберите гида'),
});

export const groupSchema = yup.object().shape({
  number: yup.number().required('Введите номер'),
  name: yup.string().required('Введите название'),
  sport: yup.number().required('Выберите вид спорта'),
  coach: yup.number().required('Выберите тренера'),
  timetable: yup.string().required('Введите расписание'),
});

export const competitionSchema = yup.object().shape({
  name: yup.string().required('Введите название'),
  sport: yup.number().required('Выберите вид спорта'),
  date: yup.date().required('Выберите дату'),
  place: yup.string().required('Введите место проведения'),
  payment: yup.number().required('Введите стартовый взнос'),
  supervisor: yup.number().required('Выберите руководителя'),
});

export const userSchema = yup.object().shape({
  login: yup.string().required('Введите логин'),
  name: yup.string().required('Введите имя'),
  surname: yup.string().required('Введите фамилию'),
  patronymic: yup.string(),
  birthday: yup.date(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Введите номер телефона в формате 8-XXX-XXX-XXXX'),
  email: yup.string().email('Некорректный e-mail').required('Введите e-mail'),
  gender: yup.string(),
  role: yup.string().required('Введите роль'),
});

export const routesPointsSchema = yup.object().shape({
  name: yup.string().required('Введите название'),
});
