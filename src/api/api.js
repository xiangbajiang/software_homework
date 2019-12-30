import { get, post } from "../plugins/axios";
const baseurl = "http://192.168.43.81:8080";
//登陆
export const login = login => post(baseurl + "/user/checkPassword", login);
//教师信息获取
export const get_teacher_info = get_teacher_info =>
  post(baseurl + "/admin/selectAllTeacherInfo", get_teacher_info);

export const delete_teacher_status = delete_teacher_status =>
  post(baseurl + "/admin/deleteTeacherInfo", delete_teacher_status);

export const modify_teacher_info = modify_teacher_info =>
  post(baseurl + "/admin/updateTeacherInfo", modify_teacher_info);

export const insert_teacher_info = insert_teacher_info =>
  post(baseurl + "/teacher/register", insert_teacher_info);

//学生的信息管理
export const delete_student_status = delete_student_status =>
  post(baseurl + "/admin/deleteStudentInfo", delete_student_status);

export const update_student_info = update_student_info =>
  post(baseurl + "/admin/updateStudentInfo", update_student_info);

export const get_student_info = get_student_info =>
  post(baseurl + "/admin/Select_AllStudentInfo", get_student_info);

export const insert_student_info = insert_student_info =>
  post(baseurl + "/teacher/insertStudentInfo", insert_student_info);

//类别管理
export const insert_type_info = insert_type_info =>
  post(baseurl + "/admin/add_competition_coefificient_info", insert_type_info);
export const delete_type_status = delete_type_info =>
  post(
    baseurl + "/admin/delete_competition_coefificient_info",
    delete_type_info
  );
export const update_type_info = update_type_info =>
  post(
    baseurl + "/admin/update_competition_coefificient_info",
    update_type_info
  );

// export const insert_competition_info = insert_competition_info =>
//   post(baseurl + '/admin/select_competition_coefificient_infoByid', insert_competition_info);

export const get_type_info = get_type_info =>
  post(baseurl + "/admin/select_competition_coefificient_info", get_type_info);

//比赛信息
export const delete_competition_status = delete_competition_status =>
  post(baseurl + "/admin/delete_competition_info", delete_competition_status);

export const update_competition_info = update_competition_status =>
  post(baseurl + "/admin/update_CompetitionInfo", update_competition_status);

export const insert_competition_info = insert_competition_info =>
  post(baseurl + "/teacher/insertCompetitionInfo", insert_competition_info);

export const get_competition_info = get_competition =>
  post(baseurl + "/admin/select_Allcompetition_info", get_competition);

//队伍的信息管理
export const get_team_info = get_team_info =>
  post(baseurl + "/admin/select_teamAndMemberInfo", get_team_info);

export const delete_team_status = delete_team_status =>
  post(baseurl + "/admin/delete_team_info", delete_team_status);

export const update_team_info = update_team_info =>
  post(baseurl + "/admin/update_team_info", update_team_info);

export const insert_team_info = insert_team_memeber =>
  post(baseurl + "/teacher/add_teamAndMemberInfo", insert_team_memeber);

//上传材料
export const insert_team_metails = insert_team_metails =>
  post(baseurl + "/teacher/insertAwardInfo", insert_team_metails);

//上传
export const upload = upload => get("/api/get/upload", upload);
