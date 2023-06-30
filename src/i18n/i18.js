import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        sidebar: {
          dashboard: "Dashboard",
          user: "User",
          hotel: "Hotel",
          room: "Room",
          delivery: "Delivery",
          stats: "Stats",
          notifications: "Notifications",
          systemHealth: "System Health",
          logs: "Logs",
          settings: "Settings",
          profiles: "Profile",
          logout: "Logout",
        },
        title: {
          addUser: "Add New User",
          addHotel: "Add New Hotel",
          addnew: "Add new",
        },
        option: {
          view: "View",
          delete: "Delete ",
        },
        widget: {
          user: "User",
          orders: "Orders",
          earning: "Earning",
          balance: "Balance",
          seeAllUser: "See all User",
          seeAllOrder: "See all Order",
          seeAllBalance: "See all Balance",
          seeAllEarning: "See all Earning",
        },
        featured: {
          totalRevenue: "Total Revenue",
          totalSale: "Total sales made today",
          about:
            "Previous transaction processing. Last payment may not be included",
          target: "Target",
          lastWeek: "Last Week",
          lastMonth: "Last Month",
        },
        chart: {
          last6Month: "Last 6 Month",
          january: "January",
          february: "February",
          march: "March",
          april: "April",
          may: "May",
          june: "June",
        },
        table: {
          latestTransactions: "Latest Transactions",
          trackingId: "Tracking ID",
          product: "Product",
          customer: "Customer",
          date: "Date",
          amount: "Amount",
          payment: "Payment Method",
          status: "Status",
        },
      },
      vi: {
        sidebar: {
          dashboard: "Bảng điều khiển",
          user: "Người dùng",
          hotel: "Khách sạn",
          room: "Phòng",
          delivery: "Phân phối",
          stats: "Thống kê",
          notifications: "Thông báo",
          systemHealth: "Tình trạng hệ thống",
          logs: "Nhật ký",
          settings: "Cài đặt",
          profiles: "Hồ sơ",
          logout: "Đăng xuất",
        },
        title: {
          "Add New User": "Thêm người dùng mới",
          "Add New Hotel": "Thêm khách sạn",
          addnew: "Tạo mới",
        },
        option: {
          view: "Xem",
          delete: "Xóa",
        },
        widget: {
          user: "Người dùng",
          orders: "Đặt hàng",
          earning: "Thu nhập",
          balance: "Chiết khấu",
          seeAllUser: "Xem tất cả người dùng",
          seeAllOrder: "Xem tất cả đặt hàng",
          seeAllBalance: "Xem tất cả thu nhập",
          seeAllEarning: "Xem tất cả chi tiết chiết khấu",
        },
        featured: {
          totalRevenue: "Tổng doang thu",
          totalSale: "Tổng doang số bán hàng trong ngày",
          about:
            "Xử lý giao dịch trước đó. Khoản thanh toán cuối cùng có thể không được bao gồm",
          target: "Mục tiêu",
          lastWeek: "Tuần trước",
          lastMonth: "Tháng trước",
        },
        chart: {
          last6Month: "6 tháng trước",
          january: "Tháng 1",
          february: "Tháng 2",
          march: "Tháng 3",
          april: "Tháng 4",
          may: "Tháng 5",
          june: "Tháng 6",
        },
        table: {
          latestTransactions: "Giao dịch mới nhất",
          trackingId: "ID theo dõi",
          product: "Sản phẩm",
          customer: "Khách hàng",
          date: "Ngày",
          amount: "Số lượng",
          payment: "Phương thức thanh toán",
          status: "Trạng thái",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["sidebar", "chart", "title", "options", "table", "featured"],
    interpolation: {
      escapeValue: false,
    },
  });
