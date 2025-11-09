module.exports = {
  config: {
    name: "talkbot",
    aliases: ["tb", "chat"],
    version: "1.0",
    author: "BELAL BOTX666",
    countDown: 5,
    role: 0,
    shortDescription: "Talk with bot in inbox or group",
    longDescription: "Start a conversation with the bot anywhere — inbox, group, or with friends",
    category: "fun",
    guide: "{pn} your message"
  },

  onStart: async function ({ message, args }) {
    const input = args.join(" ");
    if (!input) return message.reply("❌ কিছু লিখো, আমি শুনছি!");

    try {
      // লোকাল রেসপন্স লজিক
      const responses = {
        hello: "হ্যালো! 😊",
        hi: "হাই! কেমন আছো?",
        how: "আমি ভালো আছি! তুমি কেমন?",
        bye: "বিদায়! আবার দেখা হবে! 👋",
        thanks: "স্বাগতম! 😊",
        love: "আমিও তোমাকে ভালোবাসি! ❤️",
        help: "তুমি আমাকে যেকোনো কিছু জিজ্ঞেস করতে পারো। আমি সাহায্য করার জন্যই আছি!",
      };

      const key = input.toLowerCase();
      const reply = responses[key] || "😄 দারুন! আর কিছু বলো...";

      message.reply(reply);
    } catch (err) {
      message.reply("🤖 আমি ঠিক বুঝিনি। একটু সহজ করে বলো তো!");
    }
  }
};
