const mongoose = require('mongoose');
async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1/cleanblog-test-db", {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Veritabanına başarıyla bağlandı");
    } catch (error) {
        console.log(`Bir hata oluştu: ${error}`);
    }
}

module.exports = {
    connectDB,
}