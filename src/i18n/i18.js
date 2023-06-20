import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export const locales = {
  en: "English",
  vi: "Tiếng Việt",
};

const defaultNS = "sidebar";
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
          "Add New User": "Add New User",
          "Add New Hotel": "Add New Hotel",
          addnew: "Add new",
        },
        option: {
          view: "View",
          delete: "Delete",
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
      },
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["sidebar"],
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
  });
