import {OpenAI } from "openai";
// import {Configuration } from "openai";

const openai  = new OpenAI ({
    organization:"org-n7GEY5i1l4RnlIoNYSlwA2zq",
    apiKey:"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"

});

// const openai = new OpenAI(configuration);

const completion = await openai.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:[{role:"user",content:"Hello"}]
})

console.log(completion.data.choices[0].message);
