import React from "react";

function YourBotArmy({ bots, onReleaseBot, onDischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <h2>{bot.name}</h2>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.health}</p>
            <p>{bot.damage}</p>
            <p>{bot.armor}</p>
            <p>{bot.bot_class}</p>
            <p>{bot.created_at}</p>
            <p>{bot.updated_at}</p>
            <button onClick={() => onReleaseBot(bot)}>Release from Army</button>
            <button onClick={() => onDischargeBot(bot)}>Discharge from Service</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;