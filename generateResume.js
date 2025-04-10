export async function generateResumeFromAPI(userData) {
  const prompt = `Generate a professional resume:\nName: ${userData.name}\nEmail: ${userData.email}\nExperience: ${userData.experience}`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a resume writer." },
          { role: "user", content: prompt },
        ],
      }),
    });

    const result = await response.json();
    return result.choices[0].message.content;
  } catch (error) {
    console.error("Error generating resume:", error);
    throw error;
  }
}
