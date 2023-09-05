// HOW TO IMPORT ?
// const Convert = require('location/userModel.js'); 
// OR
// import Convert from 'location/userModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfuserModel(data)
// FOR ARRAY
// const data = Convert.listOfuserModel(data)
const modelOfDatauserModel = {
	full_name: '',
	email: '',
	role: ''
};
function listOfuserModel(data = []) {
  var listData = [modelOfDatauserModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				full_name: val.full_name ?? null,
				email: val.email ?? null,
				role: val.role ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfuserModel(data = null) {
  var objectData = modelOfDatauserModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.full_name = data.full_name ?? null;
		objectData.email = data.email ?? null;
		objectData.role = data.role ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfuserModel: listOfuserModel,
  objectOfuserModel: objectOfuserModel,
};




  