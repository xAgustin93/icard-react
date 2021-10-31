import { useState } from "react";
import { size } from "lodash";
import {
  getTablesApi,
  addTableApi,
  updateTableApi,
  deleteTableApi,
  getTableApi,
  getTableByNumberApi,
} from "../api/table";
import { useAuth } from "./";

export function useTable() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tables, setTables] = useState(null);
  const [table, setTable] = useState(null);

  const { auth } = useAuth();

  const getTables = async () => {
    try {
      setLoading(true);
      const response = await getTablesApi(auth.token);
      setLoading(false);
      setTables(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addTable = async (data) => {
    try {
      setLoading(true);
      await addTableApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateTable = async (id, data) => {
    try {
      setLoading(true);
      await updateTableApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteTable = async (id) => {
    try {
      setLoading(true);
      await deleteTableApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getTable = async (idTable) => {
    try {
      setLoading(true);
      const response = await getTableApi(idTable);
      setLoading(false);
      setTable(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const isExistTable = async (tableNumber) => {
    try {
      const response = await getTableByNumberApi(tableNumber);
      if (size(response) === 0) throw Error();
      return true;
    } catch (error) {
      setError(error);
    }
  };

  const getTableByNumber = async (tableNumber) => {
    try {
      const response = await getTableByNumberApi(tableNumber);
      return response;
    } catch (error) {
      setError(error);
    }
  };

  return {
    loading,
    error,
    tables,
    table,
    getTables,
    addTable,
    updateTable,
    deleteTable,
    getTable,
    isExistTable,
    getTableByNumber,
  };
}
