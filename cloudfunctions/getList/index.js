// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   let count = await getCountIndexUserId(event._openid);
//   count = count.total;
//   let list=[]
//   for (let i = 0; i < count ; i += 100) {
//     list = quesionList.concat(await getListIndexUserId(event._openid, i));
//   }
//   return list;
// }
// async function getCountIndexUserId(_openid) {
//   let count = await db.collection('cypde').where({
//     "_openid": _openid
//   }).count();
//   return count;
// }
// async function getListIndexUserId(_openid,skip) {
//   let list = await db.collection('cypde').where({
//     "_openid": _openid
//   }).orderBy('due', 'desc').skip(skip).get();
//   return list.data;
// }


