import { Link } from "react-router-dom";
import React, { useState } from "react";
import AdminDashboard from "../../AdminDashboard";
import * as company_providers from "../../../providers/master/company";
import DataTablePagination from "../../../components/DataTable";
import { useNavigate } from "react-router-dom";
import { routes_name } from "../../../route/static_route";
import ActionModal from "../../../components/ActionModal";
import { SysDateTransform, showToast } from "../../../utils/global_store";
import { sys_labels } from "../../../utils/constants";
import { Badge } from "antd";

const User = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Kantor/Cabang",
      dataIndex: "name",
      key: "name",
      sortable: true,
    },
    { title: "Alamat", dataIndex: "address", key: "address", sortable: true },
    { title: "Alias", dataIndex: "alias", key: "alias", sortable: true },
    {
      title: "Status",
      dataIndex: "is_active",
      key: "is_active",
      sortable: true,

      render: (val) => (
        <Badge
          status={val ? "success" : "warning"}
          text={val ? "Aktif" : "Tidak Aktif"}
          showZero
        ></Badge>
      ),
    },
    {
      title: "Tanggal Buat",
      dataIndex: "created_at",
      key: "created_at",
      sortable: true,
      render: (val, record) =>
        SysDateTransform({
          date: val,
          type: "long",
          checkIsToDay: true,
          lang: "in",
          withTime: true,
        }),
    },
    {
      title: "Aksi",
      dataIndex: "id",
      key: "id",
      render: (val, record) => (
        <div className="btn-group" role="group">
          <a
            onClick={() => navigate(`${routes_name.M_COMPANY_SHOW}${val}`)}
            style={{ marginRight: 10 }}
            className="btn icon btn-primary btn-sm"
            >
            <i className="bi bi-file-text"></i>
          </a>
          <a
            onClick={() => navigate(`${routes_name.M_COMPANY_DETAIL}${val}`)}
            className="btn icon btn-warning btn-sm"
            style={{ marginRight: 10 }}
          >
            <i className="bi bi-pencil"></i>
          </a>
          {/* <a
            onClick={() => openModal(record)}
            className="btn icon btn-danger btn-sm"
          >
            <i className="bi bi-trash"></i>
          </a> */}
        </div>
      ),
    },
  ];
  const action = [
    <Link
      to={routes_name.M_COMPANY_CREATE}
      className="btn icon icon-left btn-primary"
    >
      <i className="bi bi-plus" /> {sys_labels.action.ADD}
    </Link>,
  ];

  const handleDelete = async () => {
    set_modal(false);
    try {
      const resp = await company_providers.deleteData(id);
      showToast({ message: resp.message, type: "info" });
      window.location.reload();
    } catch (error) {
      showToast({ message: error.message, type: "error" });
    }
  };
  const openModal = async (val) => {
    set_message(val.name);
    set_id(val.id);
    set_modal(true);
  };
  return (
    <AdminDashboard label="">
      <DataTablePagination
        fetchDataFunc={company_providers.getData}
        columns={columns}
        title={`${sys_labels.menus.COMPANY}`}
        action={action}
      />
      <ActionModal
        onOk={handleDelete}
        onCancel={() => set_modal(false)}
        title="Confirmation"
        content={`Are you sure to delete ${message}?`}
        visible={modal}
      />
    </AdminDashboard>
  );
};

export default User;
