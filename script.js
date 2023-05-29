const user = [
  { id: 1, username: "lala", address: "Jakarta" },
  { id: 2, username: "lili", address: "Bogor" },
];

const transaction = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Sedang dikirim" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Dibatalkan" },
    ],
  },
];

const detailTransaction = [
  { id: 1, production: "Kopi hitam", qty: 3, totalAmount: 3000 },
  { id: 2, production: "Gula aren", qty: 2, totalAmount: 5000 },
];

function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataUser = user.filter((e) => e.username === username);
      if (dataUser) {
        resolve(dataUser[0]);
      } else {
        reject("Gagal mengambil dataUser");
      }
    }, 1000);
  });
}

function getTransaction(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataTransaction = transaction.filter((e) => e.user_id === userId);
      if (dataTransaction) {
        resolve(dataTransaction);
      } else {
        reject("Gagal mengambil dataTransaction");
      }
    }, 1000);
  });
}

function getDetailTransaction(idTransaction) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataTransaction = detailTransaction.filter(
        (e) => e.id === idTransaction
      );
      if (dataTransaction) {
        resolve(dataTransaction);
      } else {
        reject("Gagal mengambil dataDetailTransaction");
      }
    }, 1000);
  });
}

///////// promise
console.log("PROMISE");
login("lala")
  .then((dataUser) => {
    console.log("Data User diterima:", dataUser);
    return getTransaction(dataUser.id);
  })
  .then((dataTransaction) => {
    console.log("Data Transaction diterima:", dataTransaction[0]);
    return getDetailTransaction(dataTransaction[0].user_id);
  })
  .then((dataDetailTransaction) => {
    console.log(
      "Data Detail Transaction pertama yang diterima:",
      dataDetailTransaction[0]
    );
  })
  .catch((error) => {
    console.log("Error:", error);
  });

///////// asyn / await
async function fetchData() {
  try {
    console.log("ASYNC / AWAIT");
    const dataUser = await login("lala");
    console.log("Data User diterima:", dataUser);

    const dataTransaction = await getTransaction(dataUser.id);
    console.log("Data Transaction diterima:", dataTransaction[0]);

    const dataDetailTransaction = await getDetailTransaction(
      dataTransaction[0].user_id
    );
    console.log(
      "Data Detail Transaction pertama yang diterima:",
      dataDetailTransaction[0]
    );
  } catch (error) {
    console.log("Error:", error);
  }
}

setTimeout(() => {
  fetchData();
}, 4000);
