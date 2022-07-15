const axios =  require('axios').default;

const getEmployees = async () => {
    const response =  await axios.get(`/api/employees`);
    const employees = response.data.employees;
    return employees.sort((a, b) => a.firstname > b.firstname ? 1 : (b.firstname > a.firstname ? -1 : 0));
}

const getEmployee = async (id) => {
    const response =  await axios.get(`/api/employees/${id}`);
    return response.data.employee;
}

const getEmployeeStats = async (id) => {
    const response =  await axios.get(`/api/employees/${id}/stats`);
    return response.data.stats;
}

module.exports.getEmployees = getEmployees;
module.exports.getEmployee = getEmployee;
module.exports.getEmployeeStats = getEmployeeStats;