const chatMessages = {
  asia: [
    {
      _id: 1,
      text: "Hi, what's going on?",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Asia",
      },
    },
    {
      _id: 2,
      text: "Kal school jaogi?",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Asia",
      },
    },
  ],

  sara: [
    {
      _id: 1,
      text: "Project complete hua?",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Sara",
      },
    },
  ],
};

export default chatMessages;
