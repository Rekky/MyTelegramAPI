export const messageSchema = {
    type: "object",
    properties: {
      chatId: { type: "string", minLength: 3 },
      message: { type: "string", minLength: 3 },      
    },
    required: ["chatId", "message"],
    additionalProperties: false
  };