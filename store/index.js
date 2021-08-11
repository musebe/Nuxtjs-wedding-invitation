import moment from 'moment';

export const state = () => ({
    names: {
        bride: "Eve",
        groom: "Adam"
    },
    date: {
        day: "SATURDAY",
        month: "AUG",
        date: 17,
        year: 2022,
        time: "4 PM"
    },
    address: {
        first: "Avocado Tree - Volcano of Trust",
        second: "Garden of Eden - Mesopotamia"
    }
});

export const getters = {
    names: state => state.names,
    date: state => state.date,
    address: state => state.address
};

export const mutations = {
    updateNames(state, names) {
        state.names = names;
        return state.names;
    },
    updateDates(state, weddingDate, weddingTime) {
        const date = moment(weddingDate);
        state.date.day = date.format('dddd').toUpperCase();
        state.date.month = date.format('MMM').toUpperCase();
        state.date.date = date.format('D');
        state.date.year = date.format('YYYY');
        state.date.time = moment(weddingTime).format('H A');
        return state.date;
    },
    updateAddress(state, address) {
        state.address.first = address.first;
        state.address.second = address.second;
        return state.address;
    }
};

export const actions = {
    storeWeddingDetails({ commit }, formData) {
        commit('updateNames', formData.names);
        commit('updateDates', formData.date, formData.time);
        return commit('updateAddress', formData.address);
    }
};