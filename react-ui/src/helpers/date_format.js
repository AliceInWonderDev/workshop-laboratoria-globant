import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const prettyDate = (date) => moment(date).format('LL');


export default prettyDate;
