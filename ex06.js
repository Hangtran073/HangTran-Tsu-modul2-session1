const userList = [
    {
        id: 1,
        name: "Lan",
        age: "24",
        email: "user1@gmail.com",
    },
    {
        id: 2,
        name: "Mai",
        age: "24",
        email: "user2@gmail.com",
    },
    {
        id: 3,
        name: "Tuấn",
        age: "24",
        email: "user3@gmail.com",
    }
];
//hiển thị danh sách học viê,
const [...others] = userList;
console.log("danh sách học viên:", others);


//thêm học viên mới
const newStudent = [{
    id: 4,
    name: "Lê Thị Bình",
    age: 26,
    email: "user4@gmail.com",
}];

const updateUserList = [...userList, ...newStudent];
console.log("cập nhật danh sách mới ", updateUserList);

//xóa học viên theo ID;

const deleteStudent = (list, idCanXoa) => {
    const tonTai = list.some(({ id }) => id === idCanXoa);
    if (!tonTai) {
        console.log(`không tìm thấy học viên có id ${idCanXoa}`);
        return list;
    }
    const newList = list.filter(({ id }) => id !== idCanXoa);
    console.log(`Đã xóa học viên có id ${idCanXoa}`);
    console.log("danh sách học viên sau khi xóa", newList);
    return newList;

}


deleteStudent(updateUserList, 2);
deleteStudent(updateUserList, 5);

//tìm kiếm học viên theo tên

const searchName = (ds, tenCanTim)=>
ds.filter(
    ({ name }) =>
        name.toLowerCase().trim() === tenCanTim.toLowerCase().trim()
);
const result = searchName(updateUserList, "Lan")
console.log("danh sách học viên có tên trùng khớp ", result)

//cập nhật thông tin học viên

const capNhatHocVienTheoId = (ds, idCanCapNhat, thongTinMoi) => {
    let found = false;
  
    // 1. Duyệt từng học viên, nếu đúng id thì merge thông tin mới
    const dsMoi = ds.map(hv => {
      if (hv.id === idCanCapNhat) {
        found = true;
        // {...hv, ...thongTinMoi} giữ lại các trường cũ, 
        // ghi đè/ thêm các trường trong thongTinMoi
        return { ...hv, ...thongTinMoi };
      }
      return hv;
    });
  
    // 2. Nếu không tìm thấy, báo lỗi và trả về mảng gốc
    if (!found) {
      console.error(`Lỗi: Không tìm thấy học viên có id ${idCanCapNhat}`);
      return ds;
    }
  
    // 3. Ngược lại, thông báo thành công và trả về mảng mới
    console.log(`Đã cập nhật học viên có id ${idCanCapNhat}`);
    return dsMoi;
  };
  
  
  
  // Cập nhật lớp của học viên id = 2
  danhSach = capNhatHocVienTheoId(updateUserList, 2, { lop: "Z9", diem: 8.5 });
  // Console:
  //   Đã cập nhật học viên có id 2
  // danhSach bây giờ:
  // [
  //   { id: 1, ten: "Lan", lop: "A1" },
  //   { id: 2, ten: "Hùng", lop: "Z9", diem: 8.5 },
  //   { id: 3, ten: "Mai", lop: "C3" }
  // ]
  
  // Thử cập nhật id = 5 (không tồn tại)
  danhSach = capNhatHocVienTheoId(updateUserList, 5, { lop: "X1" });
  // Console:
  //   Lỗi: Không tìm thấy học viên có id 5
  // danhSach giữ nguyên







