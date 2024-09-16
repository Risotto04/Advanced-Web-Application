//โหลดโมดูล express จากนั้นเก็บผลลัพธ4ลงในตัวแปร expressFunction
const expressFunction = require('express');
//เรียกฟ?งก4ชัน expressFunction() ซึ่งผลลัพธ4จะไดFกลับมาเปGนออบเจ็กต4 แลFวนำไปเก็บยังตัวแปร express
const expressApp = expressFunction();
expressApp.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Pass to next layer of middleware
    next();
});
//เรียกใชFเมธอด get เพื่อตรวจสอบพาธที่สMงมาพรFอมกับ HTTP Request โดยกำหนด Endpoint
expressApp.get('/api/resource', function (req, res) {
    const myJson = { id: 'B5111299', name: 'Nuntawut' };
    res.send(myJson);
});
//สรFาง Event Listener รอการเชื่อมตMอผMานจากพอร4ต 3000
expressApp.listen(3000, function () {
    console.log('Listening on port 3000');
});