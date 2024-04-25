"use client";
import React, { useState } from "react";
import OrderListTable from "./OrderListTable";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const OrderList = () => {
  // Fake Data
  const orders = [
    {
      id: 1,
      orderNumber: "Bilgisayar",
      invoiceNumber: "INV456",
      date: "22 Nisan 2024",
      status: "Tamamlanan",
      total: "100₺",
      actions: <button>Edit</button>,
    },
    {
      id: 2,
      orderNumber: "Telefon",
      invoiceNumber: "INV457",
      date: "23 Nisan 2024",
      status: "Beklemede",
      total: "80₺",
      actions: <button>Edit</button>,
    },
    {
      id: 3,
      orderNumber: "Telefon",
      invoiceNumber: "INV457",
      date: "23 Nisan 2024",
      status: "Beklemede",
      total: "80₺",
      actions: <button>Edit</button>,
    },
    {
      id: 4,
      orderNumber: "Telefon",
      invoiceNumber: "INV457",
      date: "23 Nisan 2024",
      status: "Beklemede",
      total: "80₺",
      actions: <button>Edit</button>,
    },
    {
      id: 5,
      orderNumber: "Telefon",
      invoiceNumber: "INV457",
      date: "23 Nisan 2024",
      status: "Beklemede",
      total: "80₺",
      actions: <button>Edit</button>,
    },
    {
      id: 6,
      orderNumber: "Telefon",
      invoiceNumber: "INV457",
      date: "23 Nisan 2024",
      status: "Beklemede",
      total: "80₺",
      actions: <button>Edit</button>,
    },
    {
      id: 7,
      orderNumber: "Telefon",
      invoiceNumber: "INV457",
      date: "23 Nisan 2024",
      status: "Beklemede",
      total: "80₺",
      actions: <button>Edit</button>,
    },
    {
      id: 8,
      orderNumber: "Telefon",
      invoiceNumber: "INV457",
      date: "23 Nisan 2024",
      status: "Beklemede",
      total: "80₺",
      actions: <button>Edit</button>,
    },
  ];

  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("Tümü");
  const [orderDate, setOrderDate] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Statü listesi
  const statuses = [
    { name: "Tümü", count: orders.length },
    { name: "Beklemede", count: countStatus("Beklemede") },
    { name: "Hazırlanıyor", count: countStatus("Hazırlanıyor") },
    { name: "Ödeme Bekleniyor", count: countStatus("Ödeme Bekleniyor") },
    { name: "Tamamlanan", count: countStatus("Tamamlanan") },
    { name: "İptal Edilen", count: countStatus("İptal Edilen") },
    { name: "Başarısız Olan", count: countStatus("Başarısız Olan") },
  ];

  // Statü sayılarını hesapla
  function countStatus(status) {
    return orders.filter((order) => order.status === status).length;
  }

  // Handle search input change
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    filterOrders(value, selectedStatus, orderDate);
  };

  // Handle status filter change
  const filterStatus = (status) => {
    setSelectedStatus(status);
    filterOrders(searchValue, status, orderDate);
  };

  // Filter orders based on search input, status, and date
  const filterOrders = (searchValue, status, date) => {
    let filteredOrders = orders;

    if (searchValue) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderNumber.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (status !== "Tümü") {
      filteredOrders = filteredOrders.filter(
        (order) => order.status === status
      );
    }

    if (date === "Tüm Tarihler") {
      // Tüm Tarihler seçildiğinde, tüm siparişleri getir
    } else if (date) {
      // Tarih seçildiğinde, tarihe göre filtreleme yap
      filteredOrders = filteredOrders.filter((order) => order.date === date);
    }

    setFilteredOrders(filteredOrders);
  };

  const handleChangePage = (direction) => {
    if (direction === "prev" && page > 0) {
      setPage(page - 1);
    } else if (
      direction === "next" &&
      (page + 1) * rowsPerPage < filteredOrders.length
    ) {
      setPage(page + 1);
    }
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedOrders = filteredOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <div className="justify-between flex">
        <div className="flex gap-2">
          {statuses.map((status, index) => (
            <React.Fragment key={index}>
              <span
                onClick={() => filterStatus(status.name)}
                className={
                  selectedStatus === status.name
                    ? "text-BaseDark cursor-pointer"
                    : "cursor-pointer"
                }
              >
                {status.name}
              </span>
              <span className="text-CustomGray">({status.count})</span>
              {index !== statuses.length - 1 && (
                <span className="text-CustomGray">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex">
          <form action="" className="flex gap-2">
            <input
              value={searchValue}
              onChange={handleSearchChange}
              type="text"
              className="p-2 border rounded-md"
            />
            <button
              className="p-2 border border-LightBlue rounded-md"
              type="submit"
            >
              Siparişleri Ara
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-between items-center py-3">
        <div className="flex gap-4">
          {/* Filtreleme Seçenekleri */}
          <div className="flex gap-2">
            {/* İşlemler Select */}
            <select
              className="p-1 border rounded-md text-CustomGray w-64"
              name="filterActions"
            >
              <option hidden>Tüm İşlemler</option>
              <option>İşlemler</option>
              <option>İşlemler</option>
            </select>
            {/* Uygula Butonu */}
            <button className="p-1 border border-LightBlue rounded-md">
              Uygula
            </button>
          </div>

          <div className="flex gap-2">
            {/* Tarihler Select */}
            <select
              className="p-1 border rounded-md text-BaseDark w-54 font-medium"
              name="filterDates"
              onChange={(e) => {
                setOrderDate(e.target.value);
                filterOrders(searchValue, selectedStatus, e.target.value); // Filtreleme işlemi burada çağrılıyor
              }}
              value={orderDate}
            >
              <option>Tüm Tarihler</option>
              {orders.map((order) => (
                <option key={order.id} value={order.date}>
                  {order.date}
                </option>
              ))}
            </select>

            {/* Kayıtlı Kullanıcılara Göre Filtreleme Select */}
            <select
              className="p-1 border rounded-md text-CustomGray w-80"
              name="filterUsers"
            >
              <option hidden>Kayıtlı Kullanıcılara göre Filtrele</option>
              <option>İşlemler</option>
              <option>İşlemler</option>
            </select>
            {/* Filtrele Butonu */}
            <button className="p-1 border border-LightBlue rounded-md">
              Filtrele
            </button>
          </div>
        </div>

        {/* Sıralama ve Sayfalama */}
        <div className="flex items-center gap-2 text-DarkBlue">
          <p className="text-CustomGray">{filteredOrders.length} öge</p>

          <MdKeyboardDoubleArrowLeft
            className="border rounded-sm text-[24px] p-1 cursor-pointer"
            onClick={() => handleChangePage("prev")}
          />

          <MdKeyboardArrowLeft
            className={`border rounded-sm text-[24px] p-1 ${
              page === 0 ? "text-gray-300 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => handleChangePage("prev")}
          />

          <span className="border px-4 rounded bg-white">{page + 1}</span>
          <span>/ {Math.ceil(filteredOrders.length / rowsPerPage)}</span>

          <MdKeyboardArrowRight
            className={`border rounded-sm text-[24px] p-1 ${
              (page + 1) * rowsPerPage >= filteredOrders.length
                ? "text-gray-300 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => handleChangePage("next")}
          />

          <MdKeyboardDoubleArrowRight
            className="border rounded-sm text-[24px] p-1 cursor-pointer"
            onClick={() => handleChangePage("next")}
          />
        </div>
      </div>
      <OrderListTable orders={paginatedOrders} />
    </>
  );
};

export default OrderList;
