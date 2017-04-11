const Discord = require('discord.js'); //เรียก discord.js มาใช้
const botRem = new Discord.Client(); //ประกาศ client ขึ้นมา
//event นี้ทำงานเมื่อ login สำเร็จ
botRem.on('ready', () => {
  console.log('Rem ready!');
});
//รอรับ event message เวลามีข้อความโผล่มาในแชท function นี้ก็จะทำงาน
botRem.on('message', message => { 
  if (message.content === 'ฉันรักเอมิเลีย') {
    message.reply('ถึงยังไงเรมก็รักสุบารุค่ะ');
  }
});
botRem.login('MzAxMjE5NzA1MTc0MzYwMDY0.C83_Vg.mfVf5USnWdSmxfBPPodWlK0BhMI');
