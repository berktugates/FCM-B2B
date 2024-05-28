// Fake Data
const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
];
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // JavaScript'te aylar 0'dan başlar, bu yüzden +1 ekliyoruz
const currentYear = currentDate.getFullYear();

const formattedDate = `${currentDay} ${months[currentMonth - 1]} ${currentYear}`;
export const orders = [
    {
      id: 1,
      userId: 1,
      orderNumber: "F36458",
      invoiceNumber: "INV456",
      date: formattedDate,
      status: "Tamamlandı",
      total: 25,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          imgPath:"/assets/images/akildefterim.png",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          imgPath:"/assets/images/akildefterim.png",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          imgPath:"/assets/images/akildefterim.png",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          imgPath:"/assets/images/akildefterim.png",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
      
    },
    {
      id: 2,
      userId: 2,
      orderNumber: "F36451",
      invoiceNumber: "INV457",
      date: formattedDate,
      status: "Beklemede",
      total:15,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
     
    },
    {
      id: 3,
      userId: 3,
      orderNumber: "F36454",
      invoiceNumber: "INV457",
      date: formattedDate,
      status: "Başarısız",
      total: 89,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
     
    },
    {
      id: 4,
      userId: 4,
      orderNumber: "F36478",
      invoiceNumber: "INV457",
      date: formattedDate,
      status: "İptal edildi",
      total: 77,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
      
    },
    {
      id: 5,
      userId: 5,
      orderNumber: "F36452",
      invoiceNumber: "INV457",
      date: formattedDate,
      status: "Ödeme bekleniyor",
      total: 52,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
    
    },
    {
      id: 6,
      userId: 6,
      orderNumber: "F36441",
      invoiceNumber: "INV457",
      date: formattedDate,
      status: "Tamamlandı",
      total: 23,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
     
    },
    {
      id: 7,
      userId: 7,
      orderNumber: "F36465",
      invoiceNumber: "INV457",
      date: formattedDate,
      status: "Beklemede",
      total: 65,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
      
    },
    {
      id: 8,
      userId: 8,
      orderNumber: "F3646598",
      invoiceNumber: "INV457",
      date: formattedDate,
      status: "Hazırlanıyor",
      total: 24,
      products:[
        {
          id:1,
          name:"Matematik Soru Bankası",
          productCount:20,
          price:100,
          isStock:false,
        },{
          id:2,
          name:"Türkçe Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },{
          id:3,
          name:"Fen Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
        {
          id:4,
          name:"Sosyal Soru Bankası",
          productCount:20,
          price:100,
          isStock:true,
        },
  
      ],
      
    },
  ];
  
  // Statü listesi
  export const statuses = [
    { name: "Tümü", count: orders.length },
    {
      name: "Beklemede",
      count: orders.filter((order) => order.status === "Beklemede").length,
    },
    {
      name: "Hazırlanıyor",
      count: orders.filter((order) => order.status === "Hazırlanıyor").length,
    },
    {
      name: "Ödeme bekleniyor",
      count: orders.filter((order) => order.status === "Ödeme bekleniyor").length,
    },
    {
      name: "Tamamlanan",
      count: orders.filter((order) => order.status === "Tamamlanan").length,
    },
    {
      name: "İptal edilen",
      count: orders.filter((order) => order.status === "İptal edilen").length,
    },
    {
      name: "Başarısız olan",
      count: orders.filter((order) => order.status === "Başarısız olan").length,
    },
  ];
  