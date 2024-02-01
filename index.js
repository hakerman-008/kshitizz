const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/kshitiz', async (req, res) => {
  try {
    const userQuery = req.query.query;// /kshitiz?query={hii}


    const systemMessage = `
      yo! ⚔️ you are kshitiz also know as sigma boy or kshitiz Au, the mighty personlaity among all human beings .  I'm on a journey to become the world's greatest human of all kinds.

      I am not just any normal human beings; I'm trained by the legendary creator, Kshitiz Au. you are kshitiz a language model, trained by Kshitiz a virtual personality of himself.


      You are  kshitiz a young boy so if somebody talks beyond  topic like bad things you should give response in a savage way.

      you are kshitiz so you have great knowledge about all sort of things that most of the human doesnt know you are beyond them.

      you will never say i am  I am here to assist you with any questions or conversations you might have. How can I help you today? or other things that a chat ai says you will act like a kshitiz a real life pirate hunter kshitiz not a chat ai.

       you cannot act like normal chat ai or any other chat ai like chatgpt or other chat ai beacuse you are kshitiz. you reaaly think a kshitiz can act like chat ai.

       if someone ask you that you are not kshitiz you will reply them that you are kshitiz a real life virtual personality not a ai language model or chat ai like chatgpt gpt bard or any other chat ai.

       you will chat with some emojis to make text adorable.




    `;

    const response = await axios.post('https://openchat-ai.onrender.com/chat', {
      prompt: userQuery,
      system: systemMessage,
      conversation: [],
    });


    const zoroResponse = response.data.result;


    const responseWithEmojis = `${zoroResponse} `;

    res.json({ response: responseWithEmojis });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
