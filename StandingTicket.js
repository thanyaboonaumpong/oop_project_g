const ConcertTicket = require('./ConcertTicket.js');

class StandingTicket extends ConcertTicket {
    
  constructor(zone, price, queueNumber) {
    
    super(zone, price); 
    
    this.queueNumber = queueNumber; 
    this.location = "Floor (ใกล้เวที)";
    this.pros = "เห็นศิลปินใกล้มาก ได้กระโดดและสนุกเต็มที่";
    this.cons = "ต้องยืนตลอด 2-3 ชั่วโมง และอาจโดนบังได้ถ้าไม่สูง";
  }

  printDetails() {
    console.log(`=== 🎫 Standing Ticket Details ===`);
    console.log(`Ticket Zone: ${this.zone}`); 
    console.log(`Queue No: ${this.queueNumber}`);
    console.log(`📍 Position: ${this.location}`);
    console.log(`✅ Pros: ${this.pros}`);
    console.log(`❌ Cons: ${this.cons}`);
    console.log(`💰 Price: ${this.price} THB`);
    console.log(`Status: ${this.getStatus()}`); 
  }
}

module.exports = StandingTicket;