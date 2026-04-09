const Ticket = require("./Ticket");

class SeatingTicket extends Ticket {
  constructor(zone, price, row, seatNumber) {
    // ส่ง zone และ price ไปให้คลาสแม่ (Ticket)
    super(zone, price);
    
    // คุณสมบัติเฉพาะของบัตรนั่ง
    this.row = row;             // แถว เช่น 'A'
    this.seatNumber = seatNumber; // เลขที่นั่ง เช่น '15'
  }

  // Override: แสดงรายละเอียดที่นั่งเพิ่มเข้าไปด้วย
  getDetails() {
    return `${super.getDetails()} | Seat: ${this.row}${this.seatNumber}`;
  }

  // ความสามารถเฉพาะ: บอกทางไปที่นั่ง
  showDirection() {
    console.log(`Your seat is at Row ${this.row}, Number ${this.seatNumber}.`);
    console.log(`Please use Entrance 2 to reach your zone.`);
  }
}

module.exports = SeatingTicket;