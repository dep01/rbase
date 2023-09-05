export const SESSION = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  MENUS: "MENUS",
  URI:"URI",
  PROTOCOL_URI:"PROTOCOL_URI"
};
export const sys_path_data = {
  bank_data: require("../data/used/bank.json"),
  blood_type_data: require("../data/used/blood_type.json"),
  gender_data: require("../data/used/gender.json"),
  marital_status_data: require("../data/used/marital_status.json"),
  religion_data: require("../data/used/religion.json"),
};
export const sys_icons = {};

export const sys_images ={
  img_unauthorized:process.env.PUBLIC_URL + "/assets/images/access/unauthorized.png",
  img_waiting:process.env.PUBLIC_URL + "/assets/images/access/waiting.png",
  img_waiting_relax:process.env.PUBLIC_URL + "/assets/images/access/waiting_relax.png",
  img_logo:process.env.PUBLIC_URL + "/logo192.png",
}
export const file_template = {
  EMPLOYEE_MULTIPLE:
    process.env.PUBLIC_URL + "/assets/templates/employee_multiple.xlsx",
  ALLOWANCE: process.env.PUBLIC_URL + "/assets/templates/allowance.xlsx",
  DEDUCTION: process.env.PUBLIC_URL + "/assets/templates/deduction.xlsx",
  ICENTIVE: process.env.PUBLIC_URL + "/assets/templates/incentive.xlsx",
  SALARY_COMPONENT: process.env.PUBLIC_URL + "/assets/templates/salary_component.xlsx",
};

export const sys_labels = {
  menus: {
    MASTER: "Master Data",
    DASHBOARD: "Dashboard",
    TRANSACTION: "Transaksi",
    REPORT:"Laporan",
    USER:"Pengguna"
  },
  action: {
    EDIT: "Ubah",
    ADD: "Tambah",
    DELETE: "Hapus",
    FORM: "Form",
    EDIT_FORM: "Form",
    UPLOAD: "Upload",
    IMPORT: "Import",
    DOWNLOAD: "Download",
    EXPORT: "Export",
    EXPORT_EXCEL: "Export Excel",
  },
  labels: {
    FULLNAME: "Nama Lengkap",
    PHONE_NUMBER: "Nomor Telepon",
    ADDRESS: "Alamat",
    Photo: "Foto",
  },
};
