const axios =  require('axios').default;

const getEmployees = async () => {
    const response =  await axios.get(`/api/employees`);
    const employees = response.data.employees;
    
    return employees.sort((a, b) => a.firstname > b.firstname ? 1 : (b.firstname > a.firstname ? -1 : 0));
}

module.exports.getEmployees = getEmployees;