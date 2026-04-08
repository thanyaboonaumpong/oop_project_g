// ดึงความสามารถจากคลาสแม่มาใช้งาน
// (หมายเหตุ: ถ้ารันผ่าน Node.js ในเครื่อง อย่าลืมเช็คเรื่องการ Import)
// ดึงแม่พิมพ์เม่มาจากไฟล์ข้างๆ
const ConcertTicket = require('./ConcertTicket.js');

class StandingTicket extends ConcertTicket {
  constructor(id, price, queueNumber) {
    // 1. ส่งข้อมูลไปให้แม่พิมพ์หลัก (ConcertTicket) 
    // โดยกำหนดโซนเป็น "Floor" อัตโนมัติ
    super(id, "Standing Floor", price);
    
    // 2. ข้อมูลเฉพาะของบัตรยืน
    this.queueNumber = queueNumber; 
    this.location = "Floor (ใกล้เวที)";
    this.pros = "เห็นศิลปินใกล้มาก ได้กระโดดและสนุกเต็มที่";
    this.cons = "ต้องยืนตลอด 2-3 ชั่วโมง และอาจโดนบังได้ถ้าไม่สูง";
  }

  // 3. เขียนทับคำสั่งแสดงรายละเอียดเพื่อให้โชว์ข้อมูลบัตรยืนโดยเฉพาะ (Overriding)
  printDetails() {
    console.log(`=== 🎫 Standing Ticket Details ===`);
    console.log(`Ticket ID: ${this.id}`);
    console.log(`Zone: ${this.title} | Queue No: ${this.queueNumber}`);
    console.log(`📍 Position: ${this.location}`);
    console.log(`✅ Pros: ${this.pros}`);
    console.log(`❌ Cons: ${this.cons}`);
    console.log(`💰 Price: ${this.price} THB`);
    console.log(`Status: ${this.getStatus()}`); // เรียกใช้ความสามารถจากคลาสแม่
  }
}

module.exports = StandingTicket;
// ส่งออกแม่พิมพ์นี้ให้โลกภายนอกใช้งาน

// ถ้าต้องเอาไปใช้ไฟล์อื่น อย่าลืมส่งออกด้วย
// module.exports = StandingTicket;