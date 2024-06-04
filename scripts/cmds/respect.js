 module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "Marvin",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },

  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);

      const permission = ["100091606131817"];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "(\/)\ •_•)\/ >😘\oU Wla kang permesion Kay Master Marvin Hiponia",
          event.threadID,
          event.messageID
        );
      }

      const threadID = event.threadID;
      const adminID = event.senderID;
      
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);

      api.sendMessage(
        `Admin Kana Po Dito Master😘`,
        threadID
      );
    } catch (error) {
      console.error("Error promoting user to admin:", error);
      api.sendMessage("Patawarin mo ako Master Hindi Kita maadmin. 😭", event.threadID);
    }
  },
};
