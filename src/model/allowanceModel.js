// HOW TO IMPORT ?
// const Convert = require('location/allowanceModel.js'); 
// OR
// import Convert from 'location/allowanceModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfallowanceModel(data)
// FOR ARRAY
// const data = Convert.listOfallowanceModel(data)

const modelOfDataemployee = {
	id: '',
	name: ''
};
const modelOfDatacomponent_name = {
	id: '',
	name: ''
};
const modelOfDataallowanceModel = {
	id: '',
	allowance_type: '',
	ammount: '',
	is_taxable: false,
	created_at: '',
	employee: modelOfDataemployee,
	component_name: modelOfDatacomponent_name
};
function listOfallowanceModel(data = []) {
  var listData = [modelOfDataallowanceModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				id: val.id ?? null,
				allowance_type: val.allowance_type ?? null,
				ammount: val.ammount ?? null,
				is_taxable: val.is_taxable ?? null,
				created_at: val.created_at ?? null,
				employee: objectOfemployee(val.employee ?? null),
				component_name: objectOfcomponent_name(val.component_name ?? null)
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfallowanceModel(data = null) {
  var objectData = modelOfDataallowanceModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.id = data.id ?? null;
		objectData.allowance_type = data.allowance_type ?? null;
		objectData.ammount = data.ammount ?? null;
		objectData.is_taxable = data.is_taxable ?? null;
		objectData.created_at = data.created_at ?? null;
		objectData.employee = objectOfemployee(data.employee ?? null);
		objectData.component_name = objectOfcomponent_name(data.component_name ?? null);
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfallowanceModel: listOfallowanceModel,
  objectOfallowanceModel: objectOfallowanceModel,
};

function objectOfemployee(data = null) {
  var objectData = modelOfDataemployee;
  if (data == null) {
    return null;
  }
  try {
		objectData.id = data.id ?? null;
		objectData.name = data.name ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
function objectOfcomponent_name(data = null) {
  var objectData = modelOfDatacomponent_name;
  if (data == null) {
    return null;
  }
  try {
		objectData.id = data.id ?? null;
		objectData.name = data.name ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}



  