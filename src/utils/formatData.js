const category = [
    {
        _id: "1",
        category_name: "CĂN HỘ CHUNG CƯ"
        },
        {
        _id: "2",
        category_name: "OFFICETEL"
        },
        {
        _id: "3",
        category_name: "SHOP HOUSE"
        },
        {
        _id: "4",
        category_name: "NHÀ RIÊNG"
        },
        {
        _id: "5",
        category_name: "NHÀ PHỐ LIÊN KẾ"
        },
        {
        _id: "6",
        category_name: "BIỆT THỰ"
        },
        {
        _id: "7",
        category_name: "CONDOTEL"
        },
        {
        _id: "8",
        category_name: "BIỆT THỰ NGHỈ DƯỠNG"
        },
        {
        _id: "9",
        category_name: "BUNGALOW"
        },
        {
        _id: "10",
        category_name: "NHÀ XƯỞNG"
        },
        {
        _id: "11",
        category_name: "ĐẤT NỀN / ĐẤT DỰ ÁN"
        },
        {
        _id: "12",
        category_name: "TÒA NHÀ VĂN PHÒNG"
        },
        {
        _id: "13",
        category_name: "KHÁCH SẠN"
        },
        {
        _id: "14",
        category_name: "TRUNG TÂM THƯƠNG MẠI"
        },
        {
        _id: "100",
        category_name: "KHÁC"
        },
]
export const formatNumber = number => parseFloat(number.toFixed(2));
export const formatCategory = _id => category.filter(item => item._id === _id)