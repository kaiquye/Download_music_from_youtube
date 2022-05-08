const moment = require('moment-timezone');

const datetimeNow = () => {
    try {
        const now = moment().tz('America/Sao_Paulo');
        const dateHourNow = now.format('YYYY-MM-DD HH:mm:ss');
        return dateHourNow;
    } catch (e) {
        return 0;
    }
};

module.exports = {
    datetimeNow
};